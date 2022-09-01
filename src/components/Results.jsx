import React from "react";
import './Results.css'

const Results = () => {
  return (
    <div>
      <section id="results">
        <div className="container results__container">
          <div className="row results__row">
            <div
              className="results__title--wrapper"
              id="results__title--wrapper"
            >
              <h3 className="results__title">Search results:</h3>
              <select
                name="filter"
                className="results__filter"
                id="results__filter"
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="LATEST">Latest</option>
                <option value="TOP_RATED">Top Rated</option>
                <option value="MOST_POPULAR">Most Popular</option>
              </select>
            </div>
            <div className="results__wrapper" id="search__results"></div>
            <div
              className="results__loading--wrapper"
              id="results__loading--wrapper"
            >
              <img
                src="./assets/spinner.svg"
                alt=""
                className="loading__spinner"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
