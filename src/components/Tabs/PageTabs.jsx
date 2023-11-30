import './PageTabs.css';
import PageTab from "./PageTab";
import ScoreXService from '../../services/ScoreXService';
import { AuthContext } from '../../App';
import { useEffect, useState, useContext } from 'react';


const PageTabs = ({tabs, sendActivePageTab, setCreateReviewModalState, isAuthenticated, defaultActivePageTab, gameData}) => {
  const [activePageTab, setActivePageTab] = useState(null);

  const { userServerData, setUserServerData, myList, setMyList } = useContext(AuthContext);
  const scorex = new ScoreXService();


  useEffect( () => {
    setActivePageTab(defaultActivePageTab);
  }, [defaultActivePageTab]);

  const handleActiveTab = (value) => {
    setActivePageTab(value);
    sendActivePageTab(value);
  }

  const handleAddToMyList = () => {

    if(gameData){
      
      const postItem = {
        "gameId": gameData.id,
        "metacritic": gameData.metacritic,
        "title": gameData.name,
        "backgroundImage": gameData.background_image
      }

      for (let item of myList) {
        if(gameData.id == item.gameId){
          console.log('Game Already on list');
          return;
        }
      }

      let userList;
      userList = [...myList, postItem];
      console.log(userList);

      setMyList(userList);
      scorex.patchUserList(userServerData.id, JSON.stringify({"games_played": userList}));

    }

  }

  return (
    <div className="pageTabs">
      {tabs.map( (tab, index) => (
        <PageTab key={index} tab={tab} activeTab={activePageTab} setActivePageTab={handleActiveTab}/>
        )
      )}
      {isAuthenticated &&
        <div className='pageButtons'>
          <button className='addReviewBtn' onClick={ () => setCreateReviewModalState(true) } >Add Review</button>
          <button className='addToMyListBtn' onClick={handleAddToMyList} >Add to My List</button>
        </div>
      }
    </div>
  )
}

export default PageTabs;