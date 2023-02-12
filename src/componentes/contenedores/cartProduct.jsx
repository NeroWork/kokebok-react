import { useContext } from 'react';
import CancelIcon from '../../assets/Fondo.png';
import { CartContext } from '../../contextos/cartContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const CartProduct = ({nombre, cantidad, precioIndividual, contadorCart, SetContadorCart, id}) => {
    const {eliminarDelCarro} = useContext(CartContext);

    //Cuestiones de Swall
    const MySwall = withReactContent(Swal);
    const alertEliminarProducto = () => {
        MySwall.fire({
            title: "Desea eliminar el producto?",
            icon: "question",
            iconColor: "#4f2034",
            color: "#4F2034",
            showCancelButton: true,
            customClass: {
                popup: "sweetBackgroundColor",
                title: "sweetLighterFont",
                confirmButton: "sweetButton"
            },
            confirmButtonColor: "#4f2034",
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
    
        }).then( (QuiereLimpiar) => {
            if(QuiereLimpiar.isConfirmed){
    
                Swal.fire({
                    title: "Producto eliminado",
                    icon: "success",
                    iconColor: "#7cb352",
                    color: "#4F2034",
                    customClass: {
                        popup: "sweetBackgroundColor",
                        title: "sweetLighterFont",
                        confirmButton: "sweetButton"
                    },
                    confirmButtonColor: "#4f2034",
                    confirmButtonText: "Aceptar",
                })
                removerProducto();
            }
        })
    }

    const removerProducto = () => {
        SetContadorCart(contadorCart - cantidad);
        eliminarDelCarro(id);
    }

    return(
        <div className="row divCarrito__divProductos g-0">
            <div className="producto__nombre col-6 text-start">
                <div className="d-flex h-100 text-center align-items-center">
                    <p>{nombre}</p>
                </div>
            </div>
            <div className="col-2 text-center d-flex justify-content-center producto__precio1">
                <div className="d-flex h-100 text-center align-items-center">
                    <p className='mb-0'>{cantidad}</p>
                </div>
            </div>
            <div className='text-center producto__precio d-flex justify-content-center col-2'>
                <div className="d-flex h-100 text-center align-items-center">
                    <p>${precioIndividual}</p>
                </div>
            </div>
            <div className="producto__x col-2 d-flex justify-content-center text-center">
                {
                    (nombre === "Vacío")
                    ?
                        <div className="d-flex h-100 text-center align-items-center">
                            <img className='cartCancelImg' src={CancelIcon} alt="imagen de cancelar" />
                        </div>
                    :
                        <div className="d-flex h-100 text-center align-items-center">
                            <img className='cartCancelImg' src={CancelIcon} alt="imagen de cancelar" onClick={alertEliminarProducto} />
                        </div>
                }
            </div>
        </div>
    )
}

export default CartProduct;