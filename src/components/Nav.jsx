import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assests/logo.jpg";
import "./Nav.css";

const Nav = ({ SetSearch, search, searchAnime }) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    searchAnime();
    navigate("/anime");
  };

  return (
    <>
      <nav className="nav__container">
        <div className="nav__wrapper">
          <Link to={"/"} className="nav__logo--wrapper">
            <img src={logo} alt="" className="nav__logo" />
            <h1 className="nav__logo--title">AnimeWorld</h1>
          </Link>
          <form
            className="no-submit"
            id="search__input"
            onSubmit={handleSubmit}
          >
            <input
              className="no-submit"
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
              value={search}
              required
              onChange={(e) => SetSearch(e.target.value)}
            />
          </form>
        </div>
      </nav>
    </>
  );
};

export default Nav;
