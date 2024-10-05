import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PodcastDetail from './pages/PodcastDetail';
import EpisodeDetail from './pages/EpisodeDetail';
import Header from './Header';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <LandingPage />, 
    children: [
      {
        path: "podcast/:podcastId", 
        element: <PodcastDetail />, 
        children: [
          {
            path: "episode/:episodeId", 
            element: <EpisodeDetail />, 
          }
        ], 
      }, 
    ], 
  }, 
])

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
