import './Header.css';
import logoIcon from './../../assets/img/logo_s.svg';
import UserStore from '../../services/UserStore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ sendInputValue, isSearching, setModalState, setSideNavState, isAuthenticated, setIsAuthenticated }){
  const navigate = useNavigate();
  const userStore = new UserStore();
  const [user, setUser] = useState(userStore.getUser());

  useEffect( () => {
    setUser(userStore.getUser());
  }, [isAuthenticated])

  useEffect( () => {
    if( userStore.getUser() !== null ){
      setIsAuthenticated(true);
      setUser(userStore.getUser());
      
    } else{
      setIsAuthenticated(false);
      setUser(null);
    }
  }, [])


  function handleSearchSubmit(e){

    if(e.key === "Enter" && e.target.value.trim() !== ""){
      sendInputValue(e.target.value);
      isSearching(true);
    }

  }

  function handleSearchState(e){

    if(e.target.value.trim() === ""){
      isSearching(false);
    }

  }

  const handleLogout = () => {
    setIsAuthenticated(false);
    userStore.logOut();
    setUser(null);

  }


  return (
    <header className='topNav'>
      <i className="fa-solid fa-bars-staggered burgerMenuIcon" onClick={() => setSideNavState(true)} ></i>
      <img className='logo-scorex-s' src={logoIcon}></img>
      <input type="text" placeholder="Introduce tu busqueda" onKeyDown={handleSearchSubmit} onChange={handleSearchState}/>
      { isAuthenticated 
      ? <button className='logoutBtn' onClick={handleLogout} >Logout</button>
      : null
      }
      <i className={`fa-regular fa-user userIcon ${!isAuthenticated && 'marginLeft' }`} 
        onClick={ () => isAuthenticated ? navigate(`/profile/${user.username}`) : setModalState(true)}
      ></i>
    </header>
  )
}

export default Header;