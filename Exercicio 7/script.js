const links = document.querySelectorAll('nav a');

function ativarLink(link){
    const href = link.href;
    const url = document.location.href;
    
    if(url === href){
        link.style.backgroundColor = 'black';
        link.style.color = 'white';
    }
}

links.forEach(ativarLink);