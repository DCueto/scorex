import './SliderGames.css';
import { useEffect, useRef, useState } from 'react';
import SlideGame from './SlideGame';
import RAWGService from '../../services/RAWGService';

const SliderGames = ({slides}) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect( () => {
    if(currentPosition == slides.length){
      setCurrentPosition(0);
    }

    if(currentPosition == -1){
      setCurrentPosition(slides.length - 1);
    }

  }, [currentPosition]);

  const handleNextSlide = (e) => {
    setCurrentPosition(currentPosition + 1);
  }

  const handlePrevSlide = () => {
    setCurrentPosition(currentPosition - 1);
  }

  const handleCircleButton = (e) => {
    setCurrentPosition(parseInt(e.target.dataset.id));
  }

  return (
    <section className='sliderGames'>
      <div className='sliderGamesSwipper'>
        <i className='fa-solid fa-angle-left iconLeft btnSlider' onClick={handlePrevSlide}></i>
        <i className='fa-solid fa-angle-right iconRight btnSlider' onClick={handleNextSlide}></i>
        <div className='circleButtons'>
          {slides.map( (item, index) => (
            <div 
              key={item} 
              data-id={index} 
              className={`circleBtn ${index === currentPosition && 'activeCircleBtn' }`} 
              onClick={handleCircleButton}></div>
          )
          )}
        </div>
      </div>
      <div className='sliderGamesContainer'>
        {slides.map( (item, index) => (
          <SlideGame key={item} id={item} slideIndex={index} activeSlide={currentPosition} />
        )
        )}
      </div>
    </section>
  )
}

export default SliderGames;