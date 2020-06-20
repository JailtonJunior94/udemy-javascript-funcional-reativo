const carrinho = [
    { nome: 'Caneta', quantidade: 10, preco: 7.99 },
    { nome: 'Impressora', quantidade: 0, preco: 649.50 },
    { nome: 'Caderno', quantidade: 4, preco: 27.10 },
    { nome: 'Lapis', quantidade: 3, preco: 5.82 },
    { nome: 'Tesoura', quantidade: 1, preco: 19.20 }
]

const quantidadeMaiorQueZero = (item) => item.quantidade > 0
const quantidadeMuitoGrande = (item) => item.quantidade >= 1000
const quantidadeMaiorIgualZero = (item) => item.quantidade >= 0

console.log(carrinho.filter(quantidadeMaiorQueZero))
console.log(carrinho.filter(quantidadeMuitoGrande))
console.log(carrinho.filter(quantidadeMaiorIgualZero))

Array.prototype.meuFilter = function (fn) {
    const novoArray = []

    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }

    return novoArray
}

console.log(carrinho.meuFilter(quantidadeMaiorIgualZero))