import './App.css'
import Router from './router';
import ScoreXService from './services/ScoreXService';
import Header from './components/Header/Header';
import SideNav from './components/SideNav/SideNav';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import LoginModal from './components/Modal/LoginModal';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RegisterModal from './components/Modal/RegisterModal';
import LoginRegisterTabs from './components/Modal/LoginRegisterTabs';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [logirOrRegister, setLoginOrRegister] = useState('login');
  const scoreXService = new ScoreXService();

  useEffect( () => {

    scoreXService.getUsers()
      .then( console.log )
      .catch( console.error );

  }, []);

  function handleInputValue(value){
    setInputValue(value);
  }

  function handleSearchState(value){
    setIsSearching(value);
  }

  function handleModalState(value){
    setIsModalActive(value);
  }

  function handleLoginRegisterState(value){
    setLoginOrRegister(value);
  }

  return (
    <div id="app">
      <Header sendInputValue={handleInputValue} isSearching={handleSearchState} setModalState={handleModalState}/>
      <SideNav />
      <main className="mainContainer">
        <BrowserRouter>
          <Router inputValue={inputValue} isSearching={isSearching} />
        </BrowserRouter>
        <Footer />
      </main>
  
      { isModalActive
      ? <Modal setModalState={handleModalState} >
          <LoginRegisterTabs setLoginRegisterViewState={handleLoginRegisterState} />
          { logirOrRegister === 'login'
          ? <LoginModal setLoginRegisterViewState={handleLoginRegisterState} setModalState={handleModalState} />
          : logirOrRegister === 'register' ? <RegisterModal setLoginRegisterViewState={handleLoginRegisterState} setModalState={handleModalState} />
          : null
          }
        </Modal>
      : null
      }

    </div>
  )
}

export default App
