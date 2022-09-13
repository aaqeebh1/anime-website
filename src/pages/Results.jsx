import React, { useEffect } from 'react';
import './Results.css'
import StarIcon from '@mui/icons-material/Star';
import { Link, useNavigate } from 'react-router-dom';

const Results = ({animeResults, SetAnimeId, resultsTitle}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (animeResults) {
      navigate("/anime");
    }
  }, []);
    
    return (
        <div className='results__container'>
              <h1 className='search__for--title'> {resultsTitle} </h1>            
            <div className="results__wrapper" id="search__results">
              {animeResults.map((anime) => 
              (anime.title && anime.approved ? (
                    <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}  onClick={() => SetAnimeId(anime.mal_id)} >
                    <div className="result__card" >
                        <img
                          src={anime.images.jpg.image_url}
                          alt='anime img'
                          className="anime__img"
                        />
                      {
                        resultsTitle === "Upcoming Anime :" ? <div className="anime__card--ranking">{anime?.type}{' '}{anime?.season} </div> : <div className="anime__card--ranking"><StarIcon/>{anime.score || 'N/A'}</div>
                      }
                      <div className="anime__card--title-wrapper">
                      <h5 className="anime__card--title">{anime.title}</h5>
                      </div>
                    </div>
                    </Link>
                  ) : null )
              )}
            </div>
        </div>
    );
}

export default Results;
