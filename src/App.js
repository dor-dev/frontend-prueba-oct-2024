import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import PodcastDetail from './routes/PodcastDetail';
import EpisodeDetail from './routes/EpisodeDetail';
import Header from './components/Header';
import DetailLayout from './routes/DetailLayout';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Header loading={loading}/>
        <div className='p-6'>
        <Routes>
          <Route 
            exact path="/" 
            element={<LandingPage setLoading={setLoading}/>} />
          <Route 
            path="podcast/:podcastId" 
            element={<DetailLayout />}>
            <Route index element={<PodcastDetail setLoading={setLoading} />} />
            <Route path="episode/:episodeId" element={<EpisodeDetail />} />
          </Route>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
