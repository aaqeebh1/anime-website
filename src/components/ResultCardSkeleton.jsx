import React from 'react';

const ResultCardSkeleton = () => {
    return (
        <div>
            <div className="result__card--skeleton">
                <div className="img__skeleton"></div>
                <p className="anime__para--skeleton"></p>
                <p className="anime__para--skeleton"></p>
                <p className="anime__para-mid--skeleton"></p>
                <p className="anime__para-short--skeleton"></p>
                <h5 className="anime__title--skeleton"></h5>
              </div>
        </div>
    );
}

export default ResultCardSkeleton;
