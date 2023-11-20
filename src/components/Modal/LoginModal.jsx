import './LoginModal.css';
import logo from './../../assets/img/logo_full.svg';
const LoginModal = ({setLoginRegisterViewState}) => {

  return (
    <div className="loginModal">
      <img className='logo' src={logo} />
      <div className='log-h3'>
        <h3>Register</h3>
        <h3>Sign in</h3>
      </div>
      <hr />
      <form>
        <label className='login-3' >Email</label>
        <input className='login-1' type="text" placeholder="Introduce tu correo electrónico" />
        <label className='login-3' >Password</label>
        <input className='login-1' type="password" placeholder="Introduce tu constraseña" />
        <input className='login-2' type="submit" value="Login" />
      </form>
      <div className="registerLink">
        <p>¿No tienes una cuenta? <a onClick={() => setLoginRegisterViewState("register")}>Regístrate</a></p>
      </div>
    </div>
  )
}

export default LoginModal;