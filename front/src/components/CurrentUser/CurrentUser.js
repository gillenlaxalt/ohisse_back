// == import
// npm
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';


// local

// style
import './currentUser.scss';

function CurrentUser() {

  const firstname= useSelector((state)=> state.users.inputCurrentUser );
  const lastname= useSelector((state)=> state.users.inputCurrentUser );
  return (
    <section className='current-user'>
      <section className='current-user_profil'>
        <div className='current-user-profil_hello'>
          <p>`${firstname} ${lastname}`</p>
        </div>
        <form className='current-user-profil_form'>
          <div className='profil-form_identity'>
            <span className='form-identity_name span-identity'>
              <label id='firstname'>Prénom</label>
              <input
              type='text'
              htmlFor='firstname'
              value={firstname}
              ></input>
              <label id='lastname'>Nom</label>
              <input type='text' htmlFor='lastname'></input>
            </span>
            <span className='form-identity_pseudo-mail span-identity'>
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
          <div className='profil-form_descrip'>
            <label htmlFor='decrip'>Description</label>
            <input type='textarea'></input>
          </div>
          <div className='profil-form_btn'>
            <button
              type='submit'
              className="profil-form_update profil-form-btn"
            >Modifier</button>
            <button
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

export default CurrentUser;