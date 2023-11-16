import './Header.css';
import logo from './../../assets/img/logo_full.svg';

function Header(){

  return (
    <header className='topNav'>
      <img className='logo-scorex' src={logo} />
      <input type="text" placeholder="Introduce tu busqueda"/>
      <i class="fa-regular fa-user" style="color: #c180dd;">a</i>
    </header>
  )
}

export default Header;