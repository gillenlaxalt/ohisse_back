// == import

// npm

// local

// style

function Login() {
  return (
    <section className="login">
      <h2 className="login_h2">Bienvenue</h2>
      <p className="login_txt">Bonjour, si tu es ici c’est que tu as le rôle d’admin sur O’hisee</p>
      <form>
        <label htmlFor="email">E-mail</label>
        <input
        id='email'
        type='email'
        placeholder="Rentre ton e-mail"
        />
        <label htmlFor="Password">Password</label>
        <input
        id='Password'
        type='Password'
        placeholder="ton mot de passe"
        />
      </form>

    </section>
  )
};

export default Login