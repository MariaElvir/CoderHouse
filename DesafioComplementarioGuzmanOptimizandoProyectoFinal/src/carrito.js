import { licores } from "./stock.js";


  const carritoDeCompras=[];

  function agregarProductosAlCarrito(id){
    let producto = licores.find(producto => producto.id === id);
    let productoEnCarrito = carritoDeCompras.find(producto => producto.id === id);

    if(productoEnCarrito){
        
        productoEnCarrito.cantidad++;

        console.log(carritoDeCompras);

        alert(`La cantidad del producto ${producto.nombre} fue modificada`);

    }else {
        carritoDeCompras.push({...producto,
                                cantidad:1
                            });

        console.log(carritoDeCompras);

        alert('Producto agregado correctamente al carrito')
    }

    mostrarCarrito();
    guardarCarritoStorage();
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
                <button class="btn btn-danger">Eliminar</button>
            </div>
        </div>
        `

        producto.querySelector('button').addEventListener('click', ()=>{
        
            eliminarProductoDelCarrito(index)
        })

        carritoHTML.appendChild(producto);
    })
    calcularTotal();
}

function eliminarProductoDelCarrito(indice){

    carritoDeCompras[indice].cantidad--;
    alert(`La cantidad del producto ${carritoDeCompras[indice].nombre} disminuyo`);

    if(carritoDeCompras[indice].cantidad === 0){

        carritoDeCompras.splice(indice,1);
        alert('El producto fue eliminado del carrito');
    }

    mostrarCarrito();
    calcularTotal()
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
}





export{agregarProductosAlCarrito, mostrarCarrito, cargarCarritoStorage};
