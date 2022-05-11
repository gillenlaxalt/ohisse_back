// == import

// npm
import { useSelector } from "react-redux";


// local
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer"
import Login from "../components/login/Login";
import Users from "../components/users/Users";

// style


function App() {

  const isLogged= useSelector((state) => state.settings.isLogged)

  const onDark = useSelector((state) => state.settings.darkMode);
  console.log(onDark)
  return (
    <div className='app' >
      <Header />
      {!isLogged && (
        <Login />
      )}
      <Users />
      <Footer />

    </div>
  )
}

export default App;