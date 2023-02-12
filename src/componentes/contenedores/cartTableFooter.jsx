import { useContext } from 'react';
import TrashIcon from '../../assets/trashicon.png'
import { CartContext } from '../../contextos/cartContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const TableFooter = ({vacio, SetContadorCart}) => {
    const {cartList, handleSetCartList} = useContext(CartContext);
    let precioTotal = 0;

    //Asuntos del swall
    const MySwall = withReactContent(Swal);
    const alertEliminarProducto = () => {
        MySwall.fire({
            title: "Desea limpiar el carrito?",
            icon: "question",
            iconColor: "#4f2034",
            color: "#4F2034",
            showCancelButton: true,
            customClass: {
                popup: "sweetBackgroundColor",
                title: "sweetLighterFont",
                confirmButton: "sweetButton",
                cancelButton: "sweetButton"
            },
            confirmButtonColor: "#4f2034",
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
    
        }).then( (QuiereLimpiar) => {
            if(QuiereLimpiar.isConfirmed){
                Swal.fire({
                    title: "Tu carrito ha sido limpiado",
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
                eliminarProductos();
            }
        })
    }

    //funcion auxiliar para calcular el precio
    //total de la lista de productos en el carro
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
                    <img className='cartTrashImg ms-3' src={TrashIcon} alt="imagen de limpiar busqueda" onClick={() => alertEliminarProducto()} />
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