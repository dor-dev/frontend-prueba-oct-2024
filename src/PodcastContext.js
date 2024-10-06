import { createContext, useContext } from 'react';

export const PodcastContext = createContext(null);
export const usePodcastContext = () => useContext(PodcastContext);
