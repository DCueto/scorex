import { useState } from 'react';
import './LoginRegisterTabs.css';


const LoginRegisterTabs = ({setLoginRegisterViewState}) => {

  const [selectedTab, setSelectedTab] = useState('login');
  
  return (
    <nav className='tabsLoginRegister'>
      <button className={`tabLogin ${selectedTab === 'login' ? 'active' : null}`}
        onClick={() => {
          setLoginRegisterViewState('login');
          setSelectedTab('login');
      }}>Login</button>
      <button className={`tabLogin ${selectedTab === 'register' ? 'active' : null}`}
        onClick={() => {
          setLoginRegisterViewState('register');
          setSelectedTab('register');
      }}>Register</button>
    </nav>
  )
}

export default LoginRegisterTabs;