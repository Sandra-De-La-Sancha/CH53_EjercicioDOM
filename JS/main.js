//DOCUMENT es la parte donde se puede acceder a todo el 
//html

//Accediendo a la etiqueta h1 con el id
//console.log(document.getElementById("encabezado1"));
let btnMostrar =document.getElementById("btnMostrar")
let encabezado1 =document.getElementById("encabezado1");
let encabezado2 =document.getElementById("encabezado2");
let lista= document.getElementsByTagName("ul");

let contador=0;
function modifica(){
    
    encabezado1.innerHTML +="<em>Ejercicio</em> DOM";
    encabezado2.innerText = ++contador;
}// modifica

btnMostrar.addEventListener("click", function(event) {
    event.preventDefault();//no hagas lo quehaces por defecto



});
//console.log(encabezado1.innerText); //es uns propiedad de la etiqueta que esta almacenando el texto de adentro


//encabezado2.innerText = "Ejercicio 2 DOM";
//console.log(encabezado2.innerText);