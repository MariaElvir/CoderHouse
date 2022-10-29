import { mostrarProductos } from "./app.js";
import { cargarCarritoStorage, mostrarCarrito } from "./componetns/carrito.js";
import { cargarNombre } from "./componetns/cliente.js";
import { homenControllerMostrar } from "./controllers/homeControler.js";


document.addEventListener("DOMContentLoaded", async()=>{
    const licores = await homenControllerMostrar();
    mostrarProductos(licores);
    setTimeout(() => {
        cargarNombre();
    }, 2000);
    cargarCarritoStorage();
    mostrarCarrito();

});
