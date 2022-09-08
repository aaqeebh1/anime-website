import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import logo from "../assests/logo.jpg";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav className="container">
        <div className="nav__logo--wrapper">
          <img src={logo} alt="" className="nav__logo" />
          <h1 className="nav__logo--title">Animeworld</h1>
        </div>
        <div className="nav__search">
          <input type="text" className="nav__search--input" />
          <Button variant="contained" >
            Send
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
