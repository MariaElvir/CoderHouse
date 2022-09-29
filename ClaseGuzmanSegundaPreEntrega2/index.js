import { mostrarProductos } from "./src/app.js";
import { cargarCarritoStorage, mostrarCarrito } from "./src/carrito.js";


function insertarNombre(){
    let titulo = document.getElementById('nombre');
      const nombreDeUsuario = prompt('Ingrese su nombre: ');
      const confimrarMayoriaEdad = confirm('Eres mayor de 18 años?');
    titulo.innerText = 'Hola '+ nombreDeUsuario + '!!!';
    console.log(titulo.innerText);
}
document.addEventListener("DOMContentLoaded",()=>{
    insertarNombre();
    mostrarProductos();
    cargarCarritoStorage();
    mostrarCarrito();
})