import './SearchCard.css';

function SearchCard({title, src, metascore}){


  return (
    <article className="searchCard">
      <div className="img">
        <img className="imgBlur" src={src} />
        <img className="imgCover" src={src} />
      </div>
      <div className="searchCardInfo">
        <span>{metascore}</span>
        <p>{title}</p>
      </div>
    </article>
  )
}

export default SearchCard;