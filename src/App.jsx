import './App.css'
import Router from './router';
import ScoreXService from './services/ScoreXService';
import UserStore from './services/UserStore';
import Header from './components/Header/Header';
import SideNav from './components/SideNav/SideNav';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import LoginModal from './components/Modal/LoginModal';
import { useNavigate } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import RegisterModal from './components/Modal/RegisterModal';
import LoginRegisterTabs from './components/Modal/LoginRegisterTabs';

import logo from './assets/img/logo_full.svg';

// const UserContext = createContext(null);
export const AuthContext = createContext(null);

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
  const [userServerData, setUserServerData] = useState(null);
  const [myList, setMyList] = useState(null);

  const navigate = useNavigate();

  useEffect( () => {

    if(isAuthenticated){
      setUser(userStore.getUser());
      
      scoreXService.getUser(userStore.getUser().id)
        .then( (user) => {
          setUserServerData(user);
          setMyList(user.games_played);
        })
        .catch( (err) => console.error(err) );

    } else{
      setUser(null);
      setUserServerData(null);
      navigate('/');
    }

  }, [isAuthenticated]);


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
      <AuthContext.Provider value={ { 

        isAuthenticated: isAuthenticated, setIsAuthenticated: setIsAuthenticated, 
        user: user, setUser: setUser, 
        myList: myList, setMyList: setMyList,
        userServerData: userServerData, setUserServerData: setUserServerData

        } }>

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
          <div className='authWrapper'>
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
          </div>
          </Modal>
        : null
        }
      </AuthContext.Provider>
    </div>
  )
}

export default App
