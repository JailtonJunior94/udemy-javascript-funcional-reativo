const fs = require('fs')
const path = require('path')

const lerArquivo = (caminho) => {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

const caminho = path.join(__dirname, '../', '00-arquivos', 'dados.txt')
lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => console.log(linhas))