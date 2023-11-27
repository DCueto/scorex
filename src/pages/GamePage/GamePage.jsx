import './GamePage.css'
import GameHero from "../../components/Game/GameHero";
import GameSummary from '../../components/Game/GameSummary';
import GameInfo from '../../components/Game/GameInfo';
import RAWGService from '../../services/RAWGService';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageTabs from '../../components/Tabs/PageTabs';

function GamePage(){
  const { gameId } = useParams();
  const rawg = new RAWGService();
  const [data, setData] = useState({});
  const [activePageTab, setActivePageTab] = useState('Basic Information');
  
  useEffect( () => {

    rawg.searchGame(gameId).then( fetchData => {
      setData(fetchData);
      console.log(fetchData);
    });

  }, []);

  const handleActivePageTab = (value) => {
    setActivePageTab(value);
  }

  return (
    <section className="gamePage">
      <GameHero data={data}/>
      <PageTabs tabs={['Basic Information', 'Reviews', 'Screenshots', 'Video']} sendActivePageTab={handleActivePageTab} />
      { activePageTab === 'Basic Information' 
        && 
        <section className='basicInfoGamePageTab'>
          <div className='gamePageCol1'>
            <GameSummary content={data.description_raw} />
          </div>
          <div className='gamePageCol2'>
            <GameInfo data={data} />
          </div>
        </section>
      
      }
    </section>
  )
}



export default GamePage;