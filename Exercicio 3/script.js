const circulo = document.querySelector('#circulo');

function SeguirMouse (event) {
    circulo.style.left = event.x + 'px';
    circulo.style.top = event.y + 'px';
}

window.addEventListener('mousemove', SeguirMouse);