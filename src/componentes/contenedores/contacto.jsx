const Contacto = () => {
    return(
        <main className="main--contacto">
            <div className="main__div1__contact">
                <h1 className="main__div1__h1">Contacto</h1>
            </div>
            <div className="main__div2">
                <form action="" className="main__div2__form">
                    <legend className="main__div2__form__leg mx-auto">Hacenos llegar tus comentarios!</legend>
                    <fieldset className="main__div2__form__field mx-auto">
                        <div className="main__div2__form__div">
                            <label for="Nombre">Nombre:</label>
                            <input className="estilo__input" type="text" name="Nombre"/>
                        </div>
                        <div className="main__div2__form__div">
                            <label for="Correo">Correo Electronico:</label>
                            <input className="estilo__input" type="email" name="Correo"/>
                        </div>
                        <div className="main__div2__form__div">
                            <label for="Comentario">Comentarios:</label>
                            <textarea className="estilo__input" name="Comentario" cols="10" rows="5"></textarea>
                        </div>
                        <div className="main__div2__form__div--boton">
                            <input type="submit" value="Enviar" className="main__div2__form__boton--enviar"/>
                        </div>
                    </fieldset>
                </form>
            </div>

            <div className="main__div3">
                <h2 className="main__div3__h2">Visitanos!</h2>
                <div className="div_iframe">
                    <iframe className="main__div3__iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6002.906289094961!2d10.39010479132434!3d63.428948379016305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d319747037e53%3A0xbf7c8288f3cf3d4!2sTrondheim%2C%20Noruega!5e0!3m2!1ses-419!2sar!4v1658345122368!5m2!1ses-419!2sar" width="600px" height="400px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </main>
    )
}

export default Contacto;