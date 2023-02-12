import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarritoPage from './componentes/contenedores/carritoPage';
import Galeria from './componentes/contenedores/galeria';
import NavBar from './componentes/navBar/navBar';
import Footer from './componentes/footer/footer';
import ItemDetailContainer from './componentes/contenedores/itemDetailContainer';
import { CartContextProvider } from './contextos/cartContext';

function App() {
  const [contadorCart, SetContadorCart] = useState(0);


  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar contadorCart={contadorCart}></NavBar>
        <Routes>
          <Route path='/' element={<Galeria></Galeria>}></Route>
          <Route path='/item/:idItem' element={<ItemDetailContainer contadorCart={contadorCart} SetContadorCart={SetContadorCart}></ItemDetailContainer>}></Route>
          <Route path='/category/:idCategory' element={<Galeria></Galeria>}></Route>
          <Route path='/cart' element={<CarritoPage contadorCart={contadorCart} SetContadorCart={SetContadorCart}></CarritoPage>}></Route>
          <Route path='*' element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
