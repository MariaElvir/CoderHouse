const nombre=[];

function insertarNombre(){
    let nombreCliente = document.getElementById('nombre');
    let nombreDeUsuario ="";
    let confimrarMayoriaEdad=false;

    do{
        nombreDeUsuario = prompt('Ingrese su nombre: ');
        confimrarMayoriaEdad = confirm('Eres mayor de 18 años?');

        const validacion = (nombreDeUsuario!=="")? true : false
        validacion ? alert("Bienvenido "+nombreDeUsuario+" !!!!"): alert("Ingrese su nombre")

        const permiso = (confimrarMayoriaEdad)? true : false
        permiso ? alert("Puedes comprar bebidas alcoholicas"): alert("No puedes comprar bebidas alcoholicas")

    }while(nombreDeUsuario =="" && confimrarMayoriaEdad)
    nombre.push(nombreDeUsuario,confimrarMayoriaEdad);

    guardarNombre();
    MostrarNombre();
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
