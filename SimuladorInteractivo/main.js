
function solicitarDatos(){
let ingreseMonto=prompt('Ingrese cantidad de dinero: ');
let ingreseCoutas=prompt('Ingrese número de cuotas: ');
let ingreseInteres = prompt('Ingrese el interes(%): ');

   let resultadoInteres =Number(ingreseMonto)+(Number(ingreseMonto)*Number(ingreseInteres))/100;
   let resultadoCouta=resultadoInteres/Number(ingreseCoutas);

    alert(' Monto total a pagar : S/'+resultadoInteres+
            '\n Número de cuotas : '+ ingreseCoutas+
            '\n Interes total : '+ingreseInteres+'%'+
            '\n Pago por cuota :  S/'+resultadoCouta);

}
solicitarDatos();