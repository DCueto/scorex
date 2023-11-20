import './CarrouselCard.css';

function CarrouselCard({title, src, metascore, id}){


  return (
    <article data-id={id} className="carrouselCard">
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