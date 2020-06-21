const path = require('path')

const funcoes = require('./funcoes')

const caminho = path.join(__dirname, '..', '00-arquivos')

const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')'
]

funcoes.lerDiretorio(caminho)
    .then(arquivos => funcoes.elementosTerminadosCom(arquivos, '.srt'))
    .then(arquivosSTR => funcoes.lerArquivos(arquivosSTR))
    .then(funcoes.mesclarConteudos)
    .then(funcoes.separarTextoPor('\n'))
    .then(funcoes.removerElementosSeVazio)
    .then(funcoes.removerElementosSeIncluir('-->'))
    .then(funcoes.removerElementosSeApenasNumero)
    .then(funcoes.removeSimbolos(simbolos))
    .then(funcoes.mesclarConteudos)
    .then(funcoes.separarTextoPor(' '))
    .then(funcoes.removerElementosSeVazio)
    .then(funcoes.removerElementosSeApenasNumero)
    .then(funcoes.agruparElementos)
    .then(funcoes.ordernarPorAtributoNumerico('qtde', 'desc'))
    .then(console.log)
