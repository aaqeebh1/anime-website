import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./AnimeInfo.css";

const AnimeInfo = ({}) => {
  const [animeInfoData, SetAnimeInfoData] = useState(null);
  const { id } = useParams();
  console.log(animeInfoData);
  const animeGenres = animeInfoData?.genres.map((genre) => genre.name + " ");
  const getAnimebyId = async () => {
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
      const { data } = await res.json();
      SetAnimeInfoData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (id) {
      getAnimebyId();
    }
  }, [id]);

  return (
    <div>
      <div className="animeinfo__container">
        <div className="animeinfo__trailer--wrapper">
          {animeInfoData?.trailer?.youtube_id === null ? (
            <></>
          ) : (
            <iframe
              width="100%"
              height="700"
              src={`https://www.youtube.com/embed/${animeInfoData?.trailer?.youtube_id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          )}
        </div>
        <div className="animeinfo__wrapper">
          <div className="animeinfo__info">
            <img
              src={animeInfoData?.images?.jpg?.image_url}
              className="animeinfo__img"
            />
            <div className="animeinfo__info--wrapper">
              <div className="animeinfo__title--wrapper">
                <h1 className="animeinfo__title">{animeInfoData?.title}</h1>
                <p className="animeinfo__type">{animeInfoData?.type}</p>
              </div>
              {animeInfoData?.type === "TV" ? (
                <p className="animeinfo__title">
                  <span className="bold">Release :</span>{" "}
                  {animeInfoData?.season} {animeInfoData?.year}
                </p>
              ) : (
                <p className="animeinfo__title">
                  Release : {animeInfoData?.aired?.string}
                </p>
              )}
              <p className="animeinfo__title">
                <span className="bold">Genre :</span> {animeGenres}
              </p>
              {animeInfoData?.type === "TV" ? (
                <p className="animeinfo__title">
                  <span className="bold">Episodes :</span>{" "}
                  {animeInfoData?.episodes || "N/A"}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="animeinfo__synopsis--wrapper">
            <h2 className="animeinfo__synopsis">Synopsis</h2>
            <p>{animeInfoData?.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeInfo;
