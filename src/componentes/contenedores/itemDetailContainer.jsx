import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import ItemCont from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../../contextos/cartContext";
import Loader from "./loader";
import { fireIndividualFetch } from "../../assets/firebase";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ItemDetailContainer = ({contadorCart, SetContadorCart}) =>{
    const {idItem} = useParams();
    const [productos, setProductos] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [mensajeError, setMensajeError] = useState(null);
    const { handleSetCartList} = useContext(CartContext);
    const [isInCart,setIsInCart] = useState(false);

    //Gestiona la db
    useEffect(() => {
        fireIndividualFetch(idItem).then(respuesta => {
            setProductos(respuesta);
        }).catch(err => setMensajeError(err.message)).finally(() => {setIsLoading(false)});
    },[idItem])

    //Administra el agregado al carrito
    const addOn = (contProducto) => {
        setIsInCart(true);
        SetContadorCart(contadorCart + contProducto);
        handleSetCartList({...productos, cantidad: contProducto});
    }

    //Si algo falla se mostrara un mensaje alegorico
    if(mensajeError){
        return(
            <div className="main__div1__detalle__item">
                <Container fluid>
                    <Row className="m-3">
                        <div className="d-flex justify-content-center">
                            <h2 className="h2-cargando">{mensajeError}</h2>
                        </div>
                    </Row>
                    <Row className="m-3">
                        <div className="d-flex justify-content-center">
                            <Link to='/'>
                                <button className="botonSeguirComprando">Seguir Comprando</button>
                            </Link>
                        </div>
                    </Row>
                </Container>

            </div>
        )
    }

    //Si necesita tiempo para cargar se mostrara un loading
    if(isLoading){
        return(
            <div className="main__div1__detalle__item">
                <Loader colorAux="#4F2034"></Loader>
            </div>
        )

    }

    //Happy Path
    return(
        <div className="main__div1__detalle__item">
            <Card className="card__item__detail" style={{ width: '18rem'}}>
                <Card.Img variant="top" src={productos.imagen} />
                <Card.Body className="card__body">
                    <Card.Title>{productos.nombre}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush card__item__detail">
                    <ListGroup.Item className="card__item__detail">Categoria: {productos.categoria}</ListGroup.Item>
                    <ListGroup.Item className="card__item__detail">Precio: ${productos.precio}</ListGroup.Item>
                    <ListGroup.Item className="card__item__detail">Stock: {productos.stock}</ListGroup.Item>
                    {
                        isInCart ?
                        <Link to='/cart'>
                            <ListGroup.Item className="card__item__detail">Terminar Compra</ListGroup.Item>
                        </Link>
                        :
                        <ItemCont stock={productos.stock} addOn={addOn}></ItemCont>
                    }

                </ListGroup>
            </Card>
        </div>
    )
}

export default ItemDetailContainer;