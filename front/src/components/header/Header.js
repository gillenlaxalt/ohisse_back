// eslint-disable-next-line

// == import 

// npm
import { useSelector, useDispatch } from 'react-redux';

// local
import logo from '../../img/logo-complet-bleu.png';
import outLogo from '../../img/logo-simple-bleu.png'
import { handleMenu, handleDark } from '../../actions/settings';
// style
import './header.scss';


function Header() {
  
  const dispatch = useDispatch();
   
  const handleMenuActif = () => {
    dispatch(handleMenu());
  };
  const handleDarkActiv = () => {
    dispatch(handleDark());
  };
  const onMenu = useSelector((state) => state.settings.burgerMenu);
  const onDark = useSelector((state) => state.settings.darkMode);
  const isLogged = useSelector((state) => state.settings.isLogged) ;
  // console.log(isLogged);

  return (
  <section className= { onDark ? 'header dark' : 'header'}>
    <img src={logo} alt='logo' className= 'header_logo'/>
    <p className='header_backOffice-txt'> Back office</p>

    <span
    className='header-burger'
    onClick={handleMenuActif}
    >
    </span>
    {isLogged && (
    
      <div className={onMenu ? 'header_content-menu menu-actif'  : 'header_content-menu'}>
        <span className='header-menu-darkMode'>
          <ul className='header_menu'>
            <li className='header-menu_spots menu-txt'><a href='#'>Spots</a></li>
            <li className='header-menu_users menu-txt'><a href='#'>Users</a></li>
          </ul>
          <span className='header-content-menu_dark-mode'>
          <button
          className={onDark ? 'header-burger_btn dark-actif'  : 'header-burger_btn'}
          onClick={handleDarkActiv}
          >

          </button>
          </span>

        </span>
        <span className='header-content-menu_log'>
          <img
            src={outLogo}
            alt='déconnexion'
            className='menu-log_img'
          />
          <p className='menu-log_txt menu-txt'>Déconnexion</p>
        </span>
      </div>
    )}

  </section>
  );
}

export default Header