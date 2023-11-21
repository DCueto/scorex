import './RegisterModal.css';
import logo from './../../assets/img/logo_full.svg';
const RegisterModal = ({setLoginRegisterViewState}) => {
  
  return (
    <div className="registerModal">
      <form>
        <img className='logo' src={logo} />
        <div className='reg-h3'>
          <h3>Register</h3>
          <h3>Sign in</h3>
        </div>
        <hr />
        <label className='register-3'>User</label>
        <input className='register-1' type="text" placeholder="Introduce tu usuario" />
        <label className='register-3' >Email</label>
        <input className='register-1' type="email" placeholder="Introduce tu email" />
        <label className='register-3' >Password</label>
        <input className='register-1' type="password" placeholder="Introduce tu constraseña" />
        <input className='register-2' type="submit" value="Register" />
      </form>
      <div className="loginLink">
        <p>Ya tienes una cuenta? <a onClick={ () => setLoginRegisterViewState("login")}>Haz Login</a></p>
      </div>
    </div>
  )
}

export default RegisterModal;