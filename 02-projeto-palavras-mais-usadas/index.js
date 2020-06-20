const path = require('path')

const funcoes = require('./funcoes')

const caminho = path.join(__dirname, '..', '00-arquivos')

funcoes.lerDiretorio(caminho)
    .then(arquivos => funcoes.elementosTerminadosCom(arquivos, '.srt'))
    .then(arquivosSTR => funcoes.lerArquivos(arquivosSTR))
    .then(conteudos => conteudos.join('\n'))
    .then(todoConteudo => todoConteudo.split('\n'))
    .then(funcoes.removerElementosSeVazio)
    .then(funcoes.removerElementosSeIncluir('-->'))
    .then(funcoes.removerElementosSeApenasNumero)
    .then(console.log)
