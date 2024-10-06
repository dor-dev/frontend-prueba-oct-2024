import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { usePodcastContext } from "../PodcastContext";

function PodcastDetail({setLoading}) {
  const { podcastId } = useParams();

  const [episodes, setEpisodes] = useState([]);
  
  useEffect(() => {
    const podcastData = localStorage.getItem("podcast-episodes");

    const lastDay = new Date() - (1000 * 60 * 60 * 24);

    if (podcastData) {
      const parsedPodcastData = JSON.parse(podcastData);

      const currentPodcastData = parsedPodcastData.find(podcast => podcast.id === podcastId);

      const updateIsExpired = !currentPodcastData?.lastUpdated
      || (new Date(currentPodcastData.lastUpdated)) < lastDay;

      if (!updateIsExpired && currentPodcastData?.items) {
        setEpisodes(currentPodcastData.items);
        return;
      }
    }

    fetchPodcastList();

    async function fetchPodcastList() {

      try {
        setLoading(true);

        const response = await fetch(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`);

        if (!response.ok) {
          throw new Error("Couldn't fetch data");
        }

        const result = await response.json();

        console.warn("RESPONSE", result);
        
        const formattedResultPodcasts = result["results"]
          .filter(episode => episode["wrapperType"] !== "track")
          .map(episode => {
          return {
            id: episode["trackId"], 
            title: episode["trackName"], 
            date: new Date(episode["releaseDate"]).getTime(), 
            url: episode["episodeUrl"], 
            duration: episode["trackTimeMillis"], 
            author: episode["artistName"], 
            description: episode["description"], 
          };
        })

        const newPodcastData = {
          id: podcastId, 
          items: formattedResultPodcasts, 
          lastUpdated: new Date().getTime(), 
        };

        if (podcastData) {
          localStorage.setItem("podcast-episodes", JSON.stringify([...JSON.parse(podcastData), newPodcastData]));
        } else {
          localStorage.setItem("podcast-episodes", JSON.stringify([newPodcastData]));
        }

        setEpisodes(formattedResultPodcasts);

      } catch (error) {
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    }

  }, [podcastId, setLoading]);

  return (
    <>
      <div className="p-4 py-3 shadow-md mb-4">
        <p className="text-lg"><b>Episodes: {episodes.length}</b></p>
      </div>
      <EpisodeList episodes={episodes}/>
    </>
  );
}

export default PodcastDetail;

function EpisodeList({episodes}) {
  
  const { podcast } = usePodcastContext();

  const formatDuration = (duration) => {
    const miliseconds = duration / 1000;
    const seconds = Math.floor(miliseconds % 60);
    const minutes = Math.floor((miliseconds / 60) % 60);
    const hours   = Math.floor(((miliseconds / (60 * 60)) % 24));

    const formattedTime = 
      String(hours).padStart(2, '0') + ':' + 
      String(minutes).padStart(2, '0') + ':' + 
      String(seconds).padStart(2, '0');

    return formattedTime;
  }

  return (
    <div className="p-4 py-3 shadow-md">
      <div className="flex font-bold border-b-2 p-1 gap-2">
        <p className="flex-1">Title</p>
        <p className="basis-20 flex-none">Date</p>
        <p className="basis-20 flex-none text-right">Duration</p>
      </div>
      <ul>
        {episodes.map((episode, i) => {
          return (
            <li 
              className={`flex p-1 gap-2 ${i % 2 === 0 ? "bg-zinc-50" : ""}`}
              key={episode.id}>
              <Link 
                to={"episode/" + episode.id} 
                state={{podcast: podcast, episode: episode}} 
                className="flex-1 text-sky-500">
                {episode.title}
              </Link>
              <p className="basis-20 flex-none">{new Date(episode.date).toLocaleDateString()}</p>
              <p className="basis-20 flex-none text-right">{formatDuration(episode.duration)}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}