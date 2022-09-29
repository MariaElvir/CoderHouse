import { mostrarProductos } from "./app.js";
import { pintarTotalesCarrito } from "./src/actualizarCarrito.js";
import { obtenerCarritoStorage } from "./src/storage.js";

function insertarNombre(){
  let titulo = document.getElementById('nombre');
    const nombreDeUsuario = prompt('Ingrese su nombre: ');
    const confimarMayoriaEdad = confirm('Eres mayor de 18 años?');
  titulo.innerText = 'Hola '+ nombreDeUsuario + '!!!';
  console.log(titulo.innerText);
}

document.addEventListener('DOMContentLoaded',()=>{
insertarNombre();
mostrarProductos();
    if (localStorage.getItem('carrito')) {
      const carrito = obtenerCarritoStorage();
      pintarTotalesCarrito();
    }
});


