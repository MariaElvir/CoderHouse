function solicitarDatos(){
    let ingreseMonto=parseInt(prompt('Ingrese cantidad de dinero: '));
    let ingreseCoutas=parseInt(prompt('Ingrese número de cuotas: '));
    let ingreseInteres = parseInt(prompt('Ingrese el interes(%): '));


        validacion(ingreseMonto,ingreseCoutas,ingreseInteres);
    }

solicitarDatos();

function validacion(ingreseMonto,ingreseCoutas,ingreseInteres){
    if ( (isNaN(ingreseMonto) == false )  &&  (isNaN(ingreseCoutas) == false )  &&  (isNaN(ingreseInteres) == false) ) {
        resultado(ingreseMonto,ingreseCoutas,ingreseInteres);
    }else{
             alert('No a ingresado algún dato.....')
    }
}

function resultado(ingreseMonto,ingreseCoutas,ingreseInteres){
    let resultadoInteres =ingreseMonto+(ingreseMonto*ingreseInteres)/100;
    let resultadoCouta=resultadoInteres/ingreseCoutas;

    alert(' Monto total a pagar : S/'+resultadoInteres+
    '\n Número de cuotas : '+ ingreseCoutas+
    '\n Interes total : '+ingreseInteres+'%'+
    '\n Pago por cuota :  S/'+resultadoCouta);
}
