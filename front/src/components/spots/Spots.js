// == import 

// npm
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// local
import { changeField, fetchSpots } from '../../actions/spots';
import Spot from './spot/Spot';

import search_symbol from '../../img/icons/search.png';
import addMap from '../../img/icons/addLocation.png';
// style
import './spots.scss';

function Spots()
{
  const dispatch = useDispatch();
  const searchValue= useSelector((state) => state.spots.search.inputValue);
  const handleChangeField =(value, name) => (
    dispatch(changeField(value, name))
  );

  const spotsData = useSelector((state) => state.spots.spotsList);
  console.log(spotsData);
  useEffect(() => {
    // load all spots from API
    dispatch(fetchSpots());
  }, []);

  return(
    <section className='allUser'>
      <h1 className='allSpots_h1'>Tous les spots</h1>
      <form className='allSpots_form'>
        <span className='allSpots-form_span-input'>
        <img
        src={search_symbol}
        alt='icone de recher'
        className='form_span-input_img'
        />
        <input
        type='search'
        className='form_span-input_input'
        placeholder='Rechercher'
        value={searchValue}
        onChange={(evt)=> handleChangeField(evt.target.value, 'search.inputValue')}
        />
        </span>
        <img
        src={addMap}
        alt='icone ajouter un nouvel utilisateur'
        className='allSpots-form_img add_spot'
        />
      </form>
      {spotsData.map((item) => {
        return (
          <Spot {...item} key={item.id} />
        )
        })}
      </section>
  )
};

export default Spots;