/* eslint-disable global-require */
import L from 'leaflet';
import iconUrl from '../../img/logo-simple-bleu.png'

import './addSpot.scss'

const ohisseIcon = new L.Icon({
  iconUrl: iconUrl,
  iconSize: [25, 33],
  iconAnchor: [13, 30],
  popupAnchor: [0, -30],
  className: 'leaflet-div-icon',
});

export default ohisseIcon;