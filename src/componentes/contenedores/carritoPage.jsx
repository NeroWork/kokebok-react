import TableTitle from './cartTableTitle';
import CartProduct from './cartProduct';
import TableFooter from './cartTableFooter';
import { CartContext } from '../../contextos/cartContext';
import { useContext, useState } from 'react';
import { addDoc, collection, getFirestore, updateDoc, doc } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const CarritoPage = ({contadorCart, SetContadorCart}) => {
    const {cartList, handleSetCartList} = useContext(CartContext);
    const [validated, setValidated] = useState(false);
    const [orderId, setOrderId] = useState("");
    const [dataForm, setDataForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        emailConfirm: ""
    })

    //Contenido de Swall
    const MySwall = withReactContent(Swal);
    const alertaErrorInput = () => {
        MySwall.fire({
            text: `Algun campo no es correcto`,
            color: "#fff1e1",
            icon: "error",
            iconColor: "#fff1e1",
            toast: true,
            position: "bottom-right",
            showConfirmButton: false,
            timer: 2000,
            customClass: {
                popup: "sweetToastColor",
            }
        })
    }
    const alertaExitoInput = () => {
        MySwall.fire({
            text: `Orden enviada`,
            color: "#fff1e1",
            icon: "success",
            iconColor: "#fff1e1",
            toast: true,
            position: "bottom-right",
            showConfirmButton: false,
            timer: 3000,
            customClass: {
                popup: "sweetToastColor",
            }
        })
    }

    const eliminarProductos = () => {
        handleSetCartList(0);
        SetContadorCart(0);
    }

    //Se encarga de verificar campos y validarlos
    const handleSubmit = () => {
        let nombreInput = document.forms["formulario1"]["nombre"].value;
        let emailInput = document.forms["formulario1"]["email"].value;
        let emailConfirmInput = document.forms["formulario1"]["emailConfirm"].value;
        let telefonoInput = document.forms["formulario1"]["telefono"].value;

        if(nombreInput !== "" && emailInput !== "" && emailInput.includes("@") && emailConfirmInput === emailInput && telefonoInput !== undefined && telefonoInput !== ""){
            setValidated(true);
        } else {
            setValidated(false);
        }
    };

    //Se encarga del procesado de la orden
    const enviarOrder = () => {
        if(validated && cartList.length>0){
            //consigo el total
            let precioTotal = 0;
            for(const i of cartList){
                precioTotal = precioTotal + (i.precio * i.cantidad);
            }

            //creo la orden
            const order = {};

            order.buyer = {name: dataForm.nombre, phone: dataForm.telefono, email: dataForm.email};
            order.items = cartList.map(({id, nombre, precio, cantidad}) => ({nombre, precio, id, cantidad}));
            order.total =  precioTotal;

            //Subo la orden a firestore y me guardo el id
            const db = getFirestore();
            const prodCollectionRef = collection(db, "orders");
            addDoc(prodCollectionRef, order).then((respuesta) => {setOrderId(respuesta.id)}).catch(err => console.log(err));

            //actualizo los stocks
            for(const prod of cartList){
                const documentAux = doc(db, "productos", prod.id);
                updateDoc(documentAux, {
                    stock: (prod.stock - prod.cantidad)
                }).then().catch(err => console.log(err));
            }

            eliminarProductos();
            alertaExitoInput();
            // console.log(order);
        } else {
            alertaErrorInput();
        }
    } 

    //Gestiona los cambios de los campos del formulario
    const myOnChange = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        })
        handleSubmit();
    }

    return(
        <main className="main">
            <div className="main__div1__menu">
                <h1 className="main__div1__h1">Carrito</h1>
            </div>
            <div className="main__div2">
                <div className="main__div2__divCarrito">
                    <h2 className="carrito__h2">Carrito</h2>
                    <div className="container-fluid g-0 container-carrito">
                        <TableTitle></TableTitle>
                        {
                            //Si hay productos en la cartlist los muestro y sino muestro un placeholder
                            (cartList.length === 0)
                            ?
                            <CartProduct nombre="Vacío" cantidad="0" contadorCart={contadorCart} SetContadorCart={SetContadorCart} precioIndividual="0"></CartProduct>
                            :
                            cartList.map( producto => <CartProduct key={producto.id} id={producto.id} contadorCart={contadorCart} SetContadorCart={SetContadorCart} nombre={producto.nombre} cantidad={producto.cantidad} precioIndividual={producto.precio * producto.cantidad}></CartProduct>
                            )
                        }
                        {
                            //Similar a más arriba
                            (cartList.length === 0)
                            ? <TableFooter vacio = {true}  SetContadorCart={SetContadorCart}></TableFooter>
                            : <TableFooter vacio = {false}  SetContadorCart={SetContadorCart}></TableFooter>
                        }
                    </div>
                    {
                        //Si existe un id de la orden entonces lo muestra junto al boton
                        //para continuar con la compra, sino, muestra el formulario
                        //para generar una orden
                        (orderId === "") ?
                        <Form className="my-5" name='formulario1'>
                            <Row>
                                <Form.Group as={Col} className="my-2" md="6">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        name='nombre'
                                        value={dataForm.nombre}
                                        type="text"
                                        placeholder="Federico"
                                        onChange={myOnChange}
                                        className="formcontrols"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} className="my-2" md="6">
                                    <Form.Label>Correo Electronico</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name='email'
                                        value={dataForm.email}
                                        onChange={myOnChange}
                                        placeholder="CorreoElectronico@gmail.com"
                                        className="formcontrols"
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" className="my-2">
                                    <Form.Label>Confirmar Correo Electronico</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name='emailConfirm'
                                        onChange={myOnChange}
                                        value={dataForm.emailConfirm}
                                        placeholder="CorreoElectronico@gmail.com"
                                        className="formcontrols"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" className="my-2">
                                    <Form.Label>Numero de Telefono</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        onChange={myOnChange}
                                        name='telefono'
                                        value={dataForm.telefono}
                                        placeholder="Numero de Telefono"
                                        className="formcontrols"
                                    />
                                </Form.Group>
                            </Row>
                            <Button className='botonSeguirComprando' onClick={enviarOrder}>Enviar Orden</Button>
                        </Form>
                        :
                        <div className='d-flex justify-content-center flex-column align-items-center'>
                            <h3 className='my-5'>Id de orden: {orderId}</h3>
                            <div className='w-min nav-link-button'>
                                <Link className='nav-link-button2' to = '/'>Seguir Comprando</Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </main>
    )
}

export default CarritoPage;