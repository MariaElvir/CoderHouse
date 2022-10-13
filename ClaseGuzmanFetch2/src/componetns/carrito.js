import { eventoFuturo, getData, MostrarGetData } from "../controllers/CarritoControler.js";
import { licores } from "../data/stock.js";



  const carritoDeCompras=[];

  function agregarProductosAlCarrito(id){

    let producto = licores.find(producto => producto.id === id);
    let productoEnCarrito = carritoDeCompras.find(producto => producto.id === id);

    if(productoEnCarrito){
        
        productoEnCarrito.cantidad++;

        Swal.fire({
            icon: 'success',
            title: 'PRODUCTO AGREGADO',
            text: `La cantidad del producto ${producto.nombre} fue modificada`,
            showConfirmButton: false,
            timer: 1500
        });
       
    }else {
        carritoDeCompras.push({...producto,
                                cantidad:1
                            });


        Swal.fire({
            icon: 'success',
            title: 'PRODUCTO AGREGADO',
            text:'Producto agregado correctamente al carrito',
            showConfirmButton: false,
            timer: 1500
          });
    }

    mostrarCarrito();
  }

  function mostrarCarrito(){

    const d = document;
    let carritoHTML = d.querySelector('#carrito');

    carritoHTML.innerHTML = '';

    carritoDeCompras.forEach((p, index)=> {
    
        let producto = document.createElement('div');
        //producto.classList.add('card');
        producto.classList.add('col-12');
        producto.classList.add('col-md-4');
        producto.classList.add('mb-5');
        producto.classList.add('d-flex');
        producto.classList.add('justify-content-center');

        producto.innerHTML = `
        
        <div class="card-image" style="width: 18rem;">
            <img class="card-img-top" src="${p.imagen}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${p.nombre}</h5>
                <p>S/${p.precio}</p>
                <p>Cantidad: ${p.cantidad}</p>
                <button class="btn btn-danger" >Eliminar</button>
            </div>
        </div>
        `

        producto.querySelector('button').addEventListener('click', (event)=>{
            event.stopPropagation();
            if (event.target.classList.contains('btn-danger')) {
                Swal.fire({
                    title: 'Esta seguro?',
                    text: `Va a eleminar el producto`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Eliminar',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        eliminarProductoDelCarrito(index);
                    }
                })
            }
            
        })

        carritoHTML.appendChild(producto);
    })
    calcularTotal();
    MostrarGetData();
    guardarCarritoStorage();
    eventoFuturo(carritoDeCompras)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('Fin del proceso');
    });


}


function eliminarProductoDelCarrito(indice){
    
    carritoDeCompras[indice].cantidad--;
    Swal.fire({
        icon: 'success',
        title: 'PRODUCTO AGREGADO',
        text: `La cantidad del producto ${carritoDeCompras[indice].nombre} disminuyo`,
        showConfirmButton: false,
        timer: 1500
    });

    if(carritoDeCompras[indice].cantidad === 0){

        carritoDeCompras.splice(indice,1);
        
        Swal.fire(
            'PRODUCTO ELIMINADO',
            'El producto fue eliminado del carrito',
            'success'
          );
    }
    mostrarCarrito();
}

function calcularTotal(){

    // Concepto de acumulador
    let total = 0;

    carritoDeCompras.forEach((p)=>{
    
        total += p.precio * p.cantidad;
    })

    console.log(total); 

    const t = document.getElementById('total');

    t.innerHTML = `<span id="total">${total}</span>`

}

function guardarCarritoStorage(){
    localStorage.setItem('carrito',JSON.stringify(carritoDeCompras));
}

function cargarCarritoStorage(){
    const Carrito = localStorage.getItem('carrito');
    Carrito && carritoDeCompras.push(... JSON.parse(Carrito));
    return carritoDeCompras;
    
}

export{carritoDeCompras, agregarProductosAlCarrito, mostrarCarrito, cargarCarritoStorage, eliminarProductoDelCarrito};
