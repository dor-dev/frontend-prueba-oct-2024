import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LandingPage({setLoading}) {

  const [podcasts, setPodcasts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const podcastData = localStorage.getItem("podcasts");

    const lastDay = new Date() - (1000 * 60 * 60 * 24);

    if (podcastData) {
      const parsedPodcastData = JSON.parse(podcastData);

      const updateIsExpired = !parsedPodcastData?.lastUpdated
      || (new Date(parsedPodcastData.lastUpdated)) < lastDay;

      if (!updateIsExpired && parsedPodcastData?.items) {
        setPodcasts(parsedPodcastData.items);
        return;
      }
    }

    fetchPodcastList();

    async function fetchPodcastList() {

      try {
        setLoading(true);

        const response = await fetch("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json");

        if (!response.ok) {
          throw new Error("Couldn't fetch data");
        }

        const result = await response.json();
        
        const formattedResultPodcasts = result["feed"]["entry"]
          .map(podcast => {
          return {
            id: podcast["id"]["attributes"]["im:id"], 
            title: podcast["im:name"]["label"], 
            author: podcast["im:artist"]["label"], 
            description: podcast["summary"]["label"], 
            img: podcast["im:image"][podcast["im:image"].length - 1]["label"],
          };
        })

        const newPodcastData = {
          items: formattedResultPodcasts, 
          lastUpdated: new Date().getTime(), 
        };

        localStorage.setItem("podcasts", [JSON.stringify(newPodcastData)]);

        setPodcasts(formattedResultPodcasts);

      } catch (error) {
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    }

  }, [setLoading]);

  const filteredPodcasts = podcasts.filter(podcast => (
    podcast.title.toUpperCase().includes(filter.toUpperCase()) || 
    podcast.author.toUpperCase().includes(filter.toUpperCase()))
  );

  return (
    <div>
      <div className="flex justify-end items-center px-4 gap-3">
        <span className="rounded bg-sky-600 content-center text-white px-1 font-bold">{podcasts.length}</span>
        <input 
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          className="border-2 rounded p-0.5 px-2 focus:outline-sky-500" 
          name="filter-podcast" 
          id="filter-podcast" 
          placeholder="Filter podcasts..."/>
      </div>
      <PodcastList podcasts={filteredPodcasts}/>
    </div>
  );
}

export default LandingPage;

function PodcastList({podcasts}) {
  return (
    <div className="flex flex-wrap items-end gap-5 mt-2">
      {podcasts.map(podcast => {
        return <PodcastCard podcast={podcast} key={podcast.id} />
      })}
    </div>
  );
}

function PodcastCard({podcast}) {
  return (
    <Link 
      to={"podcast/" + podcast.id} 
      state={{podcast: podcast}} 
      className="custom-zoom flex-1 basis-48 relative mt-6">
      <img 
        width={80}
        height={80}
        className="rounded-full absolute inset-0 mx-auto aspect-square object-cover" 
        src={podcast.img} 
        alt="Podcast cover" />
      <div className="px-4 py-3 text-center pt-12 mt-8 shadow-md shadow-slate-300">
        <p className="uppercase leading-5">{podcast.title}</p>
        <p className="text-gray-500 text-sm mt-2 leading-4">Author: {podcast.author}</p>
      </div>
    </Link>
  );
}