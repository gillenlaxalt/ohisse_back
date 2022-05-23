// import
import { Link } from 'react-router-dom';
// npm

// local
import logoUser from '../../img/icons/customer.png';
import logoSpot from '../../img/icons/carte.png';
import logocomment from '../../img/icons/comment.png';
// style
import './home.scss'

function Home() {
  return (
    <section className='home' >
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
    </section>

  );
}

export default Home