import './GamePage.css'
import RAWGService from "../../services/RAWGService";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";


function GamePage(){
  const rawg = new RAWGService();
  const [data, setData] = useState([]);

  useEffect( () => {

    rawg.searchGames().then( fetchData => {
      setData(fetchData.results);
    });

  }, []);
  

  return (
        <section className="gamepage">

        {
        data.map( (game) =>
          (<h2 key={game.id}>{game.name}</h2>)
        )
  
      }

  </section>

  )
}

    
  
  
  
  
    
    <>
    <h1>GAME PAGE</h1>
      <Header />
      <SideNav />
      <Footer />
      <RAWGService />
    </>


export default GamePage;