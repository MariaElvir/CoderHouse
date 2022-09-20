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

const contenedor = document.getElementById('producto-contenedor');

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
            <button class="btn btn-outline-info" id="${licor.id}">Añadir al carrito</button>
        </div>
    </div>
    `;

    contenedor.appendChild(div);

  })

  let titulo = document.getElementById('nombre');
  const nombreDeUsuario = prompt('Ingrese su nombre: ');
  titulo.innerText = 'Hola '+ nombreDeUsuario + '!!!';
  console.log(titulo.innerText);