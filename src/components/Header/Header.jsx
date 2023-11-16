import './Header.css';
import logo from './../../assets/img/logo_full.svg';

function Header(){

  return (
    <header className='topNav'>
      <img className='logo-scorex' src={logo} />
      <input type="text" placeholder="Introduce tu busqueda"/>
      <button>Login</button>
    </header>
  )
}

export default Header;