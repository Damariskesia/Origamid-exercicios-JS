const lista = ["JavaScript","HTML","CSS"];

const body = document.querySelector("body");

function adicionarBody(item) {
    body.innerHTML += "<li>" + item + "</li>";
}

lista.forEach(adicionarBody);

//

const links = document.querySelectorAll("nav a");

function adicionarLink(link) {
    const href = link.href;
    console.log(href);
}

links.forEach(adicionarLink);

console.log(links[links.length - 1]);

//

const ultimo = lista.pop();
const primeiro = lista.shift();

console.log(ultimo);
console.log(primeiro);

lista.push("React");
console.log(lista);