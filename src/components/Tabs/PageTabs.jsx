import './PageTabs.css';
import PageTab from "./PageTab";
import { useState } from 'react';


const PageTabs = ({tabs, sendActivePageTab}) => {
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
    </div>
  )
}

export default PageTabs;