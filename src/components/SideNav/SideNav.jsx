import './SideNav.css';
import logo from './../../assets/img/logo_full.svg';
import logoIcon from './../../assets/img/logo_s.svg';

import UserStore from '../../services/UserStore';

import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function SideNav({sideNavState, setSideNavState, isAuthenticated, user}){
  const navigate = useNavigate();
  const { width, height } = useWindowDimensions();
  const [activeSideTabNav, setActiveSideTabNav] = useState('home');

  
  return <nav className={`sideNav ${sideNavState && 'sideNavOpen'}`}>
      <i className='fa-solid fa-xmark closeSideNavIcon' onClick={() => setSideNavState(false)}></i>
      <img 
        className='logo-scorex' 
        src={width > 1000 || width < 551  ? logo : logoIcon} 
        onClick={ () => navigate('/') }
        />
      <ul>
        <li className={`${ activeSideTabNav === 'home' ? 'active' : null}`} onClick={() => setActiveSideTabNav('home')} >
          <Link to='/' >
            <i className='fa-solid fa-house'></i><span>Home</span>
          </Link>
        </li>
        { isAuthenticated 
          ? 
          <li className={`${ activeSideTabNav === 'profile' ? 'active' : null}`} onClick={() => setActiveSideTabNav('profile')} >
            <Link to={`/profile/${user?.username}`} >
              <i className='fa-regular fa-user'></i><span>Profile</span>
            </Link>
          </li>
          : null
        }
        { isAuthenticated 
          ? 
          <li className={`${ activeSideTabNav === 'my list' ? 'active' : null}`} onClick={() => setActiveSideTabNav('my list')} >
            <Link to={`/my-list`} >
              <i className='fa-solid fa-list-ul'></i><span>My List</span>
            </Link>
          </li>
          : null
        }
      </ul>
    </nav>
}

export default SideNav;
