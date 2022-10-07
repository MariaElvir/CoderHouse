import { mostrarProductos } from "./src/app.js";
import { cargarCarritoStorage, mostrarCarrito } from "./src/carrito.js";
import { cargarNombre } from "./src/cliente.js";


document.addEventListener("DOMContentLoaded",()=>{
    cargarNombre();
    mostrarProductos();
    cargarCarritoStorage();
    mostrarCarrito();
})