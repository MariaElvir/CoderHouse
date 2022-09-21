const licores = [{
  imagen:"public/images/Cerveza-CuzqueñaTirgo.png",
  id:2,
  nombre:"Cuzqueña Trigo",
  precio:26,
  tamaño:"350 mL",
  descripcion: "Alto en cevada",
  tipo: "Cerveza"
  },{
  imagen:"public/images/cocacola.png",
  id:1,
  nombre:"Coca Cola",
  precio:2.8,
  tamaño:"500 mL",
  descripcion:"Color negro, Alto nivel de azucar",
  tipo:"Gaseosa"
  },{
    imagen:"public/images/Pisco-cuatroGallos.png",
    id:3,
    nombre:"Cuatro Gallos",
    precio:45,
    tamaño:"1L",
    descripcion:"Pisco de uva verde",
    tipo:"Pisco"
  },{
    imagen:"public/images/Tequila-JoseCuervos.png",
    id:4,
    nombre:"Jose Cuervos",
    precio:68,
    tamaño:"1L",
    descripcion: "",
    tipo:"Tequila"
  },{
    imagen:"public/images/Wisky-blacklabel.png",
    id:5,
    nombre:"Black Label",
    precio:99,
    tamaño:"1L",
    descripcion: "Alto en cevada",
    tipo:"Wisky"
  },{
    imagen:"public/images/vodka-Absolut.png",
    id:6,
    nombre:"Vodka Absolut",
    precio:26,
    tamaño:"1L",
    descripcion: "",
    tipo:"Vodka"
  },{
    imagen:"public/images/Pisco-DemonioAndesAzul.png",
    id:7,
    nombre:"Demonio de los Andes",
    precio:38.9,
    tamaño:"700 mL",
    descripcion: "Su sabor es suave y redondo;Finos aromas a ciruelas y naranjas.",
    tipo:"Pisco"
  },{
    imagen:"public/images/Pisco-Queirolo.png",
    id:8,
    nombre:"Queirolo",
    precio:32,
    tamaño:"700 mL",
    descripcion: "Pisco Acholado de variadas uvas pisqueñas",
    tipo:"Pisco"
  },{
    imagen:"public/images/vodka-Smirnof.png",
    id:9,
    nombre:"Smirnof",
    precio:32.90,
    tamaño:"700 mL",
    descripcion: "Es una bebida alcohólica mixta de vodka con sabor a limón, de menor graduación (5%).",
    tipo:"Vodka"
  },{
    imagen:"public/images/Tequila-Jimador.png",
    id:10,
    nombre:"Jimador",
    precio:77,
    tamaño:"750 mL",
    descripcion: "100% AGAVE AZUL",
    tipo:"Tequila"
  }];

  const carrito=[];

  function insertarNombre(){
    let titulo = document.getElementById('nombre');
      const nombreDeUsuario = prompt('Ingrese su nombre: ');
      const confimrarMayoriaEdad = confirm('Eres mayor de 18 años?');
    titulo.innerText = 'Hola '+ nombreDeUsuario + '!!!';
    console.log(titulo.innerText);
    mostrarProductos();
  }

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
        agregarProductosAlCarrito(licor.id);
      })
    })
  }

  function agregarProductosAlCarrito(id){
    let producto = licores.find(producto => producto.id === id);
    let productoEnCarrito = carrito.find(producto => producto.id === id);

    if(productoEnCarrito){
        
        productoEnCarrito.cantidad++;

        console.log(carrito);

        alert(`La cantidad del producto ${producto.nombre} fue modificada`);

    }else {
        
        producto.cantidad = 1;

        carrito.push(producto);

        console.log(carrito);

        alert('Producto agregado correctamente al carrito')
    }

    mostrarCarrito();
    calcularTotal();
  }

  function mostrarCarrito(){

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
}

function eliminarProductoDelCarrito(indice){

    carrito[indice].cantidad--;
    alert(`La cantidad del producto ${carrito[indice].nombre} disminuyo`);

    if(carrito[indice].cantidad === 0){

        carrito.splice(indice,1);
        alert('El producto fue eliminado del carrito');
    }

    mostrarCarrito();
    calcularTotal()
}

function calcularTotal(){

    // Concepto de acumulador
    let total = 0;

    carrito.forEach((p)=>{
    
        total += p.precio * p.cantidad;
    })

    console.log(total);

    const t = document.getElementById('total');

    t.innerHTML = `<span id="total">${total}</span>`

}


  insertarNombre();
