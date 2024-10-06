import { Link } from "react-router-dom";
import { usePodcastContext } from "../PodcastContext";

function PodcastCard() {

  const { podcast } = usePodcastContext();

  return (
    <div className="flex-none shadow-md p-4 basis-52 sticky top-6">
      <div className="flex">
        <Link to={"/podcast/" + podcast.id} className="mx-auto">
          <img 
            height={100}
            width={100}
            className="rounded" 
            src={podcast.img} 
            alt="Podcast cover" />
        </Link>
      </div>
      <div className="border-b-2 border-gray-100 my-3 mt-4"></div>
      <Link to={"/podcast/" + podcast.id}>
        <p className="font-bold">{podcast.title}</p>
      </Link>
      <Link to={"/podcast/" + podcast.id}>
        <small className="italic ">{podcast.author}</small>
      </Link>
      <div className="border-b-2 border-gray-100 my-3"></div>
      <p className="font-bold text-sm">Description:</p>
      <p className="itallic text-sm italic mt-1">
        {podcast.description}
      </p>
    </div>
  );
}

export default PodcastCard;