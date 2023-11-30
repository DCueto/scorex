import './ProfilePage.css';
import { useParams } from 'react-router-dom';
import ProfileHero from '../../components/Hero/ProfileHero';
import ScoreXService from '../../services/ScoreXService';
import UserStore from '../../services/UserStore';
import { AuthContext } from '../../App';
import { useEffect, useState, useContext } from 'react';
import PageTabs from '../../components/Tabs/PageTabs';
import ReviewCard from '../../components/Card/ReviewCard';
import Modal from '../../components/Modal/Modal';
import ReviewViewModal from '../../components/Modal/ReviewViewModal';

const ProfilePage = ({isAuthenticated}) => {

  const { username } = useParams();
  const scorexService = new ScoreXService();
  const userStore = new UserStore();

  const [userData, setUserData] = useState({});
  const { userServerData, setUserServerData } = useContext(AuthContext);
  const [myUser, setMyUser] = useState(null);

  const [myReviews, setMyReviews] = useState([]);
  const [userReviews, setUserReviews] = useState([]);

  const [activePageTab, setActivePageTab] = useState('My Reviews');

  const [isReviewViewModalActive, setIsReviewViewModalActive] = useState(false);
  const [modalReviewData, setModalReviewData] = useState(null);

  useEffect( () => {

    scorexService.getUserByUsername(username)
      .then( (user) => setUserData(user[0]) )
      .catch( (err) => console.error(err) );

    if(myUser){
      setActivePageTab('My Reviews');
    } else{
      setActivePageTab('Reviews');
    }

  }, []);

  useEffect( () => {

    const user = userStore.getUser();

    if(user.username === userData.username){
      setMyUser(user);
    } else {

      scorexService.getUserReviews(userData.id)
        .then( (reviews) => setUserReviews(reviews))
        .catch( (err) => console.error(err) );
    }

  }, [userData]);

  useEffect( () => {
    
    if(myUser){
      scorexService.getUserReviews(myUser.id)
        .then( (reviews) =>  setMyReviews(reviews))
        .catch( (err) => console.error(err) );
    }

    if(myUser){
      setActivePageTab('My Reviews');
    } else{
      setActivePageTab('Reviews');
    }

  }, [myUser])


  const handleActivePageTab = (value) => {
    setActivePageTab(value);
  }

  const handleModalState = (value) => {
    setIsReviewViewModalActive(value);
  }

  const handleReviewData = (data) => {
    setModalReviewData(data);
  }


  return (
    <section className="profilePage">
      {
        isAuthenticated && myUser
        ? 
        <>
          <ProfileHero profileData={myUser} isMyUser={true} />
          <PageTabs tabs={ ['My Reviews'] } sendActivePageTab={handleActivePageTab} defaultActivePageTab={activePageTab} />
        </>
        :
        <>
          <ProfileHero profileData={userData} isMyUser={false} />
          <PageTabs tabs={ ['Reviews']} sendActivePageTab={handleActivePageTab} defaultActivePageTab={activePageTab} />
        </>
      }
      <section className='reviewsContainer'>
      {
        activePageTab == 'My Reviews' &&
        myReviews.map( (review) => (
          <ReviewCard key={review.id} reviewData={review} setReviewViewModalState={handleModalState} sendReviewData={handleReviewData} />
        ) )

      }

      {
        activePageTab == 'Reviews' &&
        userReviews.map( (review) => (
          <ReviewCard key={review.id} reviewData={review} setReviewViewModalState={handleModalState} sendReviewData={handleReviewData} />
        ) )

      }
      </section>

    { isReviewViewModalActive &&
      <Modal setModalState={handleModalState} >
        <ReviewViewModal reviewData={modalReviewData} setReviewViewModalState={handleModalState} />
      </Modal>
    }
    </section>
  )
}

export default ProfilePage;