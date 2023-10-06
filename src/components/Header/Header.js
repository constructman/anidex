import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="navCover">
        <div className="burgerCover">
          <div className="burger"></div>
          <Link to={'/'} className="logo" />
        </div>
        <div className="">
          <div className="input">
            <div className="inputIcon" submit></div>
            <input className="searchBar" search submit placeholder='Search movies...' />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;