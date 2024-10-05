import { Link } from "react-router-dom";
import PodcastCard from "../components/PodcastCard";

function PodcastDetail({params}) {
  return (
    <div className="flex gap-8 items-start relative">
      <PodcastCard />
      <div className="flex-auto">
        <div className="p-3 shadow-md mb-4">
          <p className="text-lg"><b>Episodes: 66</b></p>
        </div>
        <EpisodeList />
      </div>
    </div>
  );
}

export default PodcastDetail;

function EpisodeList() {
  const podcastEpisodes = Array.from({length: 66}, (_, i) => {
    return {
      title: "Episode " + i, 
      date: new Date() - (i + 10000000), 
      duration: "10:00", 
    };
  });

  return (
    <div className="p-3 shadow-md">
      <div className="flex font-bold border-b-2 p-1 gap-1">
        <p className="flex-auto">Title</p>
        <p className="basis-28">Date</p>
        <p className="basis-28">Duration</p>
      </div>
      {podcastEpisodes.map((episode, i) => {
        return (
          <div 
            className={`flex p-1 gap-1 ${i % 2 === 0 ? "bg-zinc-50" : ""}`}
            key={episode.title}>
            <Link to="episode/10" className="flex-auto text-sky-500">
              <p>{episode.title}</p>
            </Link>
            <p className="basis-28">{new Date(episode.date).toLocaleDateString()}</p>
            <p className="basis-28">{episode.duration}</p>
          </div>
        )
      })}
    </div>
  );
}