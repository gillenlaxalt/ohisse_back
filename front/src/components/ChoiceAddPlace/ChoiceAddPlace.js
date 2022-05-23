// == import 

// npm
import { NavLink } from 'react-router-dom';
// local

// style
import './choiceAddPlace.scss';

function ChoiceAddPlace() {

  const Salle = 'Salle';
  const Spot = 'Spot';

  return(
    <section className='choiceAddPlace'>
      <h1 className='choiceAddPlace_h1'>Interieur ou extérieur</h1>
      <div className='choiceAddPlace_div-choice'>
        <NavLink to={`/ajout-spot/${Spot}`}>
          <span className='div-choice_exterieur'>
            <h2 className='div-choice-exterieur_h2'>Spot extérieur</h2>
            <img src='https://www.cimalp.fr/blog/wp-content/uploads/2016/03/Verdon-Photo-Jan-Novak.jpg' alt='' className='div-choice-exterieur_img' />
          </span>
        </NavLink>
        <NavLink to={`/ajout-spot/${Salle}`}>
          <span className='div-choice_interieur'>
            <h2 className='div-choice-interieur_h2'>Spot intérieur</h2>
            <img src='https://lilleaddict.fr/wordpress/wp-content/uploads/2020/08/Arkose-salle-descalade-%C3%A0-Lille-centre-rue-des-postes.jpg' alt='' className='div-choice-interieur_img' />
          </span>
        </NavLink>

      </div>
    </section>
  )
};

export default ChoiceAddPlace;