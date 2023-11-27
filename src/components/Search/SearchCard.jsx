import { useState } from 'react';
import './SearchCard.css';

function SearchCard({title, src, metascore, date}){


  return (
    <article className="searchCard">
      <div className="img">
        <img className="imgBlur" src={src} />
        <img className="imgCover" src={src} />
      </div>
      <div className="searchCardInfo">
        <p id='title'>{title}</p>
        <p id='date'>{date}</p>
        <span
          >{metascore}</span>
      </div>
    </article>
  )
}

export default SearchCard;