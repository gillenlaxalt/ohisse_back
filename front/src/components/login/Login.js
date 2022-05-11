// == import

// npm

// local

// style
import './login.scss';

function Login() {
  return (
    <section className="login">
      <h2 className="login_h2">Bienvenue</h2>
      <p className="login_txt">Bonjour, si tu es ici c’est que tu as le rôle d’admin sur O’hisee</p>
      <form className="login_form">
        <label
        htmlFor="email"
        className="login-form_label"
        >E-mail</label>
        <input
        id='email'
        type='email'
        placeholder="Ton e-mail"
        className="login-form_input"
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