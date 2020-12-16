/* Se crea una máquina para dejar pasar a un local sólo a las personas mayores de edad, siendo gratis la entrada para la primera persona que entre después de las 2 AM. */

/* let free = false;
const validacion = (hora) => {
    let edad = prompt("¿Cuál es tu edad?");
    if (edad >= 18) {
        if (hora >= 2 && hora < 7 && free == false){
            alert(`tienes ${edad}, puedes pasar gratis. Son las ${hora} HRS`);
            free = true;
        }else{
            
            alert(`Puedes pasar, tienes ${edad}. La entrada vale 5€. Son las ${hora} HRS`);
        }
    }else{
        alert(`No puedes pasar, eres menor de edad`);
    }
}

validacion(23);
validacion(2);
validacion(3); */

// ****************************************************************************************************************************************************************

/* En un curso hay 19 alumnos, se ha roto el sistema de registro de asistencias y durante los próximos 10 días no se podrá hacer dicho registro:
    -Crear un mini-sistema que nos permita registrar a los alumnos que están presentes (P) y ausentes (A) en clase. 
    -Pasados los 10 días mostrar la situación final de todos los alumnos (nº total de presentes y ausentes). 
    -Se puede tener un máximo de 3 de ausencias por esos 10 días, si se tienen más, se suspende la asignatura. */

// declaramos e inicializamos la variable cantidad para saber cuántos alumnos son en total
/* let cantidad = prompt("¿Cuántos alumnos son?");
//Creamos el array que contendrá el total de alumnos
let alumnosTotal = [];

//Iteramos con FOR para recoger el nombre de los alumnos. En el array ALUMNOSTOTAL habrá dos componentes; el primero es el nombre del alumno, el segundo es la cantidad de asistencias del alumno. Es decir, creamos un array dentro del array ALUMNOSTOTAL, ya que cada elemento del array tiene, a su vez, dos elementos.
for (let i = 0; i < cantidad; i++) {
    alumnosTotal[i] = [prompt("Nombre del alumno " + (i+1)),0];
}

//Creamos una función con dos parámetros para pasar lista y así controlar la asistencia
const pasarLista = (nombre, lista) => {
    let asistencia = prompt(nombre);
    if (asistencia == "p" || asistencia == "P"){
        alumnosTotal[i][1]++;//así seleccionamos la posición del elemento      del array dentro del array ALUMNOSTOTAL
    }
}

//debemos pasar lista durante 10 días, así que crearemos un FOR IN anidado a FOR y llamaremos a la función 10 veces
for (let i = 0; i < 10 ; i++) {
    for (alumno in alumnosTotal) {
        pasarLista(alumnosTotal[alumno][0],alumno);
    }
}

//si hay más de 3 asistencias en esos 10 días, se suspende la asignatura
for (alumno in alumnosTotal){
    let resultado = `${alumnosTotal[alumno][0]}:<br>
    -------------Presentes: ${alumnosTotal[1]}:<br>
    --------------Ausentes: ${10 - parseInt(alumnosTotal[alumno][1])}
    `;
    if (30 - alumno[alumno[1]] > 3) {
        resultado += "<strong>Suspenso por acumulación de inasistencias<strong>";
    } else {
        resultado += "<strong></strong>"
    }
    
    document.write(resultado);

} */


// ****************************************************************************************************************************************************************
//Crear calculadora

/* const sumar = (n1,n2) => {
    return parseFloat(n1) + parseFloat(n2);
}
const restar = (n1,n2) => {
    return parseFloat(n1) - parseFloat(n2);
}
const multiplicar = (n1,n2) => {
    return parseFloat(n1) * parseFloat(n2);
}
const dividir = (n1,n2) => {
    return parseFloat(n1) / parseFloat(n2);
}

let pregunta = prompt("¿Quieres calcular algo? S/N")
while (pregunta == "S"){

    let num1 = prompt("introduce el primer número");
    let num2 = prompt("introduce el segundo número");
    let operacion = prompt("suma: 1; resta: 2; producto: 3; división: 4");

    if (operacion == 1){
        let resultado = sumar(num1,num2);
        alert("resultado: " + resultado);
    }
    else if (operacion == 2){
        let resultado = restar(num1,num2);
        alert("resultado: " + resultado);
    }
    else if (operacion == 3){
        let resultado = multiplicar(num1,num2);
        alert("resultado: " + resultado);
    }
    else if (operacion == 4){
        let resultado = dividir(num1,num2);
        alert("resultado: " + resultado);
    } else {
        alert("operación no disponible");
    }

    let volver = prompt("¿Quieres calcular algo más? S/N");
    if (volver == "N") {
        pregunta = "N"; 
    }
    
} 

alert("Hasta luego"); */

