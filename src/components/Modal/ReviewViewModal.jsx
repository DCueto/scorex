import { Link } from 'react-router-dom';
import './ReviewViewModal.css';

import { useEffect, useRef, useState } from 'react';


const ReviewViewModal = ({reviewData, setReviewViewModalState}) => {

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


  return (
    <section className="ReviewViewModal">

      <div className='ReviewViewHero'>
        <img src={reviewData.gameImage} />
        <h2>{reviewData.gameName}</h2>
        <div className='gradientHero'></div>
      </div>

      <div className='ReviewViewContent'>
        <div className='ReviewViewInfo'>
          <span className={`ReviewViewInfoScore ${scoreColor}`}>{reviewData.score}</span>
          <div className='ReviewViewInfoData'>
            <h3 className='ReviewViewInfoDataTitle'>{reviewData.title}</h3>
            <p>
              <Link to={`/profile/${reviewData.userName}`} className='ReviewViewInfoDataUsername' onClick={() => setReviewViewModalState(false)} >@{reviewData.userName}</Link>
              <span className='ReviewViewInfoDataDate'>{reviewData.review_date}</span>
            </p>
          </div>
        </div>
        <p className='ReviewViewBody'>{reviewData.body}</p>
      </div>

    </section>
  )
}

export default ReviewViewModal;