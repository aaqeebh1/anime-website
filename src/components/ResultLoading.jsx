import React from "react";
import ResultCardSkeleton from "./ResultCardSkeleton";
import './ResultLoading.css'

const ResultLoading = () => {
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
            </div>
            <div className="results__wrapper" id="search__results">
              <ResultCardSkeleton />
              <ResultCardSkeleton />
              <ResultCardSkeleton />
              <ResultCardSkeleton />
              <ResultCardSkeleton />
              <ResultCardSkeleton />
              <ResultCardSkeleton />
              <ResultCardSkeleton />
              <ResultCardSkeleton />
              <ResultCardSkeleton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultLoading;
