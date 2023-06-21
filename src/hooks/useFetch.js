import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  //const isMounted = useRef(true);
  const [estado, setEstado] = useState('');

  /*  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []); */

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setEstado({
            resp
        });
/*         setPersonajes(resp.data.data.results);
        console.log(resp.data.data.results); */
        //console.log(estado.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return estado;
};
