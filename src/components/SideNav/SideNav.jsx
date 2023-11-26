import './SideNav.css';
import logo from './../../assets/img/logo_full.svg';
import logoIcon from './../../assets/img/logo_s.svg';
import { useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function SideNav({sideNavState, setSideNavState}){
  const [activeSideTabNav, setActiveSideTabNav] = useState('home');
  const { width, height } = useWindowDimensions();

  
  return <nav className={`sideNav ${sideNavState && 'sideNavOpen'}`}>
      <i className='fa-solid fa-xmark closeSideNavIcon' onClick={() => setSideNavState(false)}></i>
      <img className='logo-scorex' src={width > 1000 || width < 551  ? logo : logoIcon} />
      <ul>
        <li className={`${ activeSideTabNav === 'home' ? 'active' : null}`}><i className='fa-solid fa-house'></i><span>Home</span></li>
        <li className={`${ activeSideTabNav === 'profile' ? 'active' : null}`}><i className='fa-solid fa-list-ul'></i><span>Profile</span> </li>
        <li className={`${ activeSideTabNav === 'my list' ? 'active' : null}`}><i className='fa-regular fa-user'></i><span>My List</span></li>
      </ul>
    </nav>
}

export default SideNav;


