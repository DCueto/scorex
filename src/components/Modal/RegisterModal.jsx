
import './RegisterModal.css';

const RegisterModal = ({setLoginRegisterViewState}) => {
  
  return (
    <div className="registerModal">
      <h3>Register</h3>
      <form>
        <input type="text" placeholder="Introduce tu usuario" />
        <input type="email" placeholder="Introduce tu email" />
        <input type="password" placeholder="Introduce tu constraseña" />
        <input type="password" placeholder="Confirma tu constraseña" />
        <input type="submit" value="Register" />
      </form>
      <div className="loginLink">
        <p>Ya tienes una cuenta? <a onClick={ () => setLoginRegisterViewState("login")}>Haz Login</a></p>
      </div>
    </div>
  )
}

export default RegisterModal;