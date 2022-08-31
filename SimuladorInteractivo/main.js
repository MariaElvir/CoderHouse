let ingreseMonto= prompt('Ingrese cantidad de dinero: ');
let ingreseCoutas=prompt('Ingrese número de cuotas: ');
let interes = prompt('Ingrese el interes(%): ');

const totalConInteres =(a,b)=> (a+((a*b)/100));
const montoCouta =(a,b)=> a/b;

if((ingreseMonto!="") && (ingreseCoutas!="") && (interes!="")){
    let montofinal=totalConInteres(Number(ingreseMonto),Number(interes));
    let montoPorCouta=montoCouta(montofinal,Number(ingreseCoutas));

    alert(' Monto total a pagar : S/'+montofinal+
            '\n Número de cuotas : '+ ingreseCoutas+
            '\n Interes total : '+interes+'%'+
            '\n Pago por cuota :  S/'+montoPorCouta)

}else{
    alert('No a ingresado algún dato.....')
}