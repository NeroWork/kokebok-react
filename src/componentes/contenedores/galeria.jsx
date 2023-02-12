import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "./loader";
import { fireFetch } from "../../assets/firebase";
import { firePersonalizadoFetch } from "../../assets/firebase";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const Galeria = () => {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [mensajeError, setMensajeError] = useState(null);
    const {idCategory} = useParams();

    //Funcion auxiliar para no repetir codigo
    const auxFirestoreCall = (idCat, simple) => {
        if(!simple){
            firePersonalizadoFetch(idCat).then(respuestaPromesa => {
                setProductos(respuestaPromesa);
            }).catch(err => setMensajeError(err.message)).finally(() => {setIsLoading(false)});
        } else{
            fireFetch().then(respuestaPromesa => {
                setProductos(respuestaPromesa);
            }).catch(err => setMensajeError(err.message)).finally(() => {setIsLoading(false)});
        }
    }

    //gestion de la db
    useEffect(() => {
        setIsLoading(true);
        setMensajeError(null);
        if(idCategory === "oferta"){
            auxFirestoreCall(idCategory, false);
        } else{
            if(idCategory){
                auxFirestoreCall(idCategory, false);
            } else{
                auxFirestoreCall(idCategory, true);
            }
        }
    },[idCategory]);

    //Si hay algun error se mostrara en pantalla
    if(mensajeError){
        return(
            <main className="main">
                <div className="main__div1__galeria">
                    <h1 className="main__div1__h1">Galería</h1>
                </div>
                <Container fluid className="main__div1--Galeria container-fluid">
                    <Row className="m-3">
                        <div className="d-flex justify-content-center">
                            <h2 className="my-3">{mensajeError + "..."}</h2>   
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
            </main>
        )
    }

    //Si necesita tiempo para cargar se mostrara el loading
    if(isLoading){
        return(
            <main className="main">
                <div className="main__div1__galeria">
                    <h1 className="main__div1__h1">Galería</h1>
                </div>
                <div className="main__div1--Galeria d-flex justify-content-center alignt-items-center py-5">
                    <Loader colorAux="#4F2034"></Loader>
                </div>
            </main>

            )
    }

    //Happy Path
    return(
        <main className="main">
            <div className="main__div1__galeria">
                <h1 className="main__div1__h1">Galería</h1>
            </div>
            <div className="main__div1--Galeria container-fluid">
                <div className="row main__div1--Galeria__row">
                    {
                        productos.map(producto =>   <div key={producto.id} className="col main__div1--Galeria__row__col">
                                                        <Link to={`/item/${producto.id}`}>
                                                            <div className="card main__div1__galeria__card mx-auto">
                                                                <div className="card-header text-center">
                                                                    {producto.nombre}
                                                                </div>
                                                                <img src={producto.imagen} className="card-img-bottom galeria-card-img" alt={`Imagen de ${producto.nombre}`}/>
                                                            </div>
                                                        </Link>
                                                    </div>)
                    }
                </div>
            </div>
        </main>
    )
}
export default Galeria;