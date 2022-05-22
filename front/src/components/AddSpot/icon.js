/* eslint-disable global-require */
import L from 'leaflet';
import iconUrl from '../../img/logo-simple-bleu.png'

const ohisseIcon = new L.Icon({
  iconUrl: require(iconUrl),
  iconSize: [25],
  iconAnchor: [13, 30],
  popupAnchor: [0, -30],
  className: 'leaflet-div-icon',
});

export default ohisseIcon;