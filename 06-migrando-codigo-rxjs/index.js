const path = require('path')
const { toArray, map } = require('rxjs/operators')
const _ = require('lodash')

const funcoes = require('./funcoes')

const caminho = path.join(__dirname, '..', '00-arquivos')

const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')', '!'
]

funcoes.lerDiretorio(caminho)
    .pipe(funcoes.elementosTerminadosCom('.srt'))
    .pipe(funcoes.lerArquivo())
    .pipe(funcoes.separarTextoPor('\n'))
    .pipe(funcoes.removerElementosSeVazio())
    .pipe(funcoes.removerElementosSeApenasNumero())
    .pipe(funcoes.removeSimbolos(simbolos))
    .pipe(funcoes.separarTextoPor(' '))
    .pipe(funcoes.removerElementosSeVazio())
    .pipe(toArray())
    .pipe(funcoes.agruparElementos())
    .pipe(map(array => _.sortBy(array, el => -el.qtde)))
    .subscribe(console.log)
