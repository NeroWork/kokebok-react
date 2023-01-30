import TableTitle from './cartTableTitle';
import CartProduct from './cartProduct';
import TableFooter from './cartTableFooter';
import { CartContext } from '../../contextos/cartContext';
import { useContext } from 'react';

const CarritoPage = ({contadorCart, SetContadorCart}) => {
    const {cartList} = useContext(CartContext);

    return(
        <main className="main">
            <div className="main__div1__menu">
                <h1 className="main__div1__h1">Carrito</h1>
            </div>
            <div className="main__div2">
                <div className="main__div2__divCarrito">
                    <h2 className="carrito__h2" onClick={() => console.log(cartList)}>Carrito</h2>
                    <div className="container-fluid g-0 container-carrito">
                        <TableTitle></TableTitle>
                        {
                            (cartList.length === 0)
                            ?
                            <CartProduct nombre="Vacío" cantidad="0" contadorCart={contadorCart} SetContadorCart={SetContadorCart} precioIndividual="0"></CartProduct>
                            :
                            cartList.map( producto => <CartProduct key={producto.id} id={producto.id} contadorCart={contadorCart} SetContadorCart={SetContadorCart} nombre={producto.nombre} cantidad={producto.cantidad} precioIndividual={producto.precio * producto.cantidad}></CartProduct>
                            )
                        }
                        {
                            (cartList.length === 0)
                            ? <TableFooter vacio = {true}  SetContadorCart={SetContadorCart}></TableFooter>
                            : <TableFooter vacio = {false}  SetContadorCart={SetContadorCart}></TableFooter>
                        }
                    </div>

                </div>
            </div>
        </main>
    )
}

export default CarritoPage;