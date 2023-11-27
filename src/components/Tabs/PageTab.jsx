import './PageTab.css';

const PageTab = ({tab, activeTab, setActivePageTab}) => {

  return (
    <div 
      className={`pageTab ${activeTab === tab && 'activePageTab'}`}
      onClick={() => setActivePageTab(tab)}
    >
      <p>{tab}</p>
      <div className='pageTabUnderline'></div>
    </div>
  )
}

export default PageTab;