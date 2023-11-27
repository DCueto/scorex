import './SlideGame.css';
import RAWGService from './../../services/RAWGService';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const SlideGame = ({id, slideIndex, activeSlide}) => {
  const navigate = useNavigate();
  const [gameData, setGameData] = useState({});

  const rawg = new RAWGService();

  useEffect( () => {
    rawg.searchGame(id)
      .then( (data) => setGameData(data) )
      .catch( (err) => console.error(err) );
  }, []);

  const handleNavigateToGame = () => {
    navigate(`/game/${id}`);
  }


  return (
    <article className={`slideGame ${slideIndex === activeSlide && 'activeSlide'}`} onClick={handleNavigateToGame} >
      <img src={gameData.background_image}></img>
      <h4>{gameData.name}</h4>
      <div className='sliderGradient'></div>
    </article>
  )
}

export default SlideGame;