// == import

// npm

// local

// style

function CurrentUser() {
  return (
    <section className='current-user'>
      <section className='current-user_profil'>
        <div className='current-user-profil_hello'>
          <p>Bonjour personnalisé</p>
        </div>
        <form className='current-user-profil_form'>
          <div className='profil-form_identity'>
            <span className='form-identity_name'>
              <label id='firstname'>Prénom</label>
              <input type='text' htmlFor='firstname'></input>
              <label id='lastname'>Nom</label>
              <input type='text' htmlFor='lastname'></input>
            </span>
            <span className='form-identity_pseudo-mail'>
              <label id='pseudo'>Pseudo</label>
              <input type='text' htmlFor='pseudo'></input>
              <label id='email'>E-mail</label>
              <input type='email' htmlFor='email'></input>
            </span>
          </div>
          <div className='profil-form_info'>
              <label id='city'>Ville</label>
              <select htmlFor='city'>
                <option value='role'>role</option>
                <option value='admin'>admin</option>
                <option value='user'>user</option>
              </select>
          </div>
          <label htmlFor='decrip'>Description</label>
          <input type='textarea'></input>
          <div className='profil-form_btn'>
            <button type='submit'>Modifier</button>
            <button type='submit'>Supprimer</button>
          </div>
        </form>

      </section>
      <section className='current-user_map'>

      </section>
    </section>
  )
}

export default CurrentUser;