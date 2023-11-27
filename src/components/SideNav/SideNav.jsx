import './SideNav.css';
import logo from './../../assets/img/logo_full.svg';
import logoIcon from './../../assets/img/logo_s.svg';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function SideNav({sideNavState, setSideNavState}){
  const navigate = useNavigate();
  const [activeSideTabNav, setActiveSideTabNav] = useState('home');
  const { width, height } = useWindowDimensions();

  
  return <nav className={`sideNav ${sideNavState && 'sideNavOpen'}`}>
      <i className='fa-solid fa-xmark closeSideNavIcon' onClick={() => setSideNavState(false)}></i>
      <img 
        className='logo-scorex' 
        src={width > 1000 || width < 551  ? logo : logoIcon} 
        onClick={ () => navigate('/') }
        />
      <ul>
        <li className={`${ activeSideTabNav === 'home' ? 'active' : null}`}>
          <Link to='/' >
            <i className='fa-solid fa-house'></i><span>Home</span>
          </Link>
        </li>
        <li className={`${ activeSideTabNav === 'profile' ? 'active' : null}`}><i className='fa-regular fa-user'></i><span>Profile</span> </li>
          <Link to='/mylist'>
        <li className={`${ activeSideTabNav === 'my list' ? 'active' : null}`}><i className='fa-solid fa-list-ul'></i><span>My List</span></li>
          </Link>
      </ul>
    </nav>
}

export default SideNav;
