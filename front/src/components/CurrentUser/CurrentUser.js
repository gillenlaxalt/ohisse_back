// == import

// npm
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { changeInput, deleteUser, fetchUserById, updateUser } from '../../actions/users';
import { useEffect } from 'react';

// local

// style

import './currentUser.scss';

function CurrentUser() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  //console.log(id);

  const usersListData = useSelector((state) => state.users.usersList);
  // console.log(usersListData);

  const userById = usersListData.find((user) => user.id == id);
  // console.log(userById);

  // const isEmpty = useSelector((state) => state.users.isEmpty);
  // conditional fixe error if userById does not had a id
  useEffect(
      () => {
        if(userById !== undefined){
        dispatch(fetchUserById(userById));
        }
      }, [],  
  );


  // const firstname= useSelector((state)=> state.users.inputCurrentUser.firstname );
  // const lastname= useSelector((state)=> state.users.inputCurrentUser.lastname );
  // const pseudo= useSelector((state)=> state.users.inputCurrentUser.pseudo );
  // const mail= useSelector((state)=> state.users.inputCurrentUser.mail );
  // const description= useSelector((state)=> state.users.inputCurrentUser.description );
  // const role= useSelector((state)=> state.users.inputCurrentUser.role );

  const handleChangeInput = (value, name) => (
    dispatch(changeInput(value, name))
  );

  function handleUpdateSubmit(evt) {
    evt.preventDefault();
    dispatch(updateUser());
    // console.log('submit update');
  }

  function handleDeleteSubmit(evt) {
    evt.preventDefault();
    dispatch(deleteUser(userById.id, userById.firstname, userById.lastname));
    console.log('click to delete user');
  }

  // const handleUpdateSubmit = (evt) => {

  //   console.log('je suis update submit');
  // }

  // const handleDeleteSubmit = (evt) => {

  //   console.log('je suis delete submit');
  // }


  if (userById == undefined) {
    return (
      navigate('/tous-les-utilisateurs', { replace :true }),
      // <Navigate to="/tous-les-utilisateurs" />, It is navigate that can redirection
      console.log('je ne charge pas plus')
    );
  } else {


    return (

      <section className='current-user'>
        <section className='current-user_profil'>
          <div className='current-user-profil_hello'>
            <p>{userById.firstname} {userById.lastname}
            </p>
          </div>
          <form className='current-user-profil_form' onSubmit={handleUpdateSubmit}>
            <div className='profil-form_identity'>
              <span className='form-identity_name span-identity'>


                <label htmlFor='firstname'>Prénom</label>

                <input
                  type='text'
                  name='firstname'
                  // value={ firstname }
                  defaultValue={userById.firstname}
                  onChange={(evt) => handleChangeInput(evt.target.value, 'firstname')}
                ></input>

                <label htmlFor='lastname'>Nom</label>

                <input
                  type='text'
                  name='lastname'
                  // value={lastname}
                  defaultValue={userById.lastname}
                  onChange={(evt) => handleChangeInput(evt.target.value, 'lastname')}

                ></input>
              </span>
              <span className='form-identity_pseudo-mail span-identity'>

                <label htmlFor='pseudo'>Pseudo</label>
                <input
                  type='text'
                  name='pseudo'
                  // value={pseudo}
                  defaultValue={userById.pseudo}
                  onChange={(evt) => handleChangeInput(evt.target.value, 'pseudo')}
                ></input>

                <label htmlFor='email'>E-mail</label>
                <input
                  type='email'
                  name='descrip'
                  // value={description}
                  defaultValue={userById.email}
                  onChange={(evt) => handleChangeInput(evt.target.value, 'description')}
                ></input>


              </span>
            </div>
            <div className='profil-form_info'>

              <span className='form_flex-span flex-span-margin-right'>
                <label htmlFor='city'>Ville</label>
                <input
                  type='text'
                  name='city'
                  // value={mail}
                  defaultValue={userById.city}
                  onChange={(evt) => handleChangeInput(evt.target.value, 'city')}
                ></input>
              </span>
              <span className='form_flex-span flex-span-margin-right'>
                <label htmlFor='city'>Role</label>
                <select
                  name='city'
                  // value={role}
                  defaultValue={userById.role}
                  onChange={(evt) => handleChangeInput(evt.target.value, 'role')}
                >
                  <option value="">
                    {userById.role}
                  </option>
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
                // value={description}
                defaultValue={userById.description}
                onChange={(evt) => handleChangeInput(evt.target.value, 'description')}
              ></input>

            </div>
            <div className='profil-form_btn'>
              <button
                onClick={handleUpdateSubmit}
                type='submit'
                className="profil-form_update profil-form-btn"
              >Modifier</button>
              <button
                onClick={handleDeleteSubmit}
                type='submit'
                className="profil-form_delete profil-form-btn"
              >Supprimer</button>
            </div>
          </form>

        </section>

        <section className='current-user_map'>
          <MapContainer center={[47, 2]} zoom={5} scrollWheelZoom>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[47, 2]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </section>
      </section>
    )
  }

}

export default CurrentUser;