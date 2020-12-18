/* Crear calculadora que, además de sumar, restar, multiplicar y dividir, calcule potencias, raices cuadradas y cúbicas. Hacerlo con POO */

//creamos clase, constructor, y métodos
class Calculadora {
    constructor(){
    }
    sumar = (n1,n2) => {
        return parseFloat(n1) + parseFloat(n2);
    }
    restar = (n1,n2) => {
        return parseFloat(n1) - parseFloat(n2);
    }
    multiplicar = (n1,n2) => {
        return parseFloat(n1) * parseFloat(n2);
    }
    dividir = (n1,n2) =>{
        return parseFloat(n1) / parseFloat(n2);
    }
    potencia = (n1,exp) => {
        let numero = n1;
        for(let i = 1; i < exp;i++){
            numero = numero * n1;
        }
        return numero;
    }
    
}

//instanciamos la clase
const calculadora = new Calculadora();

let pregunta = prompt("¿Quieres calcular algo? S/N");
while (pregunta == "S"){

    let num1 = prompt("introduce el primer número");
    let num2 = prompt("introduce el segundo número");
    let operacion = prompt("suma: 1; resta: 2; producto: 3; división: 4; potencia: 5");

    if (operacion == 1){
        let resultado = calculadora.sumar(num1,num2);
        alert("resultado: " + resultado);
    }
    else if (operacion == 2){
        let resultado = calculadora.restar(num1,num2);
        alert("resultado: " + resultado);
    }
    else if (operacion == 3){
        let resultado = calculadora.multiplicar(num1,num2);
        alert("resultado: " + resultado);
    }
    else if (operacion == 4){
        let resultado = calculadora.dividir(num1,num2);
        alert("resultado: " + resultado);
    }
    else if (operacion == 5){
        let resultado = calculadora.potencia(num1,num2);
        alert("resultado: " + resultado);
    }

    else {
        alert("operación no disponible");
    }

    let volver = prompt("¿Quieres calcular algo más? S/N");
    if (volver == "N") {
        pregunta = "N"; 
    }
    
} 

alert("Hasta luego");