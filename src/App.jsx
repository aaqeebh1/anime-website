import { useEffect, useState } from "react";
import "./App.css";
import AnimeInfoModal from "./components/AnimeInfoModal";
import Header from "./components/Header";
import ResultLoading from "./components/ResultLoading";
import Results from "./components/Results";

function App() {
  const [search, SetSearch] = useState("");
  const [animeResults, SetAnimeResults] = useState([]);
  const [loadingState, SetLoadingState] = useState(false);
  const [modalVisible, SetModalVisible] = useState(false);
  const [animeId, SetAnimeId] = useState("");
  const [animeModalData, SetAnimeModalData] = useState([]);

  const base_url = "https://api.jikan.moe/v4";

  const searchAnime = (event) => {
    event.preventDefault();
    SetLoadingState(true);
    setTimeout(() => {
      SetLoadingState(false);
    }, 1000);

    fetchAnime(search);
  };

  const fetchAnime = async (query) => {
    const { data } = await fetch(
      `${base_url}/anime?q=${query}&sort=desc&type=tv&limit=9`
    )
      .then((data) => data.json())
      .catch((err) => console.log(err));

    SetAnimeResults(data);
  };

  const topRated = async () => {
    SetLoadingState(true);
    setTimeout(() => {
      SetLoadingState(false);
    }, 1000);
    const { data } = await fetch(`${base_url}/top/anime?limit=6`)
      .then((data) => data.json())
      .catch((err) => console.log(err));
    SetAnimeResults(data);
  };
  const mostPopular = async () => {
    SetLoadingState(true);
    setTimeout(() => {
      SetLoadingState(false);
    }, 1000);
    const { data } = await fetch(
      `${base_url}/anime?order_by=favorites&sort=desc&limit=6`
    )
      .then((data) => data.json())
      .catch((err) => console.log(err));
    SetAnimeResults(data);
  };

  // get anime result and push to modal function

  const modalAnime = async () => {
    const { data } = await fetch(`${base_url}/anime/${animeId}`)
      .then((data) => data.json())
      .catch((err) => console.log(err));
    SetAnimeModalData(data);
  };

  const modalOpen =(event) => {
    SetModalVisible(true);

    modalAnime()
    console.log(animeId);
  };
  const modalClose = () => {
    SetModalVisible(false);
    SetAnimeId('')
  };

  return (
    <div className="app">
      <Header
        searchAnime={searchAnime}
        search={search}
        SetSearch={SetSearch}
        mostPopular={mostPopular}
        topRated={topRated}
      />
      {loadingState ? (
        <ResultLoading />
      ) : (
        <Results
          animeResults={animeResults}
          topRated={topRated}
          mostPopular={mostPopular}
          modalOpen={modalOpen}
        />
      )}
      {modalVisible ? <AnimeInfoModal modalClose={modalClose} /> : <></>}
    </div>
  );
}

export default App;
