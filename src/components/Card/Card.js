import React from 'react'
import './Card.css'
import { Link } from "react-router-dom"


function Card({img, title, genres, mal_id}) {
  function getGenres() {
    return genres.map(item => item.name).join(', ');
  }

  
  return (
    <div className="cardWrapper" key={mal_id}>
        <div className="card">
          <div className="image" style={{backgroundImage: `url(${img})`}}></div>
          <Link to={`/anime/${mal_id}`} className="title">{title}</Link>
          <div className="genres">{getGenres()}</div>
        </div>
    </div>
  );
}

export default Card;
