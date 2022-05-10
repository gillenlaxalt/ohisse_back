// == import

// npm
import { useSelector } from "react-redux";


// local
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer"
import Login from "../components/login/Login";

// style


function App() {

  const isLogged= useSelector((state) => state.settings.isLogged)

  const onDark = useSelector((state) => state.settings.darkMode);
  console.log(onDark)
  return (
    <div className='app' >
      <Header />
      <Footer />
      {isLogged && (
        <Login />
      )}

    </div>
  )
}

export default App;