import { Outlet, useLocation } from "react-router-dom";
import PodcastCard from "../components/PodcastCard";
import { PodcastContext } from "../PodcastContext";

function DetailLayout() {
  const { state } = useLocation();

  return (
    <div className="flex gap-8 items-start relative">
      <PodcastContext.Provider value={state}>
        <PodcastCard podcast={state.podcast}/>
        <div className="flex-auto">
          <Outlet />
        </div>
      </PodcastContext.Provider>
    </div>
    
  );
}

export default DetailLayout;