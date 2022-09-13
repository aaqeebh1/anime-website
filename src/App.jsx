import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Results from "./pages/Results";
import AnimeInfo from "./pages/AnimeInfo";
import app from "./firebase";

function App() {
  const [search, SetSearch] = useState("");
  const [animeResults, SetAnimeResults] = useState([{}]);
  const [loadingState, SetLoadingState] = useState(false);
  const [animeId, SetAnimeId] = useState("");
  const [resultsTitle, SetResultsTitle] = useState("");

  const base_url = "https://api.jikan.moe/v4";

  const searchAnime = () => {
    // SetLoadingState(true);
    // setTimeout(() => {
    //   SetLoadingState(false);
    // }, 1000);

    fetchAnime(search);
    SetResultsTitle(`Search results for: ${search}`);
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
    const { data } = await fetch(`${base_url}/top/anime`)
      .then((data) => data.json())
      .catch((err) => console.log(err));
    SetAnimeResults(data);
    SetResultsTitle("Top Anime :");
  };
  const upcomingAnime = async () => {
    // SetLoadingState(true);
    // setTimeout(() => {
    //   SetLoadingState(false);
    // }, 1000);
    const { data } = await fetch(`${base_url}/seasons/upcoming`)
      .then((data) => data.json())
      .catch((err) => console.log(err));
    SetAnimeResults(data);
    console.log(animeResults);
    SetResultsTitle("Upcoming Anime :");
  };

  return (
    <Router>
      <div className="app">
        <Nav
          search={search}
          SetSearch={SetSearch}
          searchAnime={searchAnime}
          animeResults={animeResults}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={<Home topRated={topRated} upcomingAnime={upcomingAnime} />}
          />
          <Route
            path="/anime"
            element={
              <Results
                animeResults={animeResults}
                SetAnimeId={SetAnimeId}
                search={search}
                resultsTitle={resultsTitle}
              />
            }
          />
          <Route path="anime/:id" element={<AnimeInfo animeId={animeId} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
