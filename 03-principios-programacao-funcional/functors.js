// Functors são objetos que implementam a função MAP
// que também é um "wrapper" de um valor

// Array é um exemplo de FUNCTORS
const nums = [1, 2, 3, 4, 5, 6]
const novosNums = nums
    .map(el => el + 10)
    .map(el => el * 2)

console.log(nums, novosNums)

const tipoSeguro = (valor) => {
    return {
        valor,
        invalido() {
            return this.valor === null || this.valor === undefined
        },
        map(fn) {
            if (this.invalido()) {
                return tipoSeguro(null)
            }
            const novovalor = fn(this.valor)
            return tipoSeguro(novovalor)
        }
    }
}

const result = tipoSeguro('Esse é um texto')
    .map(t => t.toUpperCase())
    .map(t => `${t}!`)
    .map(t => t.split('').join(' '))
console.log(result.valor)