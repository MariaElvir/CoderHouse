import { actualizarTotalesCarrito } from "./actualizarCarrito.js";
import { licores } from "./stock.js";

const carrito=[];

const validarProductoCarrito =(licorId)=>{
    const licorRepetido =carrito.find(licores => licores.id === licorId)
    if(licorRepetido){
        licorRepetido.cantidad++;
        // const cantidadProducto = document.getElementById(`cantidad${p.cantidad}`);
        // cantidadProducto.innerText = `Cantidad: ${licorRepetido.cantidad}`;
        alert(`La cantidad del producto ${licorRepetido.nombre} fue modificada`);
        actualizarTotalesCarrito(carrito);
        mostarCarrito();
    }else{
        agregarAlCarrito(licorId);
    }
};

const agregarAlCarrito= (productoId)=>{
    let producto = licores.find(producto => producto.id === productoId);
        producto.cantidad = 1;
        carrito.push(producto);
        console.log(carrito);
        alert('Producto agregado correctamente al carrito')
        actualizarTotalesCarrito(carrito);
        mostarCarrito();
    };

const mostarCarrito= ()=>{
    const d = document;
    let carritoHTML = d.querySelector('#carrito');

    carritoHTML.innerHTML = '';

    carrito.forEach((p, index)=> {
    
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
                <p id =cantidad${p.cantidad}>Cantidad: ${p.cantidad}</p>
                <button class="btn btn-danger">Eliminar</button>
            </div>
        </div>
        `

        // producto.querySelector('button').addEventListener('click', ()=>{
        
        //     eliminarProductoDelCarrito(index);
        // })

        carritoHTML.appendChild(producto);
    })
}

function eliminarProductoDelCarrito(indice){

    carrito[indice].cantidad--;
    alert(`La cantidad del producto ${carrito[indice].nombre} disminuyo`);

    if(carrito[indice].cantidad === 0){

        carrito.splice(indice,1);
        alert('El producto fue eliminado del carrito');
    }
    actualizarTotalesCarrito();
};
// function eliminarProductoDelCarrito(indice){
//     let producto = licores.find(producto => producto.id === indice);
//     if(producto){
//         if(producto.cantidad>1){
//             producto.cantidad--;
//             alert(`La cantidad del producto ${producto.nombre} disminuyo`);
//         } else{
//             carrito.splice(indice,1);
//             alert('El producto fue eliminado del carrito');
//         }
//     }
        
//     actualizarTotalesCarrito();
// };
export{validarProductoCarrito, mostarCarrito};



