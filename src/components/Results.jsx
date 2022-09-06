import React from "react";
import ResultCards from "./ResultCards";
import "./Results.css";

const Results = ({ animeResults, topRated, mostPopular, modalOpen }) => {
  
  return (
    <div>
      <section id="results">
        <div className="container results__container">
          <div className="row results__row">
            {animeResults.length > 0 ? (
              <div
                className="results__title--wrapper"
                id="results__title--wrapper"
              >
                <h3 className="results__title">Search results:</h3>
                <select
                  name="filter"
                  className="results__filter"
                  id="results__filter"
                  defaultValue="Select"
                  onChange={(e) => {
                    if (e.target.value === "TOP_RATED") {
                      topRated();
                    } else if (e.target.value === "MOST_POPULAR") {
                      mostPopular();
                    }
                  }}
                >
                  <option value="Select" disabled>
                    Select
                  </option>
                  <option value="TOP_RATED">Top Rated</option>
                  <option value="MOST_POPULAR">Most Popular</option>
                </select>
              </div>
            ) : (
              <></>
            )}
            <div className="results__wrapper" id="search__results">
              {animeResults.map((anime) => (
                <ResultCards anime={anime}  key={anime.mal_id} modalOpen={modalOpen} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
