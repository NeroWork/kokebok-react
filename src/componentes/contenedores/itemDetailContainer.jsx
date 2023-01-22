import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductosFetch } from "../../assets/moc";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

const ItemDetailContainer = () =>{
    const {idItem} = useParams();
    const [productos, setProductos] = useState({});

    useEffect(() => {
        ProductosFetch().then(respuesta => {
            setProductos(respuesta.find(item => item.id === idItem));
        }).catch(err => console.log(err));
    },[idItem])

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
                </ListGroup>
                <Card.Body className="card__body">
                    <Card.Link href="#">Comprar!</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetailContainer;