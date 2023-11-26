import './SlideGame.css';
import RAWGService from './../../services/RAWGService';
import { useEffect, useState } from 'react';

const SlideGame = ({id, slideIndex, activeSlide}) => {
  const [gameData, setGameData] = useState({});

  const rawg = new RAWGService();

  useEffect( () => {
    rawg.searchGame(id)
      .then( (data) => setGameData(data) )
      .catch( (err) => console.error(err) );
  }, []);


  return (
    <article className={`slideGame ${slideIndex === activeSlide && 'activeSlide'}`}>
      <img src={gameData.background_image}></img>
      <h4>{gameData.name}</h4>
      <div className='sliderGradient'></div>
    </article>
  )
}

export default SlideGame;