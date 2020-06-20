function bomDia() {
    console.log('Bom dia!')
}

const boaTarde = () => {
    console.log('Boa tarde!')
}

// 1) Passando função por parâmetro
function executarQualquerCoisa(fn) {
    if (typeof fn === 'function') {
        fn()
    }
}

executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// 2) Retornar uma função a partir de uma outra função
function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

console.log(potencia(3)(4))