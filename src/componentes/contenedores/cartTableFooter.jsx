import { useContext } from 'react';
import TrashIcon from '../../assets/trashicon.png'
import { CartContext } from '../../contextos/cartContext';

const TableFooter = ({vacio, SetContadorCart}) => {
    const {cartList, handleSetCartList} = useContext(CartContext);
    let precioTotal = 0;
    for(const i of cartList){
        precioTotal = precioTotal + (i.precio * i.cantidad);
    }

    const eliminarProductos = () => {
        handleSetCartList(0);
        SetContadorCart(0);
    }
    return(
        <div>
        {
            (vacio)
            ?
            <div className="row carrito__divfinal g-0 align-items-center">
                    <div className="col d-flex justify-content-start p-0">
                        <img className='cartTrashImg ms-3' src={TrashIcon} alt="imagen de limpiar busqueda"/>
                    </div>
                    <div className="col p-0">
                        <p className="carrito__total mb-0">Total: $0</p>
                    </div>
            </div>
            :
            <div className="row carrito__divfinal g-0 align-items-center">
                <div className="col d-flex justify-content-start p-0">
                    <img className='cartTrashImg ms-3' src={TrashIcon} alt="imagen de limpiar busqueda" onClick={() => eliminarProductos()} />
                </div>
                <div className="col p-0">
                    <p className="carrito__total mb-0">Total: ${precioTotal}</p>
                </div>
            </div>
        }
        </div>
    )
}

export default TableFooter;