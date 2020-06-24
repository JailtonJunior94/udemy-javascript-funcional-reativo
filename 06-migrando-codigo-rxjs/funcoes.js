const fs = require('fs')
const path = require('path')
const { Observable } = require('rxjs')

const createPipeableOperator = (operadorFn) => {
    return (source) => {
        return Observable.create(subscriber => {
            const sub = operadorFn(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (e => subscriber.complete())
            })
        })
    }
}

const lerDiretorio = (caminho) => {
    return new Observable(subscriber => {
        try {
            fs.readdirSync(caminho).forEach(arquivo => {
                subscriber.next(path.join(caminho, arquivo))
            })
            subscriber.complete()
        } catch (error) {
            subscriber.error(error)
        }
    })
}

const lerArquivo = () => {
    return createPipeableOperator(subscriber => ({
        next(caminho) {
            try {
                const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
                subscriber.next(conteudo.toString())
            } catch (e) {
                subscriber.error(e)
            }
        }
    }))
}

const elementosTerminadosCom = (padraoTextual) => {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            if (texto.endsWith(padraoTextual)) {
                subscriber.next(texto)
            }
        }
    }))
}

const removerElementosSeVazio = () => {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            if (texto.trim()) {
                subscriber.next(texto)
            }
        }
    }))
}

const separarTextoPor = (simbolo) => {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            texto.split(simbolo).forEach(part => {
                subscriber.next(part)
            })
        }
    }))
}

const removerElementosSeApenasNumero = () => {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            const num = parseInt(texto.trim())
            if (num !== num) {
                subscriber.next(texto)
            }
        }
    }))
}

const removeSimbolos = (simbolos) => {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            const textoSemSimbolo = simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join('')
            }, texto)
            subscriber.next(textoSemSimbolo)
        }
    }))
}

const agruparElementos = () => {
    return createPipeableOperator(subscriber => ({
        next(palavras) {
            const agrupado = Object.values(palavras.reduce((acc, palavra) => {
                const el = palavra.toLowerCase()
                const qtde = acc[el] ? acc[el].qtde + 1 : 1

                acc[el] = { elemento: el, qtde }
                return acc
            }, {}))
            subscriber.next(agrupado)
        }
    }))
}

module.exports = {
    lerDiretorio,
    lerArquivo,
    removeSimbolos,
    separarTextoPor,
    agruparElementos,
    createPipeableOperator,
    elementosTerminadosCom,
    removerElementosSeVazio,
    removerElementosSeApenasNumero
}