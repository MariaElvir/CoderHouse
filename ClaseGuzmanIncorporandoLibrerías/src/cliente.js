const nombre=[];

async function insertarNombre(){
    // let nombreCliente = document.getElementById('nombre');
    // let nombreDeUsuario ="";
    // let confimrarMayoriaEdad=false;

    const { value: NombreC } = await Swal.fire({
      title: 'INGRESE SU NOMBRE',
      input: 'text',
      inputLabel: '¿Cual es tu nombre?',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Ingrese su nombre!'
        }
      }
    })
    
    if (NombreC) {
      Swal.fire(`Bienvenido ${NombreC} !!!`)
    }

      const { value: edad } = await Swal.fire({
        title: 'INGRESE SU EDAD',
        input: 'number',
        inputLabel: '¿Qué edad tienes?',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'Ingrese su nombre!'
          }
        }
      })
      
      if (edad>=18) {
        Swal.fire(`Usted es mayor de edad puede comprar bebidas alcholicas`)
      } else{
        Swal.fire(`Usted es menor de edad no puede comprar bebidas alcholicas`)

      }
      nombre.push(NombreC,edad);
   
      guardarNombre();
      MostrarNombre();




    // do{
    //     nombreDeUsuario = prompt('Ingrese su nombre: ');
    //     confimrarMayoriaEdad = confirm('Eres mayor de 18 años?');

    //     const validacion = (nombreDeUsuario!=="")? true : false
    //     const permiso = (confimrarMayoriaEdad)? true : false
    //     validacion ? Swal.fire("Bienvenido "+nombreDeUsuario+" !!!!"):Swal.fire("Ingrese su nombre")
    //     permiso ? Swal.fire("Puedes comprar bebidas alcoholicas"): Swal.fire("No puedes comprar bebidas alcoholicas")
    

    // }while(nombreDeUsuario =="" && confimrarMayoriaEdad)
   
}











function MostrarNombre(){
    const nombreCliente = localStorage.getItem('cliente');
    (nombreCliente)&& nombre.push(... JSON.parse(nombreCliente));
    
    const Nombre= nombre[0];
    console.log(Nombre||"Falsy");
}

function guardarNombre(){
    localStorage.setItem('cliente',JSON.stringify(nombre));
}

function cargarNombre(){
    const nombreCliente = localStorage.getItem('cliente');
    const validacion =(nombreCliente)? true:false;
    validacion ? MostrarNombre() : insertarNombre();
}

export{cargarNombre};
