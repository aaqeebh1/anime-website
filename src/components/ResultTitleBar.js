import React from 'react';

const ResultTitleBar = () => {
    return (
        <div>
            <div
              className="results__title--wrapper"
              id="results__title--wrapper"
            >
              <h3 className="results__title">Search results:</h3>
              <select
                name="filter"
                className="results__filter"
                id="results__filter"
                defaultValue={"Select"}
              >
                <option value="LATEST">Latest</option>
                <option value="TOP_RATED">Top Rated</option>
                <option value="MOST_POPULAR">Most Popular</option>
              </select>
            </div>
        </div>
    );
}

export default ResultTitleBar;
