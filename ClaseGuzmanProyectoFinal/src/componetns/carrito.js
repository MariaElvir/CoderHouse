import { eventoFuturo, MostrarGetData } from "../controllers/CarritoControler.js";
import { licores } from "../data/stock.js";



  const carritoDeCompras=[];
//   const licores = await homenControllerMostrar();

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
        title: 'PRODUCTO ELIMINADO',
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

    const totalCantidad = carritoDeCompras.reduce((acc, item) => acc + item.cantidad, 0);
    const totalCompra = carritoDeCompras.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

pintarTotalesCarrito(totalCantidad, totalCompra);

}

function pintarTotalesCarrito(totalCantidad, totalCompra){

const t = document.getElementById('total');
const ft = document.getElementById('canombre');

t.innerHTML = `${totalCompra}`;
ft.innerHTML = `${totalCantidad}`;

}

function guardarCarritoStorage(){
    localStorage.setItem('carrito',JSON.stringify(carritoDeCompras));
}

function cargarCarritoStorage(){
    const Carrito = localStorage.getItem('carrito');
    Carrito && carritoDeCompras.push(... JSON.parse(Carrito));
    return carritoDeCompras;
}

function eliminarStorage(){
    localStorage.removeItem('carrito');
    // window.location.reload();
    // setInterval("window.location.reload()",2500);
    setTimeout(() => {
        window.location.reload();
    }, 3000);
}

export{carritoDeCompras, agregarProductosAlCarrito, mostrarCarrito, cargarCarritoStorage, eliminarProductoDelCarrito,eliminarStorage};
