import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PodcastDetail from './pages/PodcastDetail';
import EpisodeDetail from './pages/EpisodeDetail';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />}>
            <Route path="podcast/:podcastId" element={<PodcastDetail />}>
              <Route path="episode/:episodeId" element={<EpisodeDetail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
