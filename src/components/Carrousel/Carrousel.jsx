import RAWGService from "../../services/RAWGService";
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
      {
        data.map( (game) =>
          (<h2 key={game.id}>{game.name}</h2>)
        )
      }

    </section>
  )
}

export default Carrousel;