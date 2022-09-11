import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = ({ topRated, upcomingAnime }) => {
  const navigate = useNavigate();
  const topAnime = (event) => {
    event.preventDefault();
    topRated();
    navigate("/anime");
  };
  const upcoming = (event) => {
    event.preventDefault();
    upcomingAnime();
    navigate("/anime");
  };
  return (
    <div className="home__container">
      <div className="home__wrapper">
        <div className="top__row">
          <h1 className="home__title">Welcome to the world of anime!</h1>
        </div>
        <div className="bottom__row">
          <a
            className="gridel-btn"
            href="javascript:void(0);"
            onClick={topAnime}
          >
            Top Anime
          </a>
          <a
            className="gridel-btn"
            href="javascript:void(0);"
            onClick={upcoming}
          >
            Upcoming Anime
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
