import React, { useState } from "react";
import "./Header.css";

const Header = ({search, searchAnime, SetSearch}) => {
  
  

  return (
    <>
      <div className="header__container">
        <div className="row">
          <nav className="navbar">
            <div className="nav__logo">
              <div className="nav__logo--img"></div>
              <h1 className="nav__title">AnimeWorld</h1>
            </div>
            <a href="#" className="toggle__btn">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </a>
            <div className="nav__links">
              <a href="" className="nav__link">
                Home
              </a>
              <a href="" className="nav__link" id="latest">
                Latest
              </a>
              <a href="" className="nav__link" id="top__anime">
                Top Anime
              </a>
              <a href="" className="nav__link" id="most__popular">
                Most Popular
              </a>
            </div>
          </nav>
          <div className="header__search">
            <h1 className="search__title">Browse Anime</h1>
            <div className="search__container">
              <form className="no-submit" id="search__input" onSubmit={searchAnime}>
                <input
                  className="no-submit"
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search..."
                  value={search}
                  onChange={e => SetSearch(e.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
