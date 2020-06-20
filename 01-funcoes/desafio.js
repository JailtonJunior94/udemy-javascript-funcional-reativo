function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

const somarAB = somar(3)(4)
console.log(somarAB(13))

function calcular(x) {
    return function (y) {
        return function (fn) {
            return fn(x, y)
        }
    }
}

function subtrair(a, b) {
    return a - b
}

const resultado = calcular(10)(5)(subtrair)
console.log(resultado)