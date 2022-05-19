//== import
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// npm

// local

// style
import './user.scss';

function User({id, firstname, lastname, role}) {
  // console.log(firstname);
  return (
    <div className="userCard" key={id}>
      <div className="userCard_identity">
        {/* <img src='' alt='' className="userCard-identity_img" /> */}
        <p className="userCard-identity_name">{`${firstname} ${lastname}`}</p>
      </div>
      <div className="userCard_config">
        <p className="userCard-config_role">{role}</p>
        <div className="userCard-config-btn" >
          <Link to={`/utilisateur/${id}`}><button className="userCard-config_update userCard-config_btn"> Afficher</button></Link>
          <button className="userCard-config_delete userCard-config_btn">Supprimer</button>
        </div>
      </div>
    </div>
  )
};

User.propTypes = {
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
}

export default User;