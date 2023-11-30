import './ListCard.css';
import { useEffect, useState } from 'react';

const ListCard = ({item, handleRemoveGameOnMyList}) => {

  const [scoreColors, setScoreColors] = useState({
    top: parseInt(item.metacritic) <= 100 && parseInt(item.metacritic) >= 90,
    good: parseInt(item.metacritic) < 90 && parseInt(item.metacritic) >= 70,
    medium: parseInt(item.metacritic) <= 60 && parseInt(item.metacritic) >= 50,
    bad: parseInt(item.metacritic) <= 40 && parseInt(item.metacritic) >= 0
  });

  const [scoreColor, setScoreColor] = useState('scoreTop');

  const setColorBasedOnScore = () => {
    if(scoreColors.top){
      setScoreColor('scoreTop');
    } else if(scoreColors.good){
      setScoreColor('scoreGood');
    } else if(scoreColors.medium){
      setScoreColor('scoreMedium')
    } else if(scoreColors.bad){
      setScoreColor('scoreBad');
    }
  }

  useEffect( () => {
    setColorBasedOnScore();
  }, []);


  return (
      <div className="gamebox" key={item.gameId}>
        <img className="imgbox" src={item.backgroundImage} />
        <h1 className="gametitle">{item.title}</h1>
        <div className={`puntuations ${scoreColor}`}>
          {item.metacritic}
        </div>
        <div className="icons">
          <i data-id={item.gameId} className="bin fa-solid fa-trash" onClick={handleRemoveGameOnMyList}/>
        </div>
      </div>
  )
}

export default ListCard;