function informacoesLivro(nome,ano,autor) {
    // Corpo da função
  
    return {
        frase: nome.toUpperCase() + " por " + autor + " foi lançado há " + (2024 - ano) + " anos.",
    }
    
}

// Chamada da função
const retornando = informacoesLivro("O Senhor dos Anéis",1954,"J.R.R. Tolkien");

console.log(retornando);

