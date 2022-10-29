import { carritoDeCompras, eliminarStorage } from "./carrito.js";

const finalizarCompra = document.getElementById('btn-finalizar');
finalizarCompra.addEventListener('click', ()=>{
    if(carritoDeCompras !=""){
        Swal.fire({
            icon: 'success',
            title: 'Felicidades',
            text: 'Se le enviara un correo de confirmación',
            timer: 3500
          });
          eliminarStorage();
    } else{
      Swal.fire('El carrito se encuentra vacio!!!')
    }
  })