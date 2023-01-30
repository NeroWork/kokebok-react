import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductosFetch } from "../../assets/moc";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import ItemCont from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../../contextos/cartContext";

const ItemDetailContainer = ({contadorCart, SetContadorCart}) =>{
    const {idItem} = useParams();
    const [productos, setProductos] = useState({});
    const { handleSetCartList} = useContext(CartContext);

    useEffect(() => {
        ProductosFetch().then(respuesta => {
            setProductos(respuesta.find(item => item.id === idItem));
        }).catch(err => console.log(err));
    },[idItem])

    const addOn = (contProducto) => {
        SetContadorCart(contadorCart + contProducto);
        handleSetCartList({...productos, cantidad: contProducto});
    }

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
                    <ItemCont stock={productos.stock} addOn={addOn}></ItemCont>
                </ListGroup>
            </Card>
        </div>
    )
}

export default ItemDetailContainer;