import { usePodcastContext } from "../PodcastContext";

function EpisodeDetail() {

  const { episode } = usePodcastContext();
    
  return (
    <div className="p-4 py-3 shadow-md">
      <h3 className="text-lg"><b>{episode.title}</b></h3>
      <p className="text-sm italic leading-5 mt-1" dangerouslySetInnerHTML={{ __html: episode.description }}></p>
      <audio src={episode.url} controls className="mt-4 w-full mb-2">
        Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
  );
}

export default EpisodeDetail;