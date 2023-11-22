import './GameHero.css'
import RAWGService from '../../services/RAWGService';
import { useEffect, useState } from "react";
import GameImg from './GameImg';


        
c



function GameHero({data}){
    
    
    return (  
        <section className="gameHero">                            

         
        <h1 className="NameId">{data.id}</h1>
         

        <img className="imgBackground" src ={data.background_image}/>
        
        <p className="NameGame" >{data.name}</p>
        
       
        <div className="PlatformsAny">
            
            <p className="Platformsone">Platforms: {data.platform}</p> 

            
        </div>

       
        
        <div className="Releaseday">
             <p>Realeased: {data.released}</p>
        </div>
              

        <div className="NameMetacritic" >
             <span className="NumberMeta">{data.metacritic}</span>
             <p className="nameMeta">Metacritic</p>
                
             </div>
             
             
             <div className="containerone">
                 
        </div>
    
        
        <div className="NameRatings" >
            <span className="NumberMeta">{data.rating}</span>
             <p className="nameRating">Rating</p>

             <div className="containertwo"></div>

        </div> 


        <p className="GenresName">Genres</p>    
        
        
        </section>

          



  ) 
}

export default GameHero;