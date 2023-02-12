//Antiguo moc, actualmente en desuso

let productos = [
    {
        id: "lemonpie",
        nombre: "Lemon Pie",
        categoria: "vegano",
        imagen:"http://drive.google.com/uc?export=view&id=1dixSWNlTbM6CJGfjERa3Oj-w0v-_h_Zt",
        oferta: false,
        precio: 1300,
        stock: 3
    },
    {
        id: "alfajor",
        nombre: "Alfajor",
        categoria: "celiaco",
        imagen:"http://drive.google.com/uc?export=view&id=19t_8GawLISIvAvHItFIPlz7uY-kSsdPk",
        oferta: false,
        precio: 100,
        stock: 1
    },
    {
        id: "tartabombon",
        nombre: "Tarta Bombon",
        categoria: "vegano",
        imagen:"http://drive.google.com/uc?export=view&id=1JFNEA-Tao6PIBvaKyNukDHYnuhy0zlnH",
        oferta: false,
        precio: 1500,
        stock: 6
    },
    {
        id: "pastafrola",
        nombre: "Pasta Frola",
        categoria: "celiaco",
        imagen:"http://drive.google.com/uc?export=view&id=1i3F3Cfdob2kI6UuzAbNy5F-gC8lFAFon",
        oferta: false,
        precio: 1400,
        stock: 7
    },
    {
        id: "tiramisu",
        nombre: "Tiramisu",
        categoria: "celiaco",
        imagen:"http://drive.google.com/uc?export=view&id=1lbbBTnXKiOto21ey_1cneLZBnEMS5oWl",
        oferta: false,
        precio: 1200,
        stock: 23
    },
    {
        id: "cupcake",
        nombre: "Cupcake",
        categoria: "vegano",
        imagen:"http://drive.google.com/uc?export=view&id=14p0o-gL5jFGBiPf9No0XRq34NUg_VRXj",
        oferta: false,
        precio: 150,
        stock: 0
    },
    {
        id: "cheesecake",
        nombre: "Cheese Cake",
        categoria: "vegano",
        imagen:"http://drive.google.com/uc?export=view&id=1MEJrRLqcoveC29PYsYKCWRgNHLv6XwSK",
        oferta: false,
        precio: 1250,
        stock: 5
    },
    {
        id: "tartafrutilla",
        nombre: "Tarta de Frutilla",
        categoria: "vegano",
        imagen:"http://drive.google.com/uc?export=view&id=1R8vLUXTiqxGu47fQ2nwRL_5RbGsMTb7v",
        oferta: false,
        precio: 1450,
        stock: 1
    }
];

export const ProductosFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(productos.length > 0){
                resolve(productos);
            } else {
                reject("No hay productos disponibles");
            }

        }, 2000);
    })
}

export const FetchPersonalizado = (catego) => {
    return new Promise((resolve, reject) => {
        let arrayAux;
        if(catego === "oferta"){
            arrayAux = productos.filter(item => item.oferta === true);
        } else {
            arrayAux = productos.filter(item => item.categoria === catego);
        }
        setTimeout(() => {
            if (arrayAux.length > 0){
                resolve(arrayAux);
            } else{
                reject("No se han encontrado items con esta descripcion")
            }
        }, 2000);
    })
}

export const FetchIndividual = (id) => {
    return new Promise((resolve, reject) => {
        let item = productos.find(itemAux => itemAux.id === id);

        setTimeout(() => {
            if(item !== undefined){
                resolve (item);
            } else {
                reject ("No existe el objeto buscado");
            }
        }, 2000);
    })
}