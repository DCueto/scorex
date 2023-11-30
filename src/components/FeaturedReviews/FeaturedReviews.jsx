import './FeaturedReviews.css';
import ReviewCard from '../Card/ReviewCard';
import Modal from '../Modal/Modal';
import ScoreXService from '../../services/ScoreXService';
import { useEffect, useState } from 'react';
import ReviewViewModal from '../Modal/ReviewViewModal';

const FeaturedReviews = ({title, type, limit}) => {

  const [reviews, setReviews] = useState(null);
  const [reviewViewModalState, setReviewViewModalState] = useState(false);
  const [reviewModalData, setReviewModalData] = useState(null);

  useEffect(() => {

    const scorex = new ScoreXService();

    if(type === 'latests'){
      scorex.getLatestsReviews(limit)
        .then((array) => setReviews(array))
        .catch( err => console.error(err) );
    }

  }, []);

  const handleModalState = (value) => {
    setReviewViewModalState(value);
  }

  const handleReviewData = (data) => {
    setReviewModalData(data);
  }

  return (
    <section className='featuredReviews'>
      <h2>{title}</h2>
      <div className='featuredReviewsContent'>
        { reviews?.map( (review) => (
          <div key={review.id} className='colReview'>
            <ReviewCard reviewData={review} setReviewViewModalState={handleModalState} sendReviewData={handleReviewData} />
          </div>
        ) ) }

        { reviewViewModalState &&
          <Modal setModalState={handleModalState} >
            <ReviewViewModal reviewData={reviewModalData} setReviewViewModalState={handleModalState} />
          </Modal>
        }
      </div>
    </section>
  )
}

export default FeaturedReviews;