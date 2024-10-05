import { Link } from "react-router-dom";

function PodcastDetail({params}) {
  const podcastPathId = "1";
  
  let updateData = true;

  let podcastEpisodes = null;

  const storedEpisodes = localStorage.getItem("episodes");
  const lastUpdateDate = localStorage.getItem("episodes-last-updated");
  if (storedEpisodes) {
    const currentPodcastEpisodes = JSON.parse(storedEpisodes)[podcastPathId];
    if (currentPodcastEpisodes) {
      podcastEpisodes = currentPodcastEpisodes;
      updateData = false;
    }
  }

  // TODO : Refactor.

  const lastDay = new Date() - (1000 * 60 * 60 * 24);

  const updateIsExpired = !lastUpdateDate 
    || (new Date(JSON.parse(lastUpdateDate))) < lastDay;

  if (updateData === true || updateIsExpired) {
    console.warn("MAKING A REQUEST");
    podcastEpisodes = Array.from({length: 66}, (_, i) => {
      return {
        title: "Episode " + i, 
        date: new Date() - (i * 1000000000), 
        duration: "10:00", 
      };
    });
    // TODO: Make request
    const storageEpisodes = localStorage.getItem("episodes");
    if (storageEpisodes) {
      const updatedEpisodes = JSON.parse(storageEpisodes);
      updatedEpisodes[podcastPathId] = podcastEpisodes;
      localStorage.setItem("episodes", JSON.stringify(updatedEpisodes));
      localStorage.setItem("episodes-last-updated", new Date().getTime());
    } else {
      const newStorageEpisode = {[podcastPathId]: podcastEpisodes};
      localStorage.setItem("episodes", JSON.stringify([newStorageEpisode]));
      localStorage.setItem("episodes-last-updated", new Date().getTime());
    }
  }

  return (
    <div className="flex-auto">
      <div className="p-3 shadow-md mb-4">
        <p className="text-lg"><b>Episodes: 66</b></p>
      </div>
      <EpisodeList episodes={podcastEpisodes}/>
    </div>
  );
}

export default PodcastDetail;

function EpisodeList({episodes}) {
  return (
    <div className="p-3 shadow-md">
      <div className="flex font-bold border-b-2 p-1 gap-1">
        <p className="flex-auto">Title</p>
        <p className="basis-20">Date</p>
        <p className="basis-24 text-right">Duration</p>
      </div>
      {episodes.map((episode, i) => {
        return (
          <div 
            className={`flex p-1 gap-1 ${i % 2 === 0 ? "bg-zinc-50" : ""}`}
            key={episode.title}>
            <Link to="episode/10" className="flex-auto text-sky-500">
              <p>{episode.title}</p>
            </Link>
            <p className="basis-24">{new Date(episode.date).toLocaleDateString()}</p>
            <p className="basis-20 text-right">{episode.duration}</p>
          </div>
        )
      })}
    </div>
  );
}