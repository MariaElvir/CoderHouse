import { carritoDeCompras } from "../componetns/carrito.js";

const eventoFuturo = (carritoDeCompras) => {
    const response= (carritoDeCompras == "") ? true : false;
    return new Promise((resolve, reject) => {
        response ? resolve('Carrito de Compras se encuentra vacio') : reject('Carrito de Compras contiene productos');
    });
    
};

const getData = (carritoDeCompras) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(carritoDeCompras);
        }, 3000);
    });
};

function MostrarGetData(){
    const res= (carritoDeCompras != "") ? true : false;
    res && getData(carritoDeCompras).then((carritoDeCompras) => {
        console.table(carritoDeCompras);
    });
}


export{eventoFuturo, getData, MostrarGetData};