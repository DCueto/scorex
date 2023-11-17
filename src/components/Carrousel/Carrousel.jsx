import './Carrousel.css';
import RAWGService from "../../services/RAWGService";
import CarrouselCard from './CarrouselCard';
import { useEffect, useState, useRef } from "react"

function Carrousel({endpoint, title}){
  const rawg = new RAWGService();
  const [data, setData] = useState([]);
  const [isLeftGradientVisible, setIsLeftGradientVisible] = useState(false);
  const [isRightGradientVisible, setIsRightGradientVisible] = useState(true);

  const carrouselContainer = useRef(null);
  const leftGradient = useRef(null);
  const rightGradient = useRef(null);

  useEffect( () => {

    rawg.customEndpoint(endpoint).then( fetchData => {
      setData(fetchData.results);
    });

  }, []);

  /* BUTTONS SCROLL EVENTS */
  function handleScrollRight(){
    carrouselContainer.current.scrollBy({
      top: 0,
      left: 632,
      behavior: "smooth",
    });
  }

  function handleScrollLeft(){
    carrouselContainer.current.scrollBy({
      top: 0,
      left: -632,
      behavior: "smooth",
    });
  }

  /* SCROLL EVENT */
  function handleScroll(e){
    if(e.target.scrollLeft === 0){
      console.log('No more scroll on left');
      setIsLeftGradientVisible(false);
    } else if(e.target.scrollLeft > 0){
      setIsLeftGradientVisible(true);
    }

    if(e.target.scrollLeft + e.target.offsetWidth === e.target.scrollWidth){
      console.log('Ha llegado al final');
      setIsRightGradientVisible(false);
    } else{
      setIsRightGradientVisible(true);
    }

  }


  return (
    <section className="carrousel">
      <h2>{title}</h2>
      <div className='carrouselButtons'>
        <i onClick={handleScrollLeft} className='fa-solid fa-arrow-left left-arrow'></i>
        <i onClick={handleScrollRight} className='fa-solid fa-circle-arrow-right right-arrow'></i>
      </div>
      <div className='containerCarrousel' ref={carrouselContainer} onScroll={handleScroll}>
      <span className={isLeftGradientVisible ? 'leftGradient carrouselGradient' : 'leftGradient carrouselGradient none'} ref={leftGradient}></span>
      <span className={isRightGradientVisible ? 'rightGradient carrouselGradient' : 'rightGradient carrouselGradient none'} ref={rightGradient}></span>
      {
        data.map( (game) =>
          (<CarrouselCard key={game.id} title={game.name} metascore={game.metacritic} src={game.background_image} />)
        )
      }
      </div>
    </section>
  )
}

export default Carrousel;