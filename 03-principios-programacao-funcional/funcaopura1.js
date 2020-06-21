// Uma função pura é uma função em que o valor
// de retorno é determinado APENAS por seus valores
// de entrada, sem efeitos colaterais observáveis

const PI = 3.14

// Pura ou impura? Impura - PI é um valor externo!
const areaCirc = (raio) => {
    return raio * raio * PI
}

console.log(areaCirc(10))

// Pura - Não depende de nada externo
const areaCircPura = (raio, pi) => {
    return raio * raio * pi
}

console.log(areaCirc(10, Math.PI))
