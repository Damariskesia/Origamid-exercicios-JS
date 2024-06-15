const botao = document.querySelector("button#somar");
const sub = document.querySelector("button#subtrair");

function somar() {
    const div = document.querySelector('#teste');
    const total = Number(div.innerText) + 1;
    if (total <= 10) {
        div.innerText = total;
    }else{
        console.log("Limite de 10 atingido");
    }
}

function subtrair() {
    const div= document.querySelector('#teste');
    const total = +div.innerText - 1;
    if (total >= 0) {
        div.innerText = total;
    }else{
        console.log("Menor que 0");
    }
}



if (botao) {
    botao.addEventListener("click", somar);
}

if(sub){
    sub.addEventListener("click", subtrair);
}