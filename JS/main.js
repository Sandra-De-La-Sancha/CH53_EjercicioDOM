////////////////////////VARIABLES////////////////////////////////////////////////////////////////////

let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");
let txtCURP = document.getElementById("txtCURP");
let txtRFC = document.getElementById("txtRFC");
let txtTelefono = document.getElementById("txtTelefono");


let elementos = document.getElementsByClassName("list-group-item");

let otroElemento = document.querySelector("ul>li");//primero

let otrosElementos = document.querySelectorAll("ul>li");//todos

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(otrosElementos.length);

console.log("otroElemento:", otroElemento);

console.log(listas.length);//2 (longitudes)

//console.log(lista[0]);
console.log(listas.item(1));

console.log(elementos.item(2));

console.log(elementos.length);
let contador = 0;

//console.log("otrosElementos:", otrosElementos.length);

function modifica(){
   // encabezado1.innerText = "Ejercicio DOM";
    encabezado1.innerHTML += "<em> Ejercicio </em> DOM";
    encabezado2.innerText = ++contador;
}

//console.log(encabezado1.innerText);
btnMostrar.addEventListener("click", function(event){
    event.preventDefault(); //no hagas lo que haces por defecto
   
    let element = document.createElement("li");
    element.innerText = "Another item"; //<li> Another item </li>
    element.classList.add("list-group-item");

    let element2 = element.cloneNode(true);

   // listas.item(0).before(element);
    //listas.item(0).prepend(element);

    //afterbegin Inserta el elemento al principio de la lista
   // listas.item(1).insertAdjacentElement("afterbegin",elemen);
   ///beforeend inserta el elemento al final de la lista
   // istas.item(1).insertAdjacentElement("beforeend",element2);

   listas.item(1).insertAdjacentHTML("beforebegin",
    `<li class="list-group-item">Before Begin item</li>` );
    
    listas.item(1).insertAdjacentHTML("afterend",
        `<li class="list-group-item">
        After end item
        </li>` );

        listas.item(1).insertAdjacentHTML("afterbegin",
            `<li class="list-group-item">
            After begin item
            </li>` );

            listas.item(1).insertAdjacentHTML("beforeend",
                `<li class="list-group-item">
                Before end item
                </li>` );
    
});//btnMostrar


//Se ejecuta cuando termina de cargar todos los elementos de la pagina
window.addEventListener("load",function(event){
    console.log("Se termino de cargar la página");

});//load

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////Funcion que ayuda a automatizar los procesos///////////////////////////////////////////////////////////////////////////////////////////////////// 
function txtToUpper(event){
    event.preventDefault();
    event.target.value =event.target.value.trim().toUpperCase();
}//txtToUpper

//blur -> cuando sale del campo (pierde el foco)
txtCURP.addEventListener("blur",txtToUpper);
txtRFC.addEventListener("blur", txtToUpper);
   
txtTelefono.addEventListener("blur",function(event){
    event.preventDefault();
    txtTelefono.value = txtTelefono.value.trim().slice(0,10);

});//txtTelefono
 



