// == import

// npm
import { useSelector } from 'react-redux';
// local

// style
import './footer.scss';

function Footer() {

  const isLogged = useSelector((state) => state.settings.isLogged) ;

  return (
    <section className="footer">
      <ul className="footer_txt">
        <li className="footer-txt_link-site"><a href='#'>O'Hisse : le site</a></li>
        {isLogged && (
        <li className="footer-txt_link-map-site"><a href='#'>Plan du site</a></li>
        )}
      </ul>
      <p className="footer_copyright">Proudly made In France @2022 - ohisse.fr</p>
    </section>
  )
};

export default Footer