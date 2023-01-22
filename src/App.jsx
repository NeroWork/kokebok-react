import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarritoPage from './componentes/contenedores/carritoPage';
import Galeria from './componentes/contenedores/galeria';
import NavBar from './componentes/navBar/navBar';
import Footer from './componentes/footer/footer';
import ItemDetailContainer from './componentes/contenedores/itemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar contadorCart={0}></NavBar>
      <Routes>
        <Route path='/' element={<Galeria></Galeria>}></Route>
        <Route path='/item/:idItem' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        <Route path='/category/:idCategory' element={<Galeria></Galeria>}></Route>
        <Route path='/cart' element={<CarritoPage></CarritoPage>}></Route>

        <Route path='*' element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App;
