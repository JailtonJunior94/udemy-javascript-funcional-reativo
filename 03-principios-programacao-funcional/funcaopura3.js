
let quantidadeExecucoes = 0

// Pura!
const somar = (a, b) => {
    quantidadeExecucoes++ // Efeitos colaterais observáveis
    return a + b
}

console.log(quantidadeExecucoes)
console.log(somar(5, 50))
console.log(somar(5, 50))
console.log(somar(5, 50))
console.log(quantidadeExecucoes)
