import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const eliminarDelCarro = (productoAEliminar) => {
        let index = cartList.findIndex((elem) => elem.id === productoAEliminar);
        let auxArray = cartList;
        auxArray.splice(index, 1);
        setCartList([...Array]);
    }

    const handleSetCartList = (productoNuevo) => {
        if( productoNuevo === 0){
            setCartList([]);
        } else {
            let encontrado = false;
            for(const i of cartList){
                if(i.id === productoNuevo.id){
                    encontrado = true;
                    i.cantidad = i.cantidad + productoNuevo.cantidad;
                    setCartList([...cartList]);
                }
            }
    
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