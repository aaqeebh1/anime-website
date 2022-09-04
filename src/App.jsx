import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ResultLoading from "./components/ResultLoading";
import Results from "./components/Results";

function App() {
  const [search, SetSearch] = useState("");
  const [animeResults, SetAnimeResults] = useState([]);
  const [loadingState, SetLoadingState] = useState(false);

  const base_url = "https://api.jikan.moe/v4";

  const searchAnime = (event) => {
    event.preventDefault();
    SetLoadingState(true);
    setTimeout(
      () => {
        fetchAnime(search);
        SetLoadingState(false)
      },

      1500
    );
  };

  const fetchAnime = async (query) => {
    const { data } = await fetch(`${base_url}/anime?q=${query}&type=TV&limit=9`)
      .then((data) => data.json())
      .catch((err) => console.log(err));

    SetAnimeResults(data);
    console.log(data);
  };

  return (
    <div className="app">
      <Header searchAnime={searchAnime} search={search} SetSearch={SetSearch} />
      { loadingState ? <ResultLoading /> :
        <Results animeResults={animeResults} /> 
      }
        </div>
  );
}

export default App;
