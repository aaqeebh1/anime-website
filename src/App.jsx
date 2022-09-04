import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Results from "./components/Results";

function App() {
  const [search, SetSearch] = useState("");
  const [animeResults, SetAnimeResults] = useState([]);
  const [loadingResults, setLoadingResults] = useState(true);

  const base_url = "https://api.jikan.moe/v4";

  const searchAnime = (event) => {
    event.preventDefault();

    fetchAnime(search);
  };

 

  const fetchAnime = async (query) => {
    const {data} = await fetch(`${base_url}/anime?q=${query}&type=TV&limit=9`)
    .then(data => data.json())
    .catch(err => console.log(err))

    SetAnimeResults(data)
  }
  

  return (
    <div className="app">
      <Header
        searchAnime={searchAnime}
        search={search}
        SetSearch={SetSearch}
      />
      <Results 
      animeResults={animeResults}
      />
    </div>
  );
}

export default App;
