/* -Crear un sistema mostrando las cualidades de tres smartphones. 
-Cada smartphone debe tener color, peso, resolución de pantalla, resolución de cámara y memoria RAM. 
-Cada smartphone debe encender, reiniciar, apagar, tomar fotos y grabar. */

/* class Smartphone{
    constructor(modelo,color,peso,resPant,resCam,ram){
        this.modelo    = modelo;
        this.color     = color;
        this.peso      = peso;
        this.resPant   = resPant;
        this.resCam    = resCam;
        this.ram       = ram;
        this.encendido = false;
    }
    botonEncendido(){
        if(this.encendido == false){
            alert("Smartphone encendido");
            this.encendido = true;
        } else{
            alert("Smartphone apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando smartphone");
        }else {
            alert("El teléfono está apagado");
        }
    }
    tomarFoto(){
        alert(`Foto tomada en resolución ${this.resCam}`);
    }
    grabar(){
        alert(`Vídeo tomado en resolución ${this.resCam}`);
    }
    info(){
        return `
            Modelo: <b>${this.modelo}</b><br>
            color: <b>${this.color}</b><br>
            peso: <b>${this.peso}</b><br>
            Resolución de pantalla: <b>${this.resPant}</b><br>
            Resolución de cámara: <b>${this.resCam}</b><br>
            RAM: <b>${this.ram}</b><br>
        `;
    }
}

const telef1 = new Smartphone("Pocophone","rojo","150gr","5.5'","Full HD","4GB");
const telef2 = new Smartphone("Samsung M50","negro","200gr","6.5'","HD","3GB");
const telef3 = new Smartphone("Realme 7","blanco","175gr","6.2'","HD+","4GB"); */

/* telef1.botonEncendido();
telef1.tomarFoto();
telef1.grabar();
telef1.reiniciar();
telef1.botonEncendido(); */

/* document.write(`
    <h3 style="color:red">${telef1.info()}</h3> <br>
    <h3 style="color:blue">${telef2.info()}</h3> <br>
    <h5 style="color:green">${telef3.info()}</h5> <br>
`) */

/* Crear dos smartphones de alta gama que posean todas las propiedades y métodos de la clase anterior y además pueden grabar en cámara superlenta, tienen reconocimiento facial y una cámara extra: */

/* class AltaGama extends Smartphone {
    constructor(modelo,color,peso,resPant,resCam,ram,resCam2){
        super(modelo,color,peso,resPant,resCam,ram);
        this.resCam2 = resCam2;
        this.recoFac = false;
    }
    camaraLenta(){
        alert(`Grabación en cámara superlenta con una resolución ${this.resCam2}` );
    }
    reconFacial(){
        if(this.recoFac == false){
            alert(`reconocimento facial OK`);
            this.recoFac = true;
        }
    } */
    /* info2(){
        return `
            Modelo: <b>${this.modelo}</b><br>
            color: <b>${this.color}</b><br>
            peso: <b>${this.peso}</b><br>
            Resolución de pantalla: <b>${this.resPant}</b><br>
            Resolución de cámara: <b>${this.resCam}</b><br>
            RAM: <b>${this.ram}</b><br>
            Resolución cámara secundaria: <b>${this.resCam2}</b><br>
        `;
    } */
/*     info2(){
        return this.info() + `Resolución cámara secundaria: <b>${this.resCam2}</b><br>`;
    }
}
const telef4 = new AltaGama("Iphone 12","dorado","125gr","6.35'","2K","6GB","FullHD+");
const telef5 = new AltaGama("Samsung Galaxy S20","verde","180gr","6.8'","4K","12GB","2K");

telef4.botonEncendido();
telef4.tomarFoto();
telef4.grabar();
telef5.reiniciar();
telef5.botonEncendido();

document.write(`
    <h6 style="color:red">${telef1.info()}</h6> <br>
    <h6 style="color:blue">${telef2.info()}</h6> <br>
    <h6 style="color:green">${telef3.info()}</h6> <br>
    <p>**********************************************</p> <br>
    <h3 style="color:orange">${telef4.info2()}</h3> <br>
    <h3 style="color:violet">${telef5.info2()}</h3> <br>
`); */



