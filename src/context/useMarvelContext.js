import { createContext, useContext } from 'react';

export const MarvelContext = createContext();

export const useMarvelContext = () => {
    return useContext(MarvelContext);
}