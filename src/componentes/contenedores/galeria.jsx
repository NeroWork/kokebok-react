import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductosFetch } from "../../assets/moc";

const Galeria = () => {
    const [productos, setProductos] = useState([]);
    const {idCategory} = useParams();
    console.log(idCategory);
    
    useEffect(() => {
        if(idCategory === "oferta"){
            ProductosFetch().then(respuestaPromesa => {
                setProductos(respuestaPromesa.filter(item => item.oferta === true));
            }).catch(err => console.log(err));
        } else{
            if(idCategory){
                ProductosFetch().then(respuestaPromesa => {
                    setProductos(respuestaPromesa.filter(item => item.categoria === idCategory));
                }).catch(err => console.log(err));
            } else{
                ProductosFetch().then(respuestaPromesa => {
                    setProductos(respuestaPromesa);
                }).catch(err => console.log(err));
            }
        }
    },[idCategory]);

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