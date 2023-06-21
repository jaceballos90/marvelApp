/* import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main';
import './components/style.css'

function App() {
  return (
   <>
   <Main/>
   </>
  );
}

export default App;
 */

/* import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Comics from './components/Comics';
import Characters from './components/Characters';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/comics">Comics</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/comics" element={<Comics />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; */

import React, { useEffect, useState } from 'react'
import axios from 'axios'



//https://gateway.marvel.com:443/v1/public/characters?apikey=073417446383e4087e4082ef835a3a77
//llave publica
//073417446383e4087e4082ef835a3a77
// Llave privada
//afc73093be3f5b2eb89198ce2e601ac7c2ab194e

//1afc73093be3f5b2eb89198ce2e601ac7c2ab194e073417446383e4087e4082ef835a3a77
// hash: 7054a3ba7dc6d681d3547b395e727177

const App = () => {

const [personajes, setPersonajes] = useState([])

useEffect(() => {
  axios.get('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=073417446383e4087e4082ef835a3a77&hash=7054a3ba7dc6d681d3547b395e727177')
  .then(resp => {
      setPersonajes(resp.data.data.results)
      console.log(resp.data.data.results)
  })
  .catch(error=>{
    console.log(error)
  })

  
}, [])


  return (
    <h1>Marvel</h1>
  )
}

export default App
