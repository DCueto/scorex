import './LoginRegisterTabs.css';


const LoginRegisterTabs = ({setLoginRegisterViewState}) => {
  
  return (
    <nav className='tabsLoginRegister'>
      <button className='tabLogin' onClick={() => setLoginRegisterViewState('login')}>Login</button>
      <button className='tabRegister' onClick={() => setLoginRegisterViewState('register')}>Register</button>
    </nav>
  )
}

export default LoginRegisterTabs;