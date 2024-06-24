console.log("estoy bien");

/*
RETO

 Lista de nombres
Escribe un programa que le pida al usuario 3 nombres, los almacene en un arreglo de datos y luego los muestre, si el nombre está repetido, no debe guardarlo.
*/

let y = 0
let conteo = 1;
let lista = [];
while (y < 3) {
    let nombre = prompt("Ingresa el nombre " + conteo);
    switch(lista.includes(nombre)){
        case false:
            lista.push(nombre); 
            conteo ++;
            y ++;  
        default:
            break;
    }   
}
console.log(lista);



