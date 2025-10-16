function generateNumber() {
    const max = Math.ceil(document.querySelector(".input-max").value) // arredonda para cima             
    const min = Math.floor(document.querySelector(".input-min").value) // arredonda para baixo
    // Gera um número aleatório entre min (inclusivo) e max (inclusivo)

    const result = Math.floor(Math.random() * (max - min + 1)) + parseInt(min);    // Exibe o resultado
    alert(result);
} 

// documentação Math.random(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// documentação Math.floor(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// documentação Math.ceil(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil