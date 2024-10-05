import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import PodcastDetail from './routes/PodcastDetail';
import EpisodeDetail from './routes/EpisodeDetail';
import Header from './components/Header';
import DetailLayout from './routes/DetailLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='p-6'>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="podcast/:podcastId" element={<DetailLayout />}>
            <Route index element={<PodcastDetail />} />
            <Route path="episode/:episodeId" element={<EpisodeDetail />} />
          </Route>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
