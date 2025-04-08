let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let lista = document.getElementsByTagName("ul");
let elementos = document.getElementsByClassName("list-group-item");
let otroElemento = document.querySelector("ul>li");
let otrosElementos = document.querySelectorAll("ul>li");
let btnMostrar = document.getElementById("btnMostrar");

let contador = 0;

console.log(lista.length);
console.log(lista[0]);
console.log(lista.item(1))
console.log(elementos.length);
console.log(elementos.item(2));
console.log("otroElemento:", otroElemento);
console.log("otrosElementos:", otrosElementos.length);

function modifica(){
    encabezado1.innerText = "Ejercicio DOM";
    encabezado2.innerHTML = "<em> DOM Exercise <em>";
}

console.log(encabezado1.innerText);
console.log(encabezado2.innerText);

btnMostrar.addEventListener("click", function(event){
    event.preventDefault(); //no hagas lo que haces por defecto
   // console.log("Botón btnModificar presionado");

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
    
});