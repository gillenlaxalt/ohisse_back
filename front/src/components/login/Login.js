// == import
import { useDispatch, useSelector } from 'react-redux';
import { changeLoginField } from '../../actions/settings';
import { login } from '../../actions/users';

// npm

// local


// style
import './login.scss';

function Login() {

  const dispatch = useDispatch();

  const mail = useSelector((state) => state.settings.login.mail);
  const password = useSelector((state) => state.settings.login.password);
  console.log(mail, password)

  const handleChangeFieldLogin = (value, name) => {
    console.log(value, name);
    dispatch(changeLoginField(value, name))
  };

  const handleSubmitLogin = (evt) => {
    evt.preventDefault();
    console.log('handleSubmitLogin');
    dispatch(login())
}
  
  
  return (
    <section className="login">
      <h2 className="login_h2">Bienvenue</h2>
      <p className="login_txt">Bonjour, si tu es ici c’est que tu as le rôle d’admin sur O’hisee</p>
      <form className="login_form" onSubmit={handleSubmitLogin}>
        <label
        htmlFor="email"
        className="login-form_label"
        >E-mail</label>
        <input
        id='email'
        type='email'
        placeholder="Ton e-mail"
        className="login-form_input"
        value={mail}
        onChange = {(evt) => handleChangeFieldLogin(evt.target.value, 'mail')}
        />
        <label
        htmlFor="Password"
        className="login-form_label"
        >Password</label>
        <input
        id='Password'
        type='Password'
        placeholder="Ton mot de passe"
        className="login-form_input"
        value={password}
        onChange = {(evt) => handleChangeFieldLogin(evt.target.value, 'password')}
        />
        <button
        type='submit'
        className="login-form_btn"
        >connexion</button>
      </form>

    </section>
  )
};

export default Login