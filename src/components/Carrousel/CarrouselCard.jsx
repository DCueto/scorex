import { useState } from 'react';
import './CarrouselCard.css';

function CarrouselCard({title, src, metascore, id}){

  const [scoreColors, setScoreColors] = useState({
    top: parseInt(metascore) <= 100 && parseInt(metascore) >= 90,
    good: parseInt(metascore) <= 90 && parseInt(metascore) >= 75,
    medium: parseInt(metascore) <= 74 && parseInt(metascore) >= 50,
    bad: parseInt(metascore) <= 49 && parseInt(metascore) >= 0
  });


  return (
    <article data-id={id} className="carrouselCard">
      <div className="img">
        <img className="imgBlur" src={src} />
        {/* <img className="imgCover" src={src} /> */}
      </div>
      <div className="carrouselCardInfo">
        <span className={`
          ${scoreColors.top ? 'scoreTop'
          : scoreColors.good ? 'scoreGood'
          : scoreColors.medium ? 'scoreMedium'
          : scoreColors.bad ? 'scoreBad'
          : null }`}
          
          >{metascore}</span>

        <p>{title}</p>

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

export default CarrouselCard;