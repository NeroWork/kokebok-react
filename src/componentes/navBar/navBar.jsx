import cartLogo from './../../assets/cartIcon.png';
import Galeria from '../contenedores/galeria';
import SobreNosotros from '../contenedores/sobreNosotros';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({contadorCart}) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
                <div className="container-fluid justify-content-lg-around">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse order-1 order-lg-0 noflexgrow" id="navbarNavAltMarkup">
                        <div className="navbar-nav justify-content-around maxwidth" >
                            <NavLink to="/category/vegano" className='nav-link-button align-self-start'>Vegano</NavLink>
                            <NavLink to="/category/celiaco" className='nav-link-button align-self-start'>Celiaco</NavLink>
                            {/* <button className='nav-link-button align-self-start' onClick={() => setPaginaActual(<SobreNosotros/>)}>Nosotros</button> */}
                            {/* <button className='nav-link-button align-self-start' onClick={() => setPaginaActual(<Galeria/>)}>Galeria</button> */}
                        </div>
                    </div>
                    <NavLink to="/" className="nav-link active navbar-brand m-0 p-0 order-0 order-lg-1">
                        <img className='navImgBrand' src="http://drive.google.com/uc?export=view&id=1wiHJe6M0j1TGLysYR5GBlI9Q82LNFBeN" alt="Logo Kokebok"/>
                    </NavLink>
                    {/* <a className="nav-link active navbar-brand m-0 p-0 order-0 order-lg-1" aria-current="page" href="index.html"></a> */}
                    <div className="collapse navbar-collapse order-2 order-lg-2 noflexgrow" id="navbarNavAltMarkup">
                        <div className="navbar-nav justify-content-around maxwidth">
                            <NavLink to="/category/oferta" className='nav-link-button my-auto align-self-start'>Oferta</NavLink>
                            <NavLink to="/cart" className='nav-link-button align-self-start'>
                                <div className='cart-container d-flex flex-row justify-content-center'>
                                    <img className='navCartIcon' src={cartLogo} alt="" />
                                    <div className='circulo d-flex justify-content-center align-items-center'>
                                        <p className='text-contadorCart m-0'>{contadorCart}</p>
                                    </div>
                                </div>
                            </NavLink>
                            {/* <a className="nav-link align-self-start" href="pages/contacto.html">Contacto</a> */}
                            {/* <a className="nav-link align-self-start" href="pages/menu.html">
                                <div className='cart-container d-flex flex-row justify-content-center'>
                                    <img className='navCartIcon' src={cartLogo} alt="" />
                                    <div className='circulo d-flex justify-content-center align-items-center'>
                                        <p className='text-contadorCart m-0'>{contadorCart}</p>
                                    </div>
                                </div>
                            </a> */}
                        </div>
                    </div>
            </div>
          </nav>
        </header>
        
    )
}

export default NavBar;