// == import

// npm
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";


// local
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../components/Home/Home";
import Login from "../components/login/Login";
import Users from "../components/users/Users";
import Spots from "../components/spots/Spots";
import ChoiceAddPlace from "../components/ChoiceAddPlace/ChoiceAddPlace";
import CurrentUser from "../components/CurrentUser/CurrentUser";
import CurrentSpot from "../components/CurrentSpot/CurrentSpot";
import AddSpot from "../components/AddSpot/AddSpot";
import AddUser from "../components/AddUser/AddUser";
import Comments from "../components/Comments/Comments";

// style


function App() {

  const isLogged= useSelector((state) => state.settings.isLogged)

  const onDark = useSelector((state) => state.settings.darkMode);
  // console.log(onDark)
  return (
    <div className='app' >
      <Header />

      {!isLogged && (
        <Login />
      )}

      {isLogged && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tous-les-utilisateurs" element={<Users />} />
          <Route path="/tous-les-spots" element={<Spots />} />
          <Route path="/choix-type-spot" element={<ChoiceAddPlace />} />
          <Route path="/utilisateur/:id" element={<CurrentUser />} />
          <Route path="/spot/:id" element={<CurrentSpot />} />
          <Route path="/ajout-spot/:slug" element={<AddSpot />} />
          <Route path="/ajout-utilisateur" element={<AddUser />} />
          <Route path="/tous-les-commentaires" element={<Comments />} />
          
        </Routes>        
        
      )}
      {/* <CurrentUser /> */}
      <Footer />

    </div>
  )
}

export default App;