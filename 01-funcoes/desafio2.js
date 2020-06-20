const carrinho = [
    { nome: 'Caneta', quantidade: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', quantidade: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', quantidade: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', quantidade: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', quantidade: 1, preco: 19.20, fragil: true }
]

// 1. fragil: true
// 2. quantidade: 4, preço: 27.10
// 3. media totais

const media = carrinho
    .filter(item => item.fragil)
    .map(item => item.quantidade * item.preco)
    .reduce((acc, el, i, array) => {
        const novaQuantidade = acc.quantidade + 1
        const novoTotal = acc.total + el
        return {
            quantidade: novaQuantidade,
            total: novoTotal,
            media: novoTotal / novaQuantidade
        }
    }, { quantidade: 0, total: 0, media: 0 })

console.log(media)


const getTotal = (item) => item.quantidade * item.preco
const somar = (acc, el) => acc + el

const totalGeral = carrinho
    .map(getTotal)
    .reduce(somar)

console.log(totalGeral)

Array.prototype.meuReduce = function (fn, inicial) {
    let acumulador = inicial
    for (let i = 0; i < this.length; i++) {
        if (!acumulador && i === 0) {
            acumulador = this[i]
            continue
        }
        acumulador = fn(acumulador, this[i], i, this)
    }
    return acumulador
}

const total = carrinho
    .map(getTotal)
    .meuReduce(somar)