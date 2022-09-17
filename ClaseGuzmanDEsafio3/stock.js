class CategoriaLicores {
    static contadorLicores = 0;

    constructor(idCat,nombreCat,descCat) {
      this.id = ++Licores.contadorLicores;
      this.nombreCat = nombreCat;
    }
}
class Licores extends CategoriaLicores {

        constructor(id,nombre, precio, tamano,descripcion) {
          super(nombreCat);
          this.img = img;
          this.id = id;
          this.nombre = nombre;
          this.precio = precio;
          this.tamano = tamano;
          this.descripcion =descripcion;
          this.categoria = id;
        }
      }
      
      /* ====================== INSTANCIA DE Licores ====================== */
        const cervzaCuzqueña = new Licores("public/imagenes/Cerveza-CuzqueñaTirgo.png",2,"Cuzqueña Trigo", 26,"350 mL", "Alto en cevada", "Cerveza");
        const cocaCola = new Licores("public/imagenes/cocacola.png",1,"Coca Cola", 2.8,"500 mL", "Color negro, Alto nivel de azucar", "Gaseosa");
        const cuatroGalloP = new Licores("public/imagenes/Pisco-cuatroGallos.png",3,"Cuatro Gallos", 45,"1L", "Pisco de uva verde","Pisco");
        const teqilaJose = new Licores("public/imagenes/Tequila-JoseCuervos.png",4,"Jose Cuervos", 68,"1L", "","Tequila");
        const redWisky = new Licores("public/imagenes/Wisky-blacklabel.png",5,"Black Label", 99,"1L", "","Wisky");
        const absolut = new Licores("public/imagenes/vodka-Absolut.png",6,"Vodka Absolut", 61,"1L", "","Vodka");

        
        const licores = {cervzaCuzqueña, cocaCola, cuatroGalloP,teqilaJose,redWisky,absolut};
        console.table(licores);