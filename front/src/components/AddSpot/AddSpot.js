// = import 

// npm
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addInputSpot, addSpot, recoverLatLng } from '../../actions/spots';

// local
import ohisseIcon from './icon';

// style
import './addSpot.scss'

function AddSpot() {

  const dispatch = useDispatch();
  const locality = useParams()
  console.log((locality));
  // const types =locality.slug;
  // console.log(types);
  const isOutdoor = locality.slug === 'Spot';
  console.log(isOutdoor);
  // this way allow to use a console.log
  const handleChangeInput = (value, name) => {
    // console.log('bonjour');
    (
      dispatch(addInputSpot(value, name))
    )
  }

  useEffect(() => {
    dispatch(addInputSpot(locality.slug, 'type'));
  }, []);

  function handleAddSpotSubmit(evt) {
    evt.preventDefault()
    dispatch(addSpot())
  }

  function HandleClickMap() {
    useMapEvents({
      click(event) {
        console.log(event.latlng);
        dispatch(recoverLatLng(event.latlng));
        
      },
    });
    return null;
  }

  

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


  // controlled field in read from state
  const name = useSelector((state) => state.spots.addSpot.name);
  const number = useSelector((state) => state.spots.addSpot.number);
  const street = useSelector((state) => state.spots.addSpot.street);
  const zipcode = useSelector((state) => state.spots.addSpot.zipcode);
  const city = useSelector((state) => state.spots.addSpot.city);
  const country = useSelector((state) => state.spots.addSpot.country);
  const type = useSelector((state) => state.spots.addSpot.type);
  const rock_type = useSelector((state) => state.spots.addSpot.rock_type);
  const discipline = useSelector((state) => state.spots.addSpot.discipline)
  const latitude = useSelector((state) => state.spots.addSpot.latitude)
  const longitude = useSelector((state) => state.spots.addSpot.longitude)
  const min_difficulty = useSelector((state) => state.spots.addSpot.min_difficulty)
  const max_difficulty = useSelector((state) => state.spots.addSpot.max_difficulty)
  const various = useSelector((state) => state.spots.addSpot.various)
  const reputation = useSelector((state) => state.spots.addSpot.reputation)
  const picture = useSelector((state) => state.spots.addSpot.picture)

  const value = (element) => element === min_difficulty;

  console.log(name, number);
  return (
    <section className='currentSpot'>
      <section className='currentSpot_info'>
        <h1 className='currentSpot-info_h1'>Ajoute un spot</h1>
        <form className='currentSpot-info_form'>
          <div className='info-form_img-url form_flex-div'>
            <span className='info-form_url'>
              <label htmlFor='spot' className='info-form-url'>Nom du spot</label>
              <input
                type='text'
                name='spot'
                value={name}
                onChange={(evt) => handleChangeInput(evt.target.value, 'name')}
              ></input>
              <label htmlFor='url'>URL de l'image</label>
              <input
                type='url'
                name='url'
                value={picture}
                onChange={(evt) => handleChangeInput(evt.target.value, 'picture')}
              ></input>
            </span>
          </div>
          <div className='info-form_num-street form_flex-div'>
            <span className='form_flex-span flex-span-margin-right'>
              <label htmlFor='number' className='info-form-num'>Numéro</label>
              <input
                type='text'
                name='number'
                value={number}
                onChange={(evt) => handleChangeInput(evt.target.value, 'number')}
              ></input>
            </span>
            <span className='info-form-street form_flex-span'>
              <label htmlFor='street' className='info-form-street'>Rue</label>
              <input
                type='text'
                name='street'
                value={street}
                onChange={(evt) => handleChangeInput(evt.target.value, 'street')}
              ></input>
            </span>
          </div>
          <div className='info-form_zip-city form_flex-div'>
            <span className='form_flex-span flex-span-margin-right'>
              <label htmlFor='zipcode' className='info-form-zip'>Code Postal</label>
              <input
                type='number'
                name='zipcode'
                value={zipcode}
                onChange={(evt) => handleChangeInput(evt.target.value, 'zipcode')}
              ></input>
            </span>
            <span className='form_flex-span'>
              <label htmlFor='city' className='info-form-city'>Ville</label>
              <input
                type='text'
                name='city'
                value={city}
                onChange={(evt) => handleChangeInput(evt.target.value, 'city')}
              ></input>
            </span>
          </div>
          <div className='info-form_country-long-lat form_flex-div'>
            <span className='form_flex-span flex-span-margin-right'>
              <label htmlFor='country' className='info-form-country'>Pays</label>
              <input
                type='text'
                name='country'
                value={country}
                onChange={(evt) => handleChangeInput(evt.target.value, 'country')}
              ></input>
            </span>

            <span className='form_flex-span flex-span-margin-right'>
              <label htmlFor='longitude' className='info-form-long'>Longitude</label>
              <input
                type='text'
                name='longitude'
                value={longitude}
                readOnly
                // onChange={(evt) => handleChangeInput(evt.target.value, 'longitude')}
                placeholder='cliquez sur la map'
              ></input>
            </span>
            <span className='form_flex-span'>
              <label htmlFor='latitude' className='info-form-lat'>Latitude</label>
              <input
                type='text'
                name='latitude'
                value={latitude}
                readOnly
                // onChange={(evt) => handleChangeInput(evt.target.value, 'latitude')}
                placeholder='cliquez sur la map'
              ></input>
            </span>

          </div>
          <div className='info-form_disc-type-rep form_flex-div'>
            <label htmlFor='discipline'>Quelle(s) discipline(s) dans cette salle</label>
            <select
              name='discipline'
              value={discipline}
              onChange={(evt) => handleChangeInput(evt.target.value, 'discipline')}
            >
              <option value=""></option>
              <option value='Bloc'>Bloc</option>
              <option value='Voie'>Voie</option>
              <option value='Bloc/Voie'>Les deux</option>
            </select>
            <span className='form_flex-span'>
              <label htmlFor='type' >Type</label>
              {isOutdoor && (
                <input
                  type='text'
                  name='type'
                  value='Spot'
                  onChange={(evt) => handleChangeInput('Spot', 'type')}
                ></input>

              )}
              {!isOutdoor && (
                <input
                  type='text'
                  name='type'
                  value='Salle'
                  onChange={(evt) => handleChangeInput('Salle', 'type')}
                ></input>

              )}

              {isOutdoor && (
                <>
                  <label htmlFor='rock_type'>Type de roche</label>
                  <select
                    name='rock_type'
                    value={rock_type}
                    onChange={(evt) => handleChangeInput(evt.target.value, 'rock_type')}
                  >
                    <option value=""></option>
                    {
                      rocks.map((rock) => (
                        <option key={rock} value={rock}>{rock}</option>
                      ))
                    }
                  </select>
                </>
              )}
            </span>
            <label htmlFor='reputation'>Le niveau global de la salle</label>
            <select
              name='reputation'
              value={reputation}
              onChange={(evt) => handleChangeInput(evt.target.value, 'reputation')}
            >
              <option value=""></option>
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
                value={min_difficulty}
                onChange={(evt) => handleChangeInput(evt.target.value, 'min_difficulty')}
              >
                <option value=""></option>
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
                value={max_difficulty}
                onChange={(evt) => handleChangeInput(evt.target.value, 'max_difficulty')}
              >
                <option value=""></option>
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

            <label htmlFor='various' id='label-descrip'>Description</label>
            <input
              type='textarea'
              name='various'
              value={various}
              onChange={(evt) => handleChangeInput(evt.target.value, 'various')}
            ></input>

          </div>
          <div className='spot-form_btn'>
            <button
              onClick={handleAddSpotSubmit}
              type='submit'
              className="spot-form_update spot-form-btn"
            >Ajouter</button>
          </div>
        </form>

      </section>
      <section className='currentSpot_map' >
        <MapContainer center={[47, 2]} zoom={5} scrollWheelZoom>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <Marker position={[47, 2]}> */}
          <HandleClickMap />
          <Marker
          position={[latitude, longitude]}
          icon={ohisseIcon}
          
        />
        
          {/* </Marker> */}
        </MapContainer>

      </section>

    </section>
  )
}

export default AddSpot