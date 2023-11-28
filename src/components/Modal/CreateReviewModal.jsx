import './CreateReviewModal.css';

import { useEffect, useRef, useState } from 'react';

import ScoreXService from '../../services/ScoreXService';
import UserStore from './../../services/UserStore';



const CreateReviewModal = ({gameData, sendNewReviewId, setCreateReviewModalState}) => {
  
  const scoreXService = new ScoreXService();
  const userStore = new UserStore();

  const [gameScore, setGameScore] = useState(null);
  const [gameScoreSaved, setGameScoreSaved] = useState(0);
  const [colorBarItem, setColorBarItem] = useState('');
  const [colorBarItemSaved, setColorBarItemSaved] = useState('');

  const scoreSelectorBar = useRef(null);
  const titleInput = useRef(null);
  const reviewTextArea = useRef(null);

  useEffect( () => {

    const checkItemColor = (index) => {
      if( index < 5 ){
        return 'redScoreItem';
      } else if( index >= 5 && index < 8 ){
        return 'orangeScoreItem';
      } else if( index >= 8 && index <= 9 ){
        return 'greenScoreItem';
      } else if( index > 9 ){
        return 'purpleScoreItem';
      }
    }
  
    const handleMouseOverScore = (e) => {
      if(e.target.className.includes('scoreSelectorBarItem')) {
        setGameScore(e.target.dataset.id);
        setColorBarItem(checkItemColor(e.target.dataset.id));
      }

    }

    const resetGameSavedScore = () => {
      setGameScore(gameScoreSaved);
    }

    scoreSelectorBar.current.addEventListener('mouseout', resetGameSavedScore);
  
    const handleMouseOutScore = () => {
      setGameScore(0);
    }

    scoreSelectorBar.current.addEventListener('mouseover', handleMouseOverScore);
    scoreSelectorBar.current.addEventListener('mouseout', handleMouseOutScore);

    const handleClickScore = (e) => {
      if(e.target.className.includes('scoreSelectorBarItem')) {
        setGameScore(e.target.dataset.id);
        setColorBarItem(checkItemColor(e.target.dataset.id));
        setGameScoreSaved(e.target.dataset.id);
        setColorBarItemSaved(checkItemColor(e.target.dataset.id));
      }

      scoreSelectorBar.current.removeEventListener('mouseout', handleMouseOutScore);
    }

    scoreSelectorBar.current.addEventListener('click', handleClickScore);

  }, []);

  const handleSubmitReview = (e) => {
    e.preventDefault();

    // Parse data
    const titleValue = titleInput.current.value;
    const reviewValue = reviewTextArea.current.value;
    const gameImage = gameData.background_image;
    const gameId = gameData.id;
    const gameTitle = gameData.name;
    const metacriticScore = gameData.metacritic;
    const reviewDate = new Date();

    if( colorBarItemSaved && titleValue.trim() !== '' && reviewValue.trim() !== '' ){

      const postReview = {
        "gameId": gameId,
        "gameName": gameTitle,
        "gameImage": gameImage,
        "userId": userStore.getUser().id,
        "userName": userStore.getUser().username,
        "score": gameScoreSaved,
        "metacriticScore": metacriticScore,
        "title": titleValue,
        "review_date": reviewDate,
        "body": reviewValue
      }

      // Post data
      scoreXService.postReview(JSON.stringify(postReview))
        .then( (response) => sendNewReviewId(response.id) )
        .catch( err => console.error(err) )
        .finally( () => {
          console.log('REVIEW POSTED');
          setCreateReviewModalState(false);
        });

    }

  }


  return (
    <section className="createReviewModal">

      <div className='createReviewHero'>
        <img src={gameData.background_image} />
        <h2>{gameData.name}</h2>
      </div>

      <form onSubmit={handleSubmitReview}>
        <h3>New Review</h3>
        <div className='createReviewScore'>
          <div className={`scoreContainer ${colorBarItemSaved ? colorBarItemSaved : colorBarItem}`}>
            <span>{ gameScoreSaved > 0 ? gameScoreSaved : gameScore}</span>
          </div>
          <div className='scoreSelector'>
            <h4>SELECT YOUR SCORE</h4>
            <div className='scoreSelectorBar' ref={scoreSelectorBar} >
              {[1,2,3,4,5,6,7,8,9,10].map( (item, index) => (
                <div data-id={item} 
                  key={item} 
                  className={`scoreSelectorBarItem 
                    ${ item < 5 && 'redScoreItem' }
                    ${ item >= 5 && item < 8 && 'orangeScoreItem' }
                    ${ item >= 8 && item <= 9 && 'greenScoreItem' }
                    ${ item > 9 && 'purpleScoreItem' }
                    ${ gameScoreSaved && colorBarItemSaved ? colorBarItemSaved : gameScoreSaved && colorBarItem ? colorBarItem : '' }
                    ${ item <= gameScore && 'activeScoreItem' }
                    ${ item <= gameScoreSaved && 'activeScoreItem' }
                  `}
                ></div>
              )
              )}
            </div>
          </div>
        </div>
        
        

        <input type="text" placeholder='Insert a title for your review' ref={titleInput} required />

        <textarea placeholder='Write your review' ref={reviewTextArea} required />

        <input type='submit' value={'Review'} />
      </form>
    </section>
  )
}

export default CreateReviewModal;