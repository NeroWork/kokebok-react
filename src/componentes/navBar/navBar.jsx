import CartWidget from "../cartWidget/cartWidget";

const NavBar = () => {
    return (
        <>
         <nav class="navbar navbar-expand-lg navbar-custom fixed-top">
            <div class="container-fluid justify-content-lg-around">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse order-1 order-lg-0 noflexgrow" id="navbarNavAltMarkup">
                    <div class="navbar-nav justify-content-around maxwidth" >
                      <a class="nav-link" href="#">Home</a>
                    </div>
                </div>
                <a class="nav-link active navbar-brand order-0 order-lg-1" aria-current="page" href="index.html">
                        <CartWidget></CartWidget>
                </a>
                <div class="collapse navbar-collapse order-2 order-lg-2 noflexgrow" id="navbarNavAltMarkup">
                    <div class="navbar-nav justify-content-around maxwidth">
                      <a class="nav-link" href="#">Carrito</a>
                    </div>
                </div>
            </div>
         </nav>
        </>
    )
}

export default NavBar;