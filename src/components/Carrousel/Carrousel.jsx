import './Carrousel.css';
import RAWGService from "../../services/RAWGService";
import CarrouselCard from './CarrouselCard';
import { useEffect, useState } from "react";

function Carrousel(){
  const rawg = new RAWGService();
  const [data, setData] = useState([]);

  useEffect( () => {

    rawg.searchGames().then( fetchData => {
      setData(fetchData.results);
    });

  }, []);


  return (
    <section className="carrousel">
      <h1>Latest Games</h1>
      <div className='containerCarrousel'>
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