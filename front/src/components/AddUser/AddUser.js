// == import

// npm
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addInputUser, changeInput, fetchUserById, updateUser } from '../../actions/users';
import { useEffect } from 'react';
// addUser
// local

// style

import './addUser.scss';

function AddUser() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const firstname= useSelector((state)=> state.users.addUser.firstname );
  const lastname= useSelector((state)=> state.users.addUser.lastname );
  const pseudo= useSelector((state)=> state.users.addUser.pseudo );
  const mail= useSelector((state)=> state.users.addUser.mail );
  const password= useSelector((state)=> state.users.addUser.password );
  const description= useSelector((state)=> state.users.addUser.description );
  const role= useSelector((state)=> state.users.addUser.role );

  
  const handleChangeInput = (value, name) => {
    // console.log('bonjour');
    (
      dispatch(addInputUser(value, name))
    )
  }

  function handleAddUserSubmit(evt) {
    evt.preventDefault();
    // dispatch(addUser());
    console.log('click to add user');
  }

  return (

      <section className='current-user'>
        <section className='current-user_profil'>
          <div className='current-user-profil_hello'>
            <p>Ajouter un utilisateur</p>
          </div>
          <form className='current-user-profil_form'>
            <div className='profil-form_identity'>
              <span className='form-identity_name span-identity'>

                <label htmlFor='firstname'>Prénom</label>

                <input
                  type='text'
                  name='firstname'
                  value={firstname}
                  onChange={(evt) => handleChangeInput(evt.target.value, 'firstname')}
                ></input>

                <label htmlFor='lastname'>Nom</label>

                <input
                  type='text'
                  name='lastname'
                  value={lastname}
                  onChange={(evt) => handleChangeInput(evt.target.value, 'lastname')}

                ></input>
              </span>
              <span className='form-identity_pseudo-mail span-identity'>

                <label htmlFor='pseudo'>Pseudo</label>
                <input
                  type='text'
                  name='pseudo'
                  value={pseudo}
                  onChange={(evt) => handleChangeInput(evt.target.value, 'pseudo')}
                ></input>

                <label htmlFor='email'>E-mail</label>
                <input
                  type='email'
                  name='descrip'
                  value={description}
                  onChange={(evt) => handleChangeInput(evt.target.value, 'description')}
                ></input>

              </span>
            </div>
              <label htmlFor='password'>Mot de passe</label>
                  <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={(evt) => handleChangeInput(evt.target.value, 'password')}
                  ></input>
            <div>

            </div>
            <div className='profil-form_info'>

              <span className='form_flex-span flex-span-margin-right'>
                <label htmlFor='city'>Ville</label>
                <input
                  type='text'
                  name='city'
                  value={mail}
                  onChange={(evt) => handleChangeInput(evt.target.value, 'city')}
                ></input>
              </span>
              <span className='form_flex-span flex-span-margin-right'>
                <label htmlFor='city'>Role</label>
                <select
                  name='city'
                  value={role}
                  onChange={(evt) => handleChangeInput(evt.target.value, 'role')}
                >
                  <option value=""></option>
                  <option value='admin'>admin</option>
                  <option value='user'>user</option>
                </select>
              </span>

            </div>
            <div className='profil-form_descrip'>

              <label htmlFor='decrip'>Description</label>
              <input
                type='textarea'
                name='descrip'
                value={description}
                onChange={(evt) => handleChangeInput(evt.target.value, 'description')}
              ></input>

            </div>
            <div className='profil-form_btn'>
              <button
                onClick={handleAddUserSubmit}
                type='submit'
                className="profil-form_update profil-form-btn"
              >Ajouter</button>
            </div>
          </form>

        </section>
      </section>
    )
  }

export default AddUser;