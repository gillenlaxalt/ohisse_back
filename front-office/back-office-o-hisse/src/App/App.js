// == import
import { useSelector } from "react-redux";
// npm

// local
import Header from "../components/header/Header";

// style


function App() {

  const onDark = useSelector((state) => state.settings.darkMode);
  console.log(onDark)
  return (
    <div className='app' >
      <Header />
    </div>
  )
}

export default App;