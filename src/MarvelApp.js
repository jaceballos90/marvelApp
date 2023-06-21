import React from "react";
import { AppRouter } from "./routers/AppRouter";
import { ProvideMarvelContext } from "./context/provideMarvelContext";

const MarvelApp = () => {
  return (
    <ProvideMarvelContext>
      <AppRouter />
    </ProvideMarvelContext>
  );
};

export default MarvelApp;
