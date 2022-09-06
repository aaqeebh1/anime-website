import React from "react";
import "./AnimeInfoModal.css";

const AnimeInfoModal = ({ modalClose, anime }) => {
  return (
    <div className="animeModal__container">
      <div className="animeModal__wrapper" onClick={modalClose}>
               <div className="animeModal__left--column" >
              <img
                className="animeModal__img"
                src={''}
                alt=""
              />
            </div>
            <div className="animeModal__right--column">
              <h1 className="animeModal__title"></h1>
              <p className="animeModal__synopsis"></p>
              <p className="animeModal__episodes">1031</p>
              <p className="animeModal__release-date">1999</p>
              <p className="animeModal__rating">10/10</p>
            </div>
      </div>
    </div>
  );
};

export default AnimeInfoModal;
