import './App.css'
import Router from './router';
import ScoreXService from './services/ScoreXService';
import UserStore from './services/UserStore';
import Header from './components/Header/Header';
import SideNav from './components/SideNav/SideNav';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import LoginModal from './components/Modal/LoginModal';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RegisterModal from './components/Modal/RegisterModal';
import LoginRegisterTabs from './components/Modal/LoginRegisterTabs';

import logo from './assets/img/logo_full.svg';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [logirOrRegister, setLoginOrRegister] = useState('login');
  
  const scoreXService = new ScoreXService();
  const userStore = new UserStore();
  
  const [isAuthenticated, setIsAuthenticated] = useState(userStore.isAuthenticated());
  const [user, setUser] = useState(userStore.getUser());

  const navigate = useNavigate();

  useEffect( () => {

    scoreXService.getUsers()
      .then( console.log )
      .catch( console.error );

  }, []);

  useEffect( () => {

    if(isAuthenticated){
      setUser(userStore.getUser());
    }

  }, [isAuthenticated]);
  

  useEffect( () => {

    if(user !== null){
      navigate(`/profile/${user.username}`);
    }

  }, [user]);

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

  function handleSideNavState(value){
    setIsSideNavOpen(value);
  }

  function handleAuthenticatedState(value){
    setIsAuthenticated(value);
  }

  return (
    <div id="app">
        <Header sendInputValue={handleInputValue} 
          isSearching={handleSearchState} 
          setModalState={handleModalState} 
          setSideNavState={handleSideNavState} 
          isAuthenticated={isAuthenticated} 
          setIsAuthenticated={handleAuthenticatedState}
          user={user}
        />

        <SideNav sideNavState={isSideNavOpen} 
          setSideNavState={handleSideNavState}
          isAuthenticated={isAuthenticated}
          user={user}
        />

        <main className="mainContainer">
          <Router inputValue={inputValue} isSearching={isSearching} isAuthenticated={isAuthenticated} />
          <Footer />
        </main>

      { isModalActive
      ? <Modal setModalState={handleModalState} >
          <img className='logo' src={logo} />
          <LoginRegisterTabs setLoginRegisterViewState={handleLoginRegisterState} />
          { logirOrRegister === 'login'
          ? <LoginModal setModalState={handleModalState} setIsAuthenticated={handleAuthenticatedState}/>
          : logirOrRegister === 'register' 

            ? <RegisterModal 
              setLoginRegisterViewState={handleLoginRegisterState} 
              setModalState={handleModalState} 
              setIsAuthenticated={handleAuthenticatedState} />

          : null
          }
        </Modal>
      : null
      }

    </div>
  )
}

export default App
