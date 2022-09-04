import React from "react";

const ResultCards = ({ anime }) => {
  return (
    <div>
      {anime.title === anime.title && anime.synopsis !== null ? (
        <div className="result__card" >
          <a href={anime.url} target="_blank">
            <img
              src={anime.images.jpg.image_url}
              alt=""
              className="anime__img"
            />
            <p className="anime__card--para">{anime.synopsis.slice(0, 150)}</p>
            <p className="anime__card--episodes">
            <span className="span-bold">Episodes:</span> Ongoing
            </p>
            <p className="anime__card--realese">
            <span className="span-bold">Release Date:</span> {anime.year}
            </p>
            <p className="anime__card--rating">
            <span className="span-bold">Rating:</span> {anime.rating}
          </p>
          </a>
          <h5 className="anime__card--title">{anime.title}</h5>
        </div>
      ) : (
        <div className="result__card">
          <a href={anime.url} target="_blank">
            <img
              src={anime.images.jpg.image_url}
              alt=""
              className="anime__img"
            />

            <h5 className="anime__card--title">{anime.title}</h5>
            <p className="anime__card--para">{anime.synopsis}</p>
            <p className="anime__card--episodes">
              <span className="span-bold">Episodes:</span> Ongoing
            </p>
            <p className="anime__card--realese">
              <span className="span-bold">Release Date:</span> {anime.year}
            </p>
            <p className="anime__card--rating">
              <span className="span-bold">Rating:</span> {anime.rating}
            </p>
          </a>
        </div>
      )}
    </div>
  );
};

export default ResultCards;
