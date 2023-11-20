import './GameHero.css'
import RAWGService from "../../services/RAWGService";
import { useEffect, useState } from "react";
import GameImg from './GameImg';





function GameHero({data}){
    
    
    return (  
        <section className="gameHero">

            <h1 className="NameId">{data.id}</h1>

            <h2 className="NameGame" >{data.name}</h2>

            <h3 className="NameMetacritic" >{data.metacritic}</h3>

            <img className="imgBackground" src ={data.background_image}/>


        </section>


  ) 
}

export default GameHero;