

// let carrito = [];
// let total= 0;
// let seguirComprando = "";
// let producto = 0;
// let precio = 0;
// let cantidad = 0;


// const licor = [new Licores(1,"Pisco Portón", 91, "750 mL"),
// new Licores(2,"Vino Tabernero", 18, "750 mL"),
// new Licores(3,"Wisky Red Label", 56, "750 mL"),
// new Licores(4,"Absolut Bodka", 40, "1L"),
// new Licores(5,"Cerveza Corona six pack", 27, "350 mL")];

// const calcularPrecio = (precio) => {
// cantidad = Number(prompt('Elija la cantidad de productos que desea comprar: '));
// total += precio * cantidad;
// menu();
// }

// let todosLosLicores = licor.map(function(element){
// return `${element.id}.- ${element.nombre} => S/${element.precio}`;
// });



// const menu = () => {
// do {
//     producto = Number(prompt('Ingrese la opcion de compra :\n'+todosLosLicores.join("\n")+'\n6. Salir'));

//     if(producto == 1 || producto == 2|| producto == 3 || producto == 4
//         || producto == 5 || producto == 6){

//         switch (producto) {
//              case 1:
//             precio = 91;
//             calcularPrecio(precio);
//             break;

//         case 2:
//             precio = 18;
//             calcularPrecio(precio);
//             break;

//         case 3:
//             precio = 56;
//             calcularPrecio(precio);
//             break;

//         case 4:
//             precio = 40;
//             calcularPrecio(precio);
//             break;
//         case 5:
//             precio = 27;
//             calcularPrecio(precio);
//             break;

//         case 6:
//             if (total !== 0) {
//                 alert('Gracias por su compra..... \nEl total a pagar es de S/' + total)
//             } else {
//                 alert('No se cargo correctamente su compra')
//             }
//             break;
//     }}else{
//         alert('Ingrese un numero correcto de la lista')
//     }
//     if(producto == 1 || producto == 2|| producto == 3 || producto == 4
//         || producto == 5 ){
//     seguirComprando = prompt("¿Quieres agregar otro producto a tu carrito ? Si o No");}

// } while (seguirComprando);
// }


// menu();