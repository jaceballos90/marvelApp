import { React } from "react";
import { MarvelContext } from "./useMarvelContext";
import { useProviderMarvel } from "./useProviderMarvel";

export const ProvideMarvelContext = ({ children }) => {
  const provider = useProviderMarvel();

  return <MarvelContext.Provider value={provider}>{children}</MarvelContext.Provider>
}