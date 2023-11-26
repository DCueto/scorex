import './Header.css';
import logoIcon from './../../assets/img/logo_s.svg';
import { useState } from 'react';

function Header({sendInputValue, isSearching, setModalState, setSideNavState}){
  const [userLogged, setUserLogged] = useState(JSON.parse(window.localStorage.getItem('user')));

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

  return (
    <header className='topNav'>
      <i className="fa-solid fa-bars-staggered burgerMenuIcon" onClick={() => setSideNavState(true)} ></i>
      <img className='logo-scorex-s' src={logoIcon}></img>
      <input type="text" placeholder="Introduce tu busqueda" onKeyDown={handleSearchSubmit} onChange={handleSearchState}/>
      <i className="fa-regular fa-user userIcon" onClick={() => setModalState(true)}></i>
    </header>
  )
}

export default Header;