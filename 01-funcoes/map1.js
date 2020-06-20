const numeros = [1, 2, 3, 4, 5]

const dobro = (n, i) => n * 2 + i
console.log(numeros.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = (nome) => nome[0]
console.log(nomes.map(primeiraLetra))

const carrinho = [
    { nome: 'Caneta', quantidade: 10, preco: 7.99 },
    { nome: 'Impressora', quantidade: 0, preco: 649.50 },
    { nome: 'Caderno', quantidade: 4, preco: 27.10 },
    { nome: 'Lapis', quantidade: 3, preco: 5.82 },
    { nome: 'Tesoura', quantidade: 1, preco: 19.20 }
]

const getNome = (item) => item.nome
console.log(carrinho.map(getNome))

const getTotal = (item) => item.quantidade * item.preco
const totais = carrinho.map(getTotal)
console.log(totais)

// Fazendo o próprio map
Array.prototype.meuMap = function (fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        const resultado = fn(this[i], i, this);
        novoArray.push(resultado)
    }
    return novoArray
}

console.log(carrinho.meuMap(getNome))
console.log(carrinho.meuMap(getTotal))