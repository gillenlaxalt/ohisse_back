// == import

// npm
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";


// local
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer"
import Login from "../components/login/Login";
import Users from "../components/users/Users";
import Spots from "../components/spots/Spots";
import ChoiceAddPlace from "../components/ChoiceAddPlace/ChoiceAddPlace";
import CurrentUser from "../components/CurrentUser/CurrentUser";
import CurrentSpot from "../components/CurrentSpot/CurrentSpot";
import AddSpot from "../components/AddSpot/AddSpot";

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
          <Route path="/" />
          <Route path="/tous-les-utilisateurs" element={<Users />} />
          <Route path="/tous-les-spots" element={<Spots />} />
          <Route path="/choix-type-spot" element={<ChoiceAddPlace />} />
          <Route path="/utilisateur/:id" element={<CurrentUser />} />
          <Route path="/spot/:id" element={<CurrentSpot />} />
          <Route path="/ajout-spot/:slug" element={<AddSpot />} />

        </Routes>        
        
      )}
      {/* <CurrentUser /> */}
      <Footer />

    </div>
  )
}

export default App;