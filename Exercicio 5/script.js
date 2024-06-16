const lista = ["JavaScript","HTML","CSS"];

const body = document.querySelector("body");

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
    body.innerHTML += "<p>" + lista[i] + "</p>";
}