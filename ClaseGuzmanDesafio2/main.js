function datos() {

    let cliente;
    let nombreCorrecto = true

    do {
        cliente = prompt('Ingrese su nombre: ');

        if (cliente == '') {

            alert('El nombre ingresado es invalido')

        } else {

            nombreCorrecto = false

            Comidas(cliente);
        }

    } while (nombreCorrecto);
}

datos();

function Comidas(cliente){

    const NombresDeComidas = [];
    let interruptor = true

    do {

        cantidadNombresComidas = Number(prompt('Ingrese la cantidad de nombres de Comidas que ingresara:'));

        if (cantidadNombresComidas == '') {

            alert('Por favor ingresa una cantidad de valida');

        } else {
            interruptor = false

            for (let i = 1; i <= cantidadNombresComidas; i++) {

                let nombre = prompt('Ingrese el Nombre N°' + i + ': ');
    
                alert(`Nombre N°${i} guardado:  ${nombre}`);
                NombresDeComidas.push(nombre);
            }
    
            alert(NombresDeComidas.join("\n"));
        }

    } while (interruptor);
}