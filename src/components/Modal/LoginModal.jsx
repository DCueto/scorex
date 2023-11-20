

const LoginModal = ({setLoginRegisterViewState}) => {

  return (
    <div className="loginModal">
      <h3>Login</h3>
      <form>
        <input type="text" placeholder="Introduce tu usuario" />
        <input type="password" placeholder="Introduce tu constraseña" />
        <input type="submit" value="Login" />
      </form>
      <div className="registerLink">
        <p>¿No tienes una cuenta? <a onClick={() => setLoginRegisterViewState("register")}>Regístrate</a></p>
      </div>
    </div>
  )
}

export default LoginModal;