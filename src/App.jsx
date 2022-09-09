import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Results from './pages/Results';
import AnimeInfo from './pages/AnimeInfo';

function App() {
  const [search, SetSearch] = useState("");
  const [animeResults, SetAnimeResults] = useState([]);
  const [loadingState, SetLoadingState] = useState(false);
  const [animeId, SetAnimeId] = useState("");

  const base_url = "https://api.jikan.moe/v4";
  

  const searchAnime = (event) => {
    event.preventDefault();
    // SetLoadingState(true);
    // setTimeout(() => {
    //   SetLoadingState(false);
    // }, 1000);

    fetchAnime(search);
  };
  
  const fetchAnime = async (query) => {
    const { data } = await fetch(
      `${base_url}/anime?q=${query}&order_by=score&sort=desc`
      )
      .then((data) => data.json())
      .catch((err) => console.log(err));
      
      SetAnimeResults(data);
  };

  const topRated = async () => {
    // SetLoadingState(true);
    // setTimeout(() => {
    //   SetLoadingState(false);
    // }, 1000);
    const { data } = await fetch(`${base_url}/top/anime?limit=6`)
      .then((data) => data.json())
      .catch((err) => console.log(err));
    SetAnimeResults(data);
  };
  const mostPopular = async () => {
    // SetLoadingState(true);
    // setTimeout(() => {
    //   SetLoadingState(false);
    // }, 1000);
    const { data } = await fetch(
      `${base_url}/anime?order_by=favorites&sort=desc&limit=6`
    )
      .then((data) => data.json())
      .catch((err) => console.log(err));
    SetAnimeResults(data);
  };

  console.log(animeId);
 


  return (
    <Router>
    <div className='app'>
      <Nav search={search} SetSearch={SetSearch} searchAnime={searchAnime}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/anime' element={<Results animeResults={animeResults}  key={animeResults.mal_id} SetAnimeId={SetAnimeId} />}/>
        <Route path='anime/:id' element={<AnimeInfo animeId={animeId} />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
