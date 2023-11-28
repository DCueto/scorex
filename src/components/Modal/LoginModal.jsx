import './LoginModal.css';
import ScoreXService from '../../services/ScoreXService';
import UserStore from '../../services/UserStore';
import { useRef, useState } from 'react';import './LoginModal.css';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({setModalState, setIsAuthenticated}) => {

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
          setIsAuthenticated(true);
          setModalState(false);

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
        <p>Welcome!</p>
        <label className='loginLabel' >Email</label>
        <input type="email" className='loginInput' onBlur={handleInput} ref={emailInput} placeholder="pinnoccio@yahoo.com" required />
        <label className='loginLabel' >Password</label>
        <input type="password" className='loginInput' onBlur={handleInput} ref={passwordInput} placeholder="Insert your password" required />
        <input type="submit" className='loginSubmit' value="Login" />

        { formErrorMessage ? <p className='loginError'>{formErrorMessage}</p> : null}
      </form>
    </div>
  )
}

export default LoginModal;