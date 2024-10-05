import { Outlet } from "react-router-dom";
import PodcastCard from "../components/PodcastCard";

function DetailLayout() {
  return (
    <div className="flex gap-8 items-start relative">
      <PodcastCard />
      <Outlet />
    </div>
  );
}

export default DetailLayout;