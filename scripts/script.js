console.log("estoy bien");

/*
RETO

 Lista de nombres
Escribe un programa que le pida al usuario 3 nombres, los almacene en un arreglo de datos y luego los muestre, si el nombre está repetido, no debe guardarlo.
*/

//declaracion de la variable "y" que se utilizara como conteo de los nombres que logran ingresar a arreglo
let y = 0
//declaracion de la variable "conteo" que se utilizara nombre por nombre
let conteo = 1;
//creacion del arreglo llamado "lista" para contener los nombres
let lista = [];
//bucle para pedir nombre por nombre hasta que se llegue al tope de 3 nombres
while (y < 3) {
//cariable declarada para almacenar el nombre introducido 
    let nombre = prompt("Ingresa el nombre " + conteo);
//se evalua con metodo "includes" si el nombre introducido se encuentra ya en el arreglo
    switch(lista.includes(nombre)){
//en el caso de que no se encuentre en el arreglo "include" arrojara un "false"
        case false:
//si el nombre introducido da "false" se añade al arreglo
            lista.push(nombre); 
            conteo ++;
            y ++;  
        default:
            break;
    }   
}
//se muestra el arreglo
console.log(lista);



