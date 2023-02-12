const TableTitle = () => {
    return(
        <div className='row divCarrito__divProductos g-0'>
            <div className="producto__nombre col-6 text-start">
                <div className="d-flex h-100 text-center align-items-center">
                    <p>Nombre del Producto</p>
                </div>
            </div>
            <div className="col-2 producto__precio1 d-flex justify-content-center">
                <div className="d-flex h-100 text-center align-items-center">
                    <p className='mb-0'>Cantidad</p>
                </div>
            </div>
            <div className='col-2 text-center d-flex justify-content-center producto__precio'>
                <div className="d-flex h-100 text-center align-items-center">
                    <p>Precio</p>
                </div>
            </div>
            <div className="producto__x col-2 d-flex justify-content-center text-center">
                <div className="d-flex h-100 text-center align-items-center">
                    <p className='mb-0'>Cancelar</p>
                </div>
            </div>
        </div>
    )
}

export default TableTitle;