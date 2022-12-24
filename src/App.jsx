import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContenedorHome from './componentes/contenedores/homeContainer'
import NavBar from './componentes/navBar/navBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <div className="main__div1">
        <ContenedorHome greeting="Kokebok"></ContenedorHome>
      </div>
    </>

  )
}

export default App
