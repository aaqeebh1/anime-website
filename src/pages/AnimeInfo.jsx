import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnimeInfo = ({ animeId }) => {
    const [animeInfoData, SetAnimeInfoData] = useState([])
  const getAnimebyId = async () => {
    const { data } = await fetch(
      `https://api.jikan.moe/v4/anime/${animeId}/full`
    )
      .then((data) => data.json())
      .catch((err) => console.log(err));

      SetAnimeInfoData(data) 
      console.log(animeInfoData);
  };
  useEffect(() => {
    getAnimebyId()
  }, animeId
  )

  return (
    <div>
      {/* <div className="result__card"  >
                        <img
                          src={anime.images.jpg.image_url}
                          className="anime__img"
                        />
                      <div className="anime__card--title-wrapper">
                      <h5 className="anime__card--title">{anime.title}</h5>
                      </div>
                      <div className="anime__card--ranking">{anime.score || 'N/A'}</div>
                    </div> */}
    </div>
  );
};

export default AnimeInfo;
