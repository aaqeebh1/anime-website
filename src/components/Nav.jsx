import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import logo from "../assests/logo.jpg";
import "./Nav.css";

const Nav = ({SetSearch, search, searchAnime}) => {
  return (
    <>
      <nav className="container">
        <div className="nav__logo--wrapper">
          <img src={logo} alt="" className="nav__logo" />
          <h1 className="nav__logo--title">Animeworld</h1>
        </div>
        <form
                className="no-submit"
                id="search__input"
                onSubmit={searchAnime}
              >
                <input
                  className="no-submit"
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => SetSearch(e.target.value)}
                />
              </form>
      </nav>
    </>
  );
};

export default Nav;