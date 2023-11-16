import './App.css'
import Router from './router';
import Header from './components/Header/Header';
import SideNav from './components/SideNav/SideNav';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  function handleInputValue(value){
    setInputValue(value);
  }

  function handleSearchState(value){
    setIsSearching(value);
  }

  return (
    <div id="app">
      <Header sendInputValue={handleInputValue} isSearching={handleSearchState}/>
      <SideNav />
      <main className="mainContainer">
        <BrowserRouter>
          <Router inputValue={inputValue} isSearching={isSearching} />
        </BrowserRouter>
        <Footer />
      </main>
    </div>
  )
}

export default App
