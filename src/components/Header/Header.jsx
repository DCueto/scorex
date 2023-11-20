import './Header.css';
import logo from './../../assets/img/logo_full.svg';

function Header(){

  return (
    <header className='topNav'>
      <img className='logo-scorex' src={logo} />
      <input type="text" placeholder="Introduce tu busqueda"/>
      <i id='btn' className="fa-solid fa-circle-user" ></i>
    </header>
  )
}

export default Header;