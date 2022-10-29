import { mostrarProductos } from "../app.js";
import { homenControllerMostrar } from "../controllers/homeControler.js";


const inputSearch = document.getElementById('buscarProducto');

const buscarProductos = async (productoNombre) => {
    console.log(productoNombre)
    const productos = await homenControllerMostrar();

    const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(productoNombre.toLowerCase()));
    mostrarProductos(productosFiltrados);
};

inputSearch.addEventListener('input', (e) => {
    buscarProductos(e.target.value);
})