import './LoginModal.css';
import ScoreXService from '../../services/ScoreXService';
import { useRef, useState } from 'react';import './LoginModal.css';
import logo from './../../assets/img/logo_full.svg';
const LoginModal = ({setLoginRegisterViewState}) => {

  const [formErrorMessage, setFormErrorMessage] = useState(null);
  const scoreXService = new ScoreXService();
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const localStorage = window.localStorage;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e);

    const formUserData = {
      email: emailInput.current.value,
      password: passwordInput.current.value
    }

    scoreXService.getUsers()
      .then( users => {
        const userValidated = users.find( (user) => {
          return (user.email === formUserData.email && user.password === formUserData.password);
        });

        if( userValidated ){
          console.log('El usuario coincide. Autenticado. ', userValidated);
          setFormErrorMessage(null);
          localStorage.setItem('user', JSON.stringify(userValidated));
        } else {
          console.log('No hay ningún usuario con estos datos');
          setFormErrorMessage('El correo y/o contraseña no coinciden');
        }

      })
      .catch( err => console.error(err));


  }

  const handleInput = (e) => {
    validateForm(e.target);
  }

  const validateForm = (input) => {
    if(input.value.trim() === ""){
      console.log('Input vacío');
    }
  }

  return (
    <div className="loginModal">

      <form onSubmit={handleLogin}>
        <img className='logo' src={logo} />
        <label className='login-3' >Email</label>
        <input type="email" className='login-1' onBlur={handleInput} ref={emailInput} placeholder="Introduce tu email" required />
        <label className='login-3' >Email</label>
        <input type="password" className='login-1' onBlur={handleInput} ref={passwordInput} placeholder="Introduce tu constraseña" required />
        <input type="submit" className='login-2' value="Login" />
      </form>

      { formErrorMessage ? <p className='loginError'>{formErrorMessage}</p> : null}
  
      <div className="registerLink">
        <p>¿No tienes una cuenta? <a onClick={() => setLoginRegisterViewState("register")}>Regístrate</a></p>
      </div>
    </div>
  )
}

export default LoginModal;