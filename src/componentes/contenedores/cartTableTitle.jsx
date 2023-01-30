const TableTitle = () => {
    return(
        <div className='row divCarrito__divProductos align-items-center g-0 justify-content-center'>
            <div className="producto__nombre align-items-center col-6 text-start">
                <p>Nombre del Producto</p>
            </div>
            <div className="col-2">
                <div className="producto__precio1 text-center">
                    <p className='mb-0'>Cantidad</p>
                </div>
            </div>
            <div className='col-2 text-center'>
                <div className='producto__precio'>
                    <p>Precio</p>
                </div>
            </div>
            <div className="producto__x col-2 text-center">
                <p className='mb-0'>Cancelar</p>
            </div>
        </div>
    )
}

export default TableTitle;