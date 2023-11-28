import './PageTabs.css';
import PageTab from "./PageTab";
import { useState } from 'react';


const PageTabs = ({tabs, sendActivePageTab, setCreateReviewModalState, isAuthenticated}) => {
  const [activePageTab, setActivePageTab] = useState(tabs[0]);
  
  const handleActiveTab = (value) => {
    setActivePageTab(value);
    sendActivePageTab(value);
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
          <button className='addToMyListBtn'>Add to My List</button>
        </div>
      }
    </div>
  )
}

export default PageTabs;