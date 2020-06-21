// Funções que operam em outras funções,
// tornando-as como argumentos ou retornando-as
// são chamadas de higher-order functions.

const executar = (fn, ...params) => {
    return (textoInicial) => {
        return `${textoInicial} ${fn(...params)}!`
    }
}

const somar = (a, b, c) => {
    return a + b + c
}

const multiplicar = (a, b) => {
    return a * b
}

const r1 = executar(somar, 4, 5, 6)('Somando...')
const r2 = executar(multiplicar, 30, 40)('Multiplicando...')

console.log(r1)
console.log(r2)