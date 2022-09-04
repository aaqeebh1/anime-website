import React from "react";
import ResultCards from "./ResultCards";
import "./Results.css";
import ResultTitleBar from "./ResultTitleBar";

const Results = ( {animeResults} ) => {
  return (
    <div>
      <section id="results">
        <div className="container results__container">
          <div className="row results__row">
            {
              animeResults.length > 0 ? <ResultTitleBar /> : <></>
            }
            <div className="results__wrapper" id="search__results">
              {animeResults.map(anime => 
                <ResultCards 
                  anime={anime}
                  key={anime.mal_id}
                />
            )}
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
