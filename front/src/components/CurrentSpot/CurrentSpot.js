//= import

//npm
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { changeInputSpot, deleteSpot, fetchSpotById, updateSpot } from '../../actions/spots';
// local

// style
import './currentSpot.scss'

function CurrentSpot() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const spotsListData = useSelector((state) => state.spots.spotsList)
  // console.log(spotsListData);
  const { id } = useParams();
  // console.log(id);
  const spotById = spotsListData.find((spot) => spot.id == id);
  // console.log(spotById);

  const handleChangeInput = (value, name) => (
    dispatch(changeInputSpot(value, name))
  )

  function handleDeleteSubmit (evt) {
    evt.preventDefault();
    dispatch(deleteSpot(spotById.id, spotById.name))
  }

  function handleUpdateSubmit(evt) {
    evt.preventDefault();
    dispatch(updateSpot());
    console.log('submit update');
  }

  useEffect(
      () => {
        if(spotById !== undefined){
        dispatch(fetchSpotById(spotById));
        }
      }, [],  
  );

  const rocks = [
    'calcaire',
    'calcaire dolomite',
    'conglomérat',
    'gneiss',
    'granite',
    'grès',
    'volcanique',
    'schiste',
  ];

  
    const cotations = [
      '4',
      '5a',
      '5b',
      '5c',
      '6a',
      '6b',
      '6c',
      '7a',
      '7b',
      '7c',
      '8a',
      '8b',
      '8c',
      '9a',
      '9b',
      '9c',
    ];
    const min_difficulty = useSelector((state) => state.spots.addSpot.min_difficulty)
    const value = (element) => element === min_difficulty;

  if (spotById == undefined) {
    return (
      navigate('/tous-les-spots', { replace :true }),
      // <Navigate to="/tous-les-utilisateurs" />, It is navigate that can redirection
      console.log('je ne charge pas plus')
    );
  } else{
    return(
      <section className='currentSpot'>
        <section className='currentSpot_info'>
          <h1 className='currentSpot-info_h1'>{spotById.name}</h1>
          <form className='currentSpot-info_form'>
            <div className='info-form_img-url form_flex-div'>
              <img src={spotById.picture} alt='' className='info-form-img' />
              <span className='info-form_url'>
                <label htmlFor='spot' className='info-form-url'>Nom du spot</label>
                <input
                  type='text'
                  name='spot'
                  defaultValue={spotById.name}
                  onChange = {(evt) => handleChangeInput(evt.target.value, 'name')}
                ></input>
                <label htmlFor='url'>URL de l'image</label>
                <input
                  type='url'
                  name='url'
                  defaultValue={spotById.picture}
                  onChange = {(evt) => handleChangeInput(evt.target.value, 'picture')}
                ></input>
              </span>
            </div>
            <div className='info-form_num-street form_flex-div'>
              <span className='form_flex-span flex-span-margin-right'>
                <label htmlFor='number' className='info-form-num'>Numéro</label>
                <input
                  type='text'
                  name='number'
                  defaultValue={spotById.number}
                  onChange = {(evt) => handleChangeInput(evt.target.value, 'number')}
                ></input>
              </span>
              <span className='info-form-street form_flex-span'>
                <label htmlFor='street' className='info-form-street'>Rue</label>
                <input
                type='text'
                name='street'
                defaultValue={spotById.street}
                onChange = {(evt) => handleChangeInput(evt.target.value, 'street')}
                ></input>
              </span>
            </div>
            <div className='info-form_zip-city form_flex-div'>
              <span className='form_flex-span flex-span-margin-right'>
                <label htmlFor='zipcode' className='info-form-zip'>Code Postal</label>
                <input
                  type='number'
                  name='zipcode'
                  defaultValue={spotById.zipcode}
                  onChange = {(evt) => handleChangeInput(evt.target.value, 'zipcode')}
                ></input>
              </span>
              <span className='form_flex-span'>
                <label htmlFor='city' className='info-form-city'>Ville</label>
                <input
                  type='text'
                  name='city'
                  defaultValue={spotById.city}
                  onChange = {(evt) => handleChangeInput(evt.target.value, 'city')}
                ></input>
              </span>
            </div>
            <div className='info-form_country-long-lat form_flex-div'>
              <span className='form_flex-span flex-span-margin-right'>
                <label htmlFor='country'className='info-form-country'>Pays</label>
                <input
                  type='text'
                  name='country'
                  defaultValue={spotById.country}
                  onChange = {(evt) => handleChangeInput(evt.target.value, 'country')}
                ></input>
              </span>
              <span className='form_flex-span flex-span-margin-right'>
                <label htmlFor='longitude' className='info-form-long'>Longitude</label>
                <input
                type='text'
                name='longitude'
                defaultValue={spotById.longitude}
                onChange = {(evt) => handleChangeInput(evt.target.value, 'longitude')}
                ></input>
              </span>
              <span className='form_flex-span'>
                <label htmlFor='latitude' className='info-form-lat'>Latitude</label>
                <input
                type='text'
                name='latitude'
                defaultValue={spotById.latitude}
                onChange = {(evt) => handleChangeInput(evt.target.value, 'latitude')}
                ></input>
              </span>
            </div>
            <div className='info-form_disc-type-rep form_flex-div'>
            <label htmlFor='discipline'>Quelle(s) discipline(s) dans cette salle</label>
              <select
              name='discipline'
              onChange = {(evt) => handleChangeInput(evt.target.value, 'discipline')}
              >
                <option value="">{spotById.discipline}</option>
                <option value='Bloc'>Bloc</option>
                <option value='Voie'>Voie</option>
                <option value='Bloc/Voie'>Les deux</option>
              </select>
              <span className='form_flex-span'>
                <label htmlFor='type'>Type</label>
                <select
                name='type'
                onChange = {(evt) => handleChangeInput(evt.target.value, 'type')}
                >
                  <option value="">{spotById.type}</option>
                  <option value='t1'>Salle</option>
                  <option value='t2'>Spot</option>
                </select>
                <label htmlFor='type'>Type de roche</label>
                <select
                name='type'
                onChange = {(evt) => handleChangeInput(evt.target.value, 'rock_type')}
                >
                  <option value="">{spotById.rock_type}</option>
                  {
                rocks.map((rock) => (
                  <option key={rock} value={rock}>{rock}</option>
                ))
              }
                </select>
              </span>
              <label htmlFor='reputation'>Réputation</label>
              <select
              name='reputation'
              onChange = {(evt) => handleChangeInput(evt.target.value, 'reputation')}
              >
                <option value="">{spotById.reputation}</option>
                <option value='easy'>Plutôt facile</option>
              <option value='medium'>D'un niveau moyen</option>
              <option value='hard'>Putôt costaud</option>
              </select>
            </div>
            <div className='info-form_diffMin-diffMax form_flex-div'>
              <span className='form_flex-span flex-span-margin-right'>
                <label htmlFor='minDiff'>Difficulté minimale</label>
                  <select
                  name='minDiff'
                  onChange = {(evt) => handleChangeInput(evt.target.value, 'min_difficulty')}
                  >
                    <option value="">{spotById.min_difficulty}</option>
                    {
                cotations.map((cotation) => (
                  <option key={cotation} value={cotation}>{cotation}</option>
                ))
              }
                  </select>
              </span>
              <span className='form_flex-span'>
                <label htmlFor='maxDiff'>Difficulté maximale</label>
                <select
                name='maxDiff'
                onChange = {(evt) => handleChangeInput(evt.target.value, 'max_difficulty')}
                >
                  <option value="">{spotById.max_difficulty}</option>
                  {
                cotations.map((item, index) => {
                  if (cotations.findIndex(value) <= index) {
                    return <option key={item} value={item}>{item}</option>;
                  }
                  return null;
                })
              }
                </select>
              </span>
            </div>
            <div className='spot-form_descrip'>
  
                <label htmlFor='decrip' id='label-descrip'>Description</label>
                <input
                  type='textarea'
                  name='descrip'
                  defaultValue={spotById.various}
                  onChange = {(evt) => handleChangeInput(evt.target.value, 'various')}
                ></input>
  
              </div>
            <div className='spot-form_btn'>
                <button
                  onClick={handleUpdateSubmit}
                  type='submit'
                  className="spot-form_update spot-form-btn"
                >Modifier</button>
                <button
                  onClick={handleDeleteSubmit}
                  type='submit'
                  className="spot-form_delete spot-form-btn"
                >Supprimer</button>
              </div>
          </form>
  
        </section>
        <section className='currentSpot_map'>
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

export default CurrentSpot