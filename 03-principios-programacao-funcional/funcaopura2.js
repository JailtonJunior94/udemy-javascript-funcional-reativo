
// Função pura ou impura?
const gerarNumeroAleatorio = (min, max) => {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}

console.log(gerarNumeroAleatorio(1, 50))
console.log(gerarNumeroAleatorio(1, 100))
