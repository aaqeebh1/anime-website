import React from 'react';
import './Results.css'
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const Results = ({animeResults, SetAnimeId}) => {
    
    
    return (
        <div>
            <div className="results__wrapper" id="search__results">
              {animeResults.map((anime) => 
                (anime.title && anime.approved ? (
                    <Link to={`/anime/${anime.mal_id}`} onClick={() => SetAnimeId(anime.mal_id)} >
                    <div className="result__card" key={anime.mal_id} >
                        <img
                          src={anime.images.jpg.image_url}
                          alt='anime img'
                          className="anime__img"
                        />
                      <div className="anime__card--title-wrapper">
                      <h5 className="anime__card--title">{anime.title}</h5>
                      </div>
                      <div className="anime__card--ranking"><StarIcon/>{anime.score || 'N/A'}</div>
                    </div>
                    </Link>
                  ) : null )
              )}
            </div>
        </div>
    );
}

export default Results;
