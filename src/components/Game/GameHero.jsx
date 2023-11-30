import './GameHero.css'
import RAWGService from '../../services/RAWGService';
import { useEffect, useState } from "react";
import GameImg from './GameImg';


function GameHero({data}){

  return (
    <section className="gameHero">
      <img className='gameHeroImage' src={data?.background_image}></img>
      <div className='gameHeroInfo'>
        <h1 className='gameHeroTitle'>{data?.name}</h1>
        <h2 className='gameHeroSubtitle'>{data.publishers && data.publishers[0]?.name}</h2>
      </div>
      <div className='sliderGradient'></div>
    </section>
  )
}

export default GameHero;