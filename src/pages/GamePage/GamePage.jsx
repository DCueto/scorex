import './GamePage.css'
import GameHero from "../../components/Game/GameHero";
import GameSummary from '../../components/Game/GameSummary';
import GameInfo from '../../components/Game/GameInfo';
import Modal from './../../components/Modal/Modal';
import CreateReviewModal from '../../components/Modal/CreateReviewModal';
import ReviewViewModal from '../../components/Modal/ReviewViewModal';
import RAWGService from '../../services/RAWGService';
import ScoreXService from '../../services/ScoreXService';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageTabs from '../../components/Tabs/PageTabs';
import ReviewCard from '../../components/Card/ReviewCard';

function GamePage({isAuthenticated}){
  const { gameId } = useParams();
  const rawg = new RAWGService();
  const scorex = new ScoreXService();

  const [data, setData] = useState({});
  const [activePageTab, setActivePageTab] = useState('Basic Information');
  const [isCreateReviewModalActive, setIsCreateReviewModalActive] = useState(false);
  const [isReviewModalActive, setIsReviewModalActive] = useState(false);
  const [reviewViewModalState, setReviewViewModalState] = useState(false);

  const [reviewViewData, setReviewViewData] = useState(null);
  const [newReviewId, setNewReviewId] = useState(null);
  const [newReviewData, setNewReviewData] = useState(null);
  const [gameReviews, setGameReviews] = useState(null);
  
  useEffect( () => {

    rawg.searchGame(gameId).then( fetchData => {
      setData(fetchData);
    });

    scorex.getGameReviews(gameId)
      .then( reviews => setGameReviews(reviews) )
      .catch( err => console.error(err) );

  }, []);

  useEffect( () => {

    scorex.getReview(newReviewId)
      .then( review => setNewReviewData(review) )
      .catch( err => console.error(err) );

  }, [newReviewId]);

  const handleActivePageTab = (value) => {
    setActivePageTab(value);
  }

  const handleModalState = (value) => {
    setIsCreateReviewModalActive(value);
  }

  const handleNewReviewId = (value) => {
    if(value){
      setNewReviewId(value);

      setTimeout( () => {
        setIsReviewModalActive(true);
      }, 3000);
    }
  }

  const handleNewReviewViewModalState = (value) => {
    setIsReviewModalActive(value);
  }

  const handleReviewViewModalState = (value) => {
    setReviewViewModalState(value);
  }

  const handleReviewData = (data) => {
    setReviewViewData(data);
  }


  return (
    <section className="gamePage">
      <GameHero data={data}/>
      <PageTabs tabs={['Basic Information', 'Reviews']} 
        sendActivePageTab={handleActivePageTab} 
        setCreateReviewModalState={handleModalState} 
        isAuthenticated={isAuthenticated} 
        defaultActivePageTab={activePageTab}
        gameData={data}
      />
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

      { activePageTab === 'Reviews' 
        &&
        <section className='reviewsGamePageTab'>
          <div className='gamePageCol1'>
            <div className='reviews'>
              { gameReviews?.map( (review) => (
                <ReviewCard key={review.id} reviewData={review} setReviewViewModalState={handleReviewViewModalState} sendReviewData={handleReviewData} />
              ))}
            </div>
          </div>
          <div className='gamePageCol2'>
            <GameInfo data={data} />
          </div>
        </section>
       }

      { isCreateReviewModalActive &&
        <Modal setModalState={handleModalState} >
          <CreateReviewModal gameData={data} sendNewReviewId={ handleNewReviewId } setCreateReviewModalState={handleModalState} />
        </Modal>
      }

      { isReviewModalActive &&
        <Modal setModalState={handleNewReviewViewModalState} >
          <ReviewViewModal reviewData={newReviewData} setReviewViewModalState={handleReviewViewModalState} />
        </Modal>
      }

      {
        reviewViewModalState &&
        <Modal setModalState={handleReviewViewModalState}>
          <ReviewViewModal reviewData={reviewViewData} setReviewViewModalState={handleReviewViewModalState} />
        </Modal>
      }


    </section>

  )
}



export default GamePage;