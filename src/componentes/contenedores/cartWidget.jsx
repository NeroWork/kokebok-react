import cartLogo from './../../assets/cartIcon.png';

const CartWidget = ({contadorCart}) => {
return(
    <div className='cart-container d-flex flex-row justify-content-center'>
        <img className='navCartIcon' src={cartLogo} alt="" />
        {
            contadorCart > 0 &&
            <div className='circulo d-flex justify-content-center align-items-center'>
                <p className='text-contadorCart m-0'>{contadorCart}</p>
            </div>
        }

    </div>
)
}

export default CartWidget;