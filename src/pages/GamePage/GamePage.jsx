import './GamePage.css'
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import GameHero from "../../components/Game/GameHero";
import RAWGService from '../../services/RAWGService';
import { useState,useEffect } from 'react';



function GamePage(){

  const rawg = new RAWGService();
    const [data, setData] = useState([]);
  
    useEffect( () => {
  
      rawg.searchGame(3498).then( fetchData => {
        setData(fetchData);
      });
  
    }, []);
  
  
  return (
     <>
          <Header />
          <SideNav /> 
          <main className="gamePage">
          <GameHero data={data}/>
          <Footer />
          </main> 
    </>
  )
}



export default GamePage;