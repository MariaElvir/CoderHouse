import { agregarProductosAlCarrito } from "./carrito.js";
import { licores } from "./stock.js";

function mostrarProductos(){
    const contenedor = document.getElementById('producto-contenedor');
    contenedor.innerHTML = '';
    licores.forEach((licor)=> {
      const div= document.createElement('div');
      div.classList.add('card');
      div.classList.add('col-12');
      div.classList.add('col-md-4');
      div.classList.add('mb-5');
      div.classList.add('d-flex');
      div.classList.add('justify-content-center');

      div.innerHTML = `
      <div class="card-image">
          <img class="card-img-top" src="${licor.imagen}" alt="Card image cap">
          <div class="card-body">
              <h5 class="card-title">${licor.nombre}</h5>
              <p class="card-text">Tipo: ${licor.tipo}</p>
              <p>S/${licor.precio}</p>
              <button class="btn btn btn-primary btn-lg" id="${licor.id}">Añadir al carrito</button>
          </div>
      </div>
      `
      contenedor.appendChild(div);
      
      div.querySelector('button').addEventListener('click', ()=>{
        Swal.fire({
          icon: 'success',
          title: 'Felicidades',
          text: 'Se agregado su Producto!',
          timer: 1500
      })
          agregarProductosAlCarrito(licor.id);
      })
    })
  }
  export{mostrarProductos};