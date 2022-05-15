//== import

// npm

// local

// style
import './user.scss';

function User() {
  return (
    <div className="userCard">
      <div className="userCard_identity">
        <img src='' alt='' className="userCard-identity_img" />
        <p className="userCard-identity_name">nom et prénom</p>
      </div>
      <div className="userCard_config">
        <p className="userCard-config_role">role</p>
        <div className="userCard-config-btn" >
          <button className="userCard-config_update userCard-config_btn">Modifier</button>
          <button className="userCard-config_delete userCard-config_btn">Supprimer</button>
        </div>
      </div>
    </div>
  )
};

export default User;