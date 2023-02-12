import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    //Elimina un producto del carrito
    const eliminarDelCarro = (productoAEliminar) => {
        let index = cartList.findIndex((elem) => elem.id === productoAEliminar);
        let auxArray = cartList;
        auxArray.splice(index, 1);
        setCartList([...Array]);
    }

    //Gestiona distintos cambios en el carrito
    const handleSetCartList = (productoNuevo) => {
        //Uso esta señal para limpiar el carrito
        if( productoNuevo === 0){
            setCartList([]);
        } else {
            //Sino, debo agregar un producto
            let encontrado = false;
            for(const i of cartList){
                if(i.id === productoNuevo.id){
                    //Si lo encuentro dentro del carrito agrego la cantidad correspondiente
                    encontrado = true;
                    i.cantidad = i.cantidad + productoNuevo.cantidad;
                    setCartList([...cartList]);
                }
            }
            
            //Si no lo encuentro lo agrego por primera vez
            if(!encontrado){
                setCartList([...cartList, productoNuevo]);
            }
        }
    }

    return(
        <CartContext.Provider value={{
            cartList,
            handleSetCartList,
            eliminarDelCarro
        }}>
            {children}
        </CartContext.Provider>
    )
}