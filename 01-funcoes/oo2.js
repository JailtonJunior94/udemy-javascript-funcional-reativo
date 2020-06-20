class Produto {
    constructor(nome, preco, desc) {
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }

    precoFinal() {
        return this.preco * (1 - this.desc)
    }
}