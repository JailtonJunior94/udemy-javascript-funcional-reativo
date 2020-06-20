const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, '../', '00-arquivos', 'dados.txt')

const exibirConteudo = (_, conteudo) => {
    console.log(conteudo.toString())
}

fs.readFile(caminho, {}, exibirConteudo)
