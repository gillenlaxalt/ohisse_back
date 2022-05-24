// import
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
// npm

// local
import logoUser from '../../img/icons/customer.png';
import logoSpot from '../../img/icons/carte.png';
import logocomment from '../../img/icons/comment.png';
// style
import './home.scss'

function Home() {
  const nameAdmin = useSelector((state) => state.users.currentUser.firstname);
  console.log(nameAdmin);
  return (
    <section className='home' >
      <h2 className='home_welcome'>{`Bienvenue ${nameAdmin}` }</h2>
      <div className='home_div-link'>
        <Link to='/tous-les-utilisateurs'>
          <div className='home_user'>
            <img src={logoUser} alt='' className='home-img'/>
          </div>
        </Link>
        <Link to='/tous-les-spots'>
          <div className='home_spot'>
            <img src={logoSpot} alt='' className='home-img'/>
          </div>
        </Link>
        <Link to='/tous-les-commentaires'>
          <div className='home_comment'>
            <img src={logocomment} alt='' className='home-img'/>
          </div>
        </Link>
      </div>
    </section>

  );
}

export default Home