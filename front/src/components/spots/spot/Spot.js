// == import 

// npm

// local

// style
import './spot.scss';

function Spot()
{
  return(
    <div className="spotCard">
      <div className="spotCard_identity">
        <img src='' alt='' className="spotCard-identity_img" />
        <p className="spotCard-identity_name">nom du spot</p>
        <p className="spotCard-identity_city">ville</p>
      </div>
        <div className="spotCard-config-btn" >
          <button className="spotCard-config_update spotCard-config_btn">Modifier</button>
          <button className="spotCard-config_delete spotCard-config_btn">Supprimer</button>
        </div>
    </div>
  )
}

export default Spot;