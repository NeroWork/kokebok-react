let productos = [
    {id: "lemonpie", nombre: "Lemon Pie", categoria: "vegano", imagen:"http://drive.google.com/uc?export=view&id=1dixSWNlTbM6CJGfjERa3Oj-w0v-_h_Zt", oferta: true, precio: 1300},
    {id: "alfajor", nombre: "Alfajor", categoria: "celiaco", imagen:"http://drive.google.com/uc?export=view&id=19t_8GawLISIvAvHItFIPlz7uY-kSsdPk", oferta: true, precio: 100},
    {id: "tartabombon", nombre: "Tarta Bombon", categoria: "vegano", imagen:"http://drive.google.com/uc?export=view&id=1JFNEA-Tao6PIBvaKyNukDHYnuhy0zlnH", oferta: false, precio: 1500},
    {id: "pastafrola", nombre: "Pasta Frola", categoria: "celiaco", imagen:"http://drive.google.com/uc?export=view&id=1i3F3Cfdob2kI6UuzAbNy5F-gC8lFAFon", oferta: false, precio: 1400},
    {id: "tiramisu", nombre: "Tiramisu", categoria: "celiaco", imagen:"http://drive.google.com/uc?export=view&id=1lbbBTnXKiOto21ey_1cneLZBnEMS5oWl", oferta: false, precio: 1200},
    {id: "cupcake", nombre: "Cupcake", categoria: "vegano", imagen:"http://drive.google.com/uc?export=view&id=14p0o-gL5jFGBiPf9No0XRq34NUg_VRXj", oferta: false, precio: 150},
    {id: "cheesecake", nombre: "Cheese Cake", categoria: "vegano", imagen:"http://drive.google.com/uc?export=view&id=1MEJrRLqcoveC29PYsYKCWRgNHLv6XwSK", oferta: true, precio: 1250},
    {id: "tartafrutilla", nombre: "Tarta de Frutilla", categoria: "vegano", imagen:"http://drive.google.com/uc?export=view&id=1R8vLUXTiqxGu47fQ2nwRL_5RbGsMTb7v", oferta: false, precio: 1450}
];

export const ProductosFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(productos);
        }, 2000);
    })
}