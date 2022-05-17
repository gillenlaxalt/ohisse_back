// == import 
import PropTypes from 'prop-types';
// npm

// local

// style
import './spot.scss';

function Spot( {id, name, city, picture} )
{
  return(
    <div className="spotCard" key={id}>
      <div className="spotCard_identity">
        <img src={`${picture}`} alt='' className="spotCard-identity_img" />
        <p className="spotCard-identity_name">{`${name}`}</p>
        <p className="spotCard-identity_city">{`${city}`}</p>
      </div>
        <div className="spotCard-config-btn" >
          <button className="spotCard-config_update spotCard-config_btn">Afficher</button>
          <button className="spotCard-config_delete spotCard-config_btn">Supprimer</button>
        </div>
    </div>
  )
};

Spot.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
}


export default Spot;