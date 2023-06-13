// const contenido = document.getElementById("contenido");
// const parrafos = document.getElementsByClassName("parrafo");

const contenido = document.querySelector("#contenido");
const parrafos = document.querySelectorAll(".parrafo");


// console.log(parrafos);
// parrafos.forEach(parrafo => console.log(parrafo));
// console.log(parrafos[0]);

// console.log(contenido.classList);
// contenido.classList.add("prueba2");
// contenido.classList.remove("prueba2");
// console.log(contenido.classList);

// contenido.className = "prueba3 prueba4";

console.log(contenido.innerHTML);
console.log(contenido.innerText);

parrafos[0].innerHTML = "Hola mundo! <a href= '#' >Esto es un enlace</a>"