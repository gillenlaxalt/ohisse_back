// == import 
import PropTypes from 'prop-types';
// npm
import { Link } from 'react-router-dom'

// local
// import defaultImage from '../../../img/logo-simple-bleu.png'

// style
import './spot.scss';

function Spot( {id, name, city, picture} )
{
  return(
    <div className="spotCard" key={id}>
      <div className="spotCard_identity">
        <img src={`${picture}`} alt='logo' className="spotCard-identity_img" />
        <p className="spotCard-identity_name">{`${name}`}</p>
        <p className="spotCard-identity_city">{`${city}`}</p>
      </div>
        <div className="spotCard-config-btn" >
          <Link to={`/spot/${id}`} >
          <button className="spotCard-config_update spotCard-config_btn">
            Afficher</button>
          </Link>
          <button className="spotCard-config_delete spotCard-config_btn">Supprimer</button>
        </div>
    </div>
  )
};

Spot.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  picture: PropTypes.string,
}

// Spot.defaultProps = {
//   picture: defaultImage,
// };


export default Spot;