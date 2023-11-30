import './ReviewCard.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const ReviewCard = ({reviewData, setReviewViewModalState, sendReviewData}) => {

  const [scoreColors, setScoreColors] = useState({
    top: parseInt(reviewData.score) <= 10 && parseInt(reviewData.score) >= 9,
    good: parseInt(reviewData.score) < 9 && parseInt(reviewData.score) >= 7,
    medium: parseInt(reviewData.score) <= 6 && parseInt(reviewData.score) >= 5,
    bad: parseInt(reviewData.score) <= 4 && parseInt(reviewData.score) >= 0
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

  const handleClickOnReview = () => {
    setReviewViewModalState(true);
    sendReviewData(reviewData);
  }

  return (
    <div className='reviewCard' data-id={reviewData.id}>
      <div className='reviewCardInfo'>
        <span className={`reviewCardInfoScore ${scoreColor}`}>{reviewData.score}</span>
        <Link to={`/profile/${reviewData.userName}`} className='reviewCardInfoUsername'>@{reviewData.userName}</Link>
        <span className='reviewCardInfoDate'>{reviewData.review_date}</span>
      </div>
      <div className='wrapperBody'>
        <p className='reviewCardBody'>{reviewData.body}</p>
      </div>
      <button className='readMoreBtn' onClick={handleClickOnReview} >READ MORE</button>

      <div className={`reviewCardColorScore ${scoreColor}`}></div>
      <div className='reviewCardGame'>
        <div className={`reviewCardGameTag ${scoreColor} transparentColor`}>
          <p>{reviewData.gameName}</p>
        </div>
        <img src={reviewData.gameImage} />
        <div className='reviewCardGameGradient'></div>

      </div>
    </div>
  )
}

export default ReviewCard;