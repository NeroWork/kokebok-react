import { useContext } from 'react';
import CancelIcon from '../../assets/Fondo.png';
import { CartContext } from '../../contextos/cartContext';

const CartProduct = ({nombre, cantidad, precioIndividual, contadorCart, SetContadorCart, id}) => {
    const {eliminarDelCarro} = useContext(CartContext);

    const removerProducto = () => {
        SetContadorCart(contadorCart - cantidad);
        eliminarDelCarro(id);
    }

    return(
        <div className="row divCarrito__divProductos align-items-center g-0">
            <div className="producto__nombre align-items-center col-6 text-start">
                <p>{nombre}</p>
            </div>
            <div className="col-2 text-center">
                <div className="producto__precio1">
                    <p className='mb-0'>{cantidad}</p>
                </div>
            </div>
            <div className='col-2 text-center'>
                <div className='producto__precio'>
                    <p>${precioIndividual}</p>
                </div>
            </div>
            <div className="producto__x col-2 text-center">
                {
                    (nombre === "Vacío")
                    ? <img className='cartCancelImg' src={CancelIcon} alt="imagen de cancelar" />
                    : <img className='cartCancelImg' src={CancelIcon} alt="imagen de cancelar" onClick={removerProducto} />
                }
            </div>
        </div>
    )
}

export default CartProduct;