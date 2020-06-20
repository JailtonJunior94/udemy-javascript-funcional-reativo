// arrow function
const felizNatal = () => console.log('Feliz Natal!')
felizNatal()

const saudacao = (nome) => `Fala ${nome}, beleza?`
console.log(saudacao("Stefany"))

const somar = (...numeros) => {
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}

console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

const potencia = (base) => {
    return (exp) => {
        return Math.pow(base, exp)
    }
}

console.log(potencia(2)(8))

// THIS
Array.prototype.log = function() {
    console.log('Opa!')
}

const numeros = [1, 2, 3]
numeros.log()