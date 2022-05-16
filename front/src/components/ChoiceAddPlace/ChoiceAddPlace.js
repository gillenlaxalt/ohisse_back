// == import 

// npm

// local

// style
import './choiceAddPlace.scss';

function ChoiceAddPlace() {
  return(
    <section className='choiceAddPlace'>
      <h1 className='choiceAddPlace_h1'>Interieur ou extérieur</h1>
      <div className='choiceAddPlace_div-choice'>
        <span className='div-choice_exterieur'>
          <h2 className='div-choice-exterieur_h2'>Spot extérieur</h2>
          <img src='' alt='' className='div-choice-exterieur_img' />
        </span>
        <span className='div-choice_interieur'>
          <h2 className='div-choice-interieur_h2'>Spot intérieur</h2>
          <img src='' alt='' className='div-choice-interieur_img' />
        </span>

      </div>
    </section>
  )
};

export default ChoiceAddPlace;