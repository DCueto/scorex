import './Header.css';
import logo from './../../assets/img/logo_full.svg';
import { useState } from 'react';

function Header(){
  const {inputValue, setInputValue} = useState("");

  function handleSearchSubmit(e){
    if(e.key === "Enter"){
      setInputValue(e.target.value);
    }
  }

  return (
    <header className='topNav'>
      <img className='logo-scorex' src={logo} />
      <input type="text" placeholder="Introduce tu busqueda" onKeyDown={handleSearchSubmit}/>
      <i className="fa-regular fa-user" style="color: #c180dd;">a</i>
    </header>
  )
}

export default Header;