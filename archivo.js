/* Tres chicos entran en una heladería para comprar un helado pero hay
un problema: los precios no están al lado de cada estante con su respectivo helado. Ellos quieren comprar el helado más caro que puedan con el dinero
que tienen, así que, veamos cómo ayudarlos. Los precios de los helados son los siguientes:
    -Palito de helado de agua: 0.6€
    -Palito de helado de crema: 1€
    -Bombón helado chocolate negro: 1.6€
    -Bombón helado chocolate y nata: 1.7€
    -Bombón helado turrón: 1.8€
    -Tarrina de helado con almendras: 2.9€ 
    -Tarrina 1/4 kg: 2.9€
    
Crear soluciones:
    -pedirles que ingresen el dinero que tienen y mostrarles el helado más
    caro que puedan comprar.
    -Si hay dos o más con el mismo precio, mostrar ambos.
    Cofla quieres saber cuánto es la vuelta.*/


var total = prompt("¿Cuánto dinero tenéis?");

total = parseInt(total);

if (total >= 0.6 && total < 1) {
    alert("Podéis comprar un helado de agua");
    alert("Te sobran " + (total - 0.6) + "€");
}
else if (total >= 1 && total < 1.6) {
    alert("Podéis comprar un helado de crema");
    alert("Te sobran " + (total - 1) + "€");
}
else if (total >= 1.6 && total < 1.7) {
    alert("Podéis comprar un helado de chocolate negro");
    alert("Te sobran " + (total - 1.6) + "€");
}
else if (total >= 1.7 && total < 1.8) {
    alert("Podéis comprar un helado de chocolate y nata");
    alert("Te sobran " + (total - 1.7) + "€");
}
else if (total >= 1.8 && total < 2.9) {
    alert("Podéis comprar un helado de turrón");
    alert("Te sobran " + (total - 1.8) + "€");
}
else if (total >= 2.9) {
    alert("Podéis comprar una de las dos tarrinas");
    alert("Te sobran " + (total - 2.9) + "€");
}
else {
    alert("No tenéis suficiente dinero");
}






