

function GameImg({title,  metascore, img, }){

    return (
        <article className="carrouselCard">
          <div className="imgGame">
           
            <img className="imgCover" img={background_image} />
          </div>
          <div className="textCardInfo">
            <span>{metascore}</span>
            <p>{title}</p>
            
          </div>
        </article>
      )
    }


    export default GameImg;