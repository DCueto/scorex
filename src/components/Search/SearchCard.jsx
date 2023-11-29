import { useState } from 'react';
import './SearchCard.css';
import { useNavigate } from 'react-router-dom';

function SearchCard({title, src, metascore, date, id}){
  const [scoreColors, setScoreColors] = useState({
    top: parseInt(metascore) <= 100 && parseInt(metascore) >= 90,
    good: parseInt(metascore) <= 90 && parseInt(metascore) >= 75,
    medium: parseInt(metascore) <= 74 && parseInt(metascore) >= 50,
    bad: parseInt(metascore) <= 49 && parseInt(metascore) >= 0
  });
  const navigate = useNavigate();

  const handleNavigateToGame = () => {
    navigate(`/game/${id}`);
  }

  return (
    <article className="searchCard" onClick={handleNavigateToGame}>
      <div className="img">
        <img className="imgBlur" src={src} />
        <img className="imgCover" src={src} />
      </div>
      <div className="searchCardInfo">
        <p id='title'>{title}</p>
        <p id='date'>{date}</p>
        <span className={`
          ${scoreColors.top ? 'scoreTop'
          : scoreColors.good ? 'scoreGood'
          : scoreColors.medium ? 'scoreMedium'
          : scoreColors.bad ? 'scoreBad'
          : null }`}
          
          >{metascore}</span>
          <div className={`cardScoreColor 
          ${scoreColors.top ? 'scoreTop'
          : scoreColors.good ? 'scoreGood' 
          : scoreColors.medium ? 'scoreMedium' 
          : scoreColors.bad ? 'scoreBad' 
          : null }`}
          
          ></div>
      </div>
      
    </article>
  )
}

export default SearchCard;