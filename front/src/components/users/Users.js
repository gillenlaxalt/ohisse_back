// == import

// npm

// local
import User from './user/User'
// style
import './users.scss';

function AllUsers()
{
  return(
    <section className="allUser">
      <h1 className="allUser_h1">Tous les utilisateurs</h1>
      <form className="allUser_form">
        <img src='' alt=''  className="allUser-form_img"/>
        <input type='search'  className="allUser-form_input"/>
        <img src='' alt=''  className="allUser-form_img"/>
      </form>
      <User />
    </section>
  )
};

export default AllUsers;