import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

export const useProviderMarvel = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [comics, setComics] = useState([])
  const [filteredComics, setFilteredComics] = useState([])

  useEffect(() => {
    getCharacters();
    getComics();
  }, []);

  const getCharacters = async () => {
    const response = await axios.get(
      "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=073417446383e4087e4082ef835a3a77&hash=7054a3ba7dc6d681d3547b395e727177"
    );
    setCharacters(response.data.data.results);
    setFilteredCharacters(response.data.data.results);
  };

  const getComics = async () => {
    const response = await axios.get(
        "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=073417446383e4087e4082ef835a3a77&hash=7054a3ba7dc6d681d3547b395e727177"
      );
      setComics(response.data.data.results);
      
      setFilteredComics(response.data.data.results);
  }

  const filterCharacters = (value) => {
    if (value != "") {
      setFilteredCharacters(characters.filter((x) => x.name.includes(value)));
    } else {
      setFilteredCharacters(characters);
    }
  };

  const filterComics = (value) => {
    if (value != "") {
        setFilteredComics(comics.filter((x) => x.title.includes(value)));
      } else {
        setFilteredComics(comics);
      }
  }



 
  

  const value = useMemo(() => {
    return {
      getCharacters,
      filterCharacters,
      characters,
      filteredCharacters,
      getComics,
      filterComics,
      comics,
      filteredComics
    };
  }, [characters, filteredCharacters, comics, filteredComics]);

  return value;
};
