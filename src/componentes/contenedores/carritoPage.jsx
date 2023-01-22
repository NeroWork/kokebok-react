import CancelIcon from '../../assets/Fondo.png';
import TrashIcon from '../../assets/trashicon.png'

const CarritoPage = () => {
    return(
        <main className="main">
            <div className="main__div1__menu">
                <h1 className="main__div1__h1">Carrito</h1>
            </div>
            <div className="main__div2">
                <div className="main__div2__divCarrito">
                    <h2 className="carrito__h2">Carrito</h2>
                    <div className="container-fluid g-0 container-carrito">
                        <div className='row divCarrito__divProductos align-items-center g-0 justify-content-center'>
                            <div className="producto__nombre align-items-center col-6 text-start">
                                <p>Nombre del Producto</p>
                            </div>
                            <div className="col-2">
                                <div className="producto__precio1 text-center">
                                    <p className='mb-0'>Cantidad</p>
                                </div>
                            </div>
                            <div className='col-2 text-center'>
                                <div className='producto__precio'>
                                    <p>Precio</p>
                                </div>
                            </div>
                            <div className="producto__x col-2 text-center">
                                <p className='mb-0'>Cancelar</p>
                            </div>
                        </div>
                        <div className="row divCarrito__divProductos align-items-center g-0">
                            <div className="producto__nombre align-items-center col-6 text-start">
                                <p>Vacio</p>
                            </div>
                            <div className="col-2 text-center">
                                <div className="producto__precio1">
                                    <p className='mb-0'>0</p>
                                </div>
                            </div>
                            <div className='col-2 text-center'>
                                <div className='producto__precio'>
                                    <p>$0</p>
                                </div>
                            </div>
                            <div className="producto__x col-2 text-center">
                                <img className='cartCancelImg' src={CancelIcon} alt="imagen de cancelar" />
                            </div>
                        </div>
                        <div className="row carrito__divfinal g-0 align-items-center">
                            <div className="col d-flex justify-content-start p-0">
                                <img className='cartTrashImg ms-3' src={TrashIcon} alt="imagen de limpiar busqueda" />
                            </div>
                            <div className="col p-0">
                                <p className="carrito__total mb-0">Total: $0</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default CarritoPage;