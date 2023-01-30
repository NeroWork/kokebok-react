import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ListGroup } from "react-bootstrap";
import { useState } from 'react';
import { Card } from "react-bootstrap";

const ItemCont = ({stock, addOn}) => {
    const [cont, setCont] = useState(0);

    const sumarContador = () =>{
        if( (cont) < stock)
        setCont(cont + 1);
    }

    const restarContador = () =>{
        if((cont) > 0){
            setCont(cont - 1);
        }

    }

    const handleAddOn = () => {
        if (stock > 0 && cont > 0){
            addOn(cont);
        }
    }

    return(
        <ListGroup.Item className="card__item__detail">
            <InputGroup>
                <Button className="botonAddItem" onClick={restarContador}>-</Button>
                <Form.Control
                className="inputItemDetail text-center"
                value={cont}
                type="number"
                readOnly
                />
                <Button className="botonAddItem" onClick={sumarContador}>+</Button>
            </InputGroup>
            <Card.Body className="card__body">
                <Card.Link href="#"  onClick={handleAddOn}>Comprar!</Card.Link>
            </Card.Body>
        </ListGroup.Item>
    )
}

export default ItemCont;