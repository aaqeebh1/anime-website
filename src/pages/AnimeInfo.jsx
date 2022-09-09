import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnimeInfo = ({  }) => {
    const [animeInfoData, SetAnimeInfoData] = useState(null)
    const { id } = useParams()
  const getAnimebyId = async () => {
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
        const {data} = await res.json()
        SetAnimeInfoData(data) 
    } catch(error) {
      console.log(error)
    }
    

      
  };
  useEffect(() => {
    if (id) {
    getAnimebyId()
    }
  }, [id])

  return (
    <div>
      <div className="result__card"  >
                        <img
                          src={animeInfoData?.images?.jpg?.image_url}
                          className="anime__img"
                        />
                      <div className="anime__card--title-wrapper">
                      <h5 className="anime__card--title">{animeInfoData?.title}</h5>
                      </div>
                      <div className="anime__card--ranking">{animeInfoData?.score || 'N/A'}</div>
                    </div>
    </div>
  );
};

export default AnimeInfo;
