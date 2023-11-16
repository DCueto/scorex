import './CarrouselCard.css';

function CarrouselCard({title, src, metascore}){


  return (
    <article className="carrouselCard">
      <div className="img">
        <img className="imgBlur" src={src} />
        <img className="imgCover" src={src} />
      </div>
      <div className="carrouselCardInfo">
        <span>{metascore}</span>
        <p>{title}</p>
      </div>
    </article>
  )
}

export default CarrouselCard;