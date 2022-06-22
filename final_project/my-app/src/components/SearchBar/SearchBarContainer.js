// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";
import { FaInstagram,FaCompass,FaUserCircle,FaHeart } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <FaInstagram className="fa fa-instagram"></FaInstagram> 
      </div>
      <form className="search-form">
        <input type="text" placeholder="Search" />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FaCompass className="fa fa-compass" ></FaCompass>
        </div>
        <div className="social">
          <FaHeart className="fa fa-heart" ></FaHeart>
        </div>
        <div className="social">
          <FaUserCircle className="fa fa-user-circle" ></FaUserCircle>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
