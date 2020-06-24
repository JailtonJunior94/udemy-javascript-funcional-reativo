const path = require('path')
const { toArray, map, groupBy, mergeMap, reduce } = require('rxjs/operators')
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
    .pipe(groupBy(el => el))
    .pipe(mergeMap(grupo => grupo.pipe(toArray())))
    .pipe(map(palavras => ({ elemento: palavras[0], qtde: palavras.length })))
    .pipe(toArray())
    .pipe(map(array => _.sortBy(array, el => -el.qtde)))
    .subscribe(console.log)
