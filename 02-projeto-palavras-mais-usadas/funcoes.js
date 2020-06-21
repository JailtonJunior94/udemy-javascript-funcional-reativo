const fs = require('fs')
const path = require('path')

const lerDiretorio = (caminho) => {
    return new Promise((resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminho)
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)
        } catch (error) {
            reject(error)
        }
    })
}

const lerArquivo = (caminho) => {
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
            resolve(conteudo)
        } catch (error) {
            reject(error)
        }
    })
}

const lerArquivos = (caminhos) => {
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

const elementosTerminadosCom = (array, padrao) => {
    return array.filter(el => el.endsWith(padrao))
}

const removerElementosSeVazio = (array) => {
    return array.filter(el => el.trim())
}

const removerElementosSeIncluir = (padraoTextual) => {
    return (array) => {
        return array.filter(el => !el.includes(padraoTextual))
    }
}

const removerElementosSeApenasNumero = (array) => {
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
    })
}

const removeSimbolos = (simbolos) => {
    return (array) => {
        return array.map(el => {
            return simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join('')
            }, el)
        })
    }
}

const mesclarConteudos = (conteudos) => conteudos.join(' ')

const separarTextoPor = (simbolo) => {
    return (texto) => {
        return texto.split(simbolo)
    }
}

const agruparElementos = (palavras) => {
    return Object.values(palavras.reduce((acc, palavra) => {
        const el = palavra.toLowerCase()
        const qtde = acc[el] ? acc[el].qtde + 1 : 1

        acc[el] = { elemento: el, qtde }
        return acc
    }, {}))
}

const ordernarPorAtributoNumerico = (atributo, ordem = 'asc') => {
    return (array) => {
        const asc = (o1, o2) => o1[atributo] - o2[atributo]
        const desc = (o1, o2) => o2[atributo] - o1[atributo]
        return array.sort(ordem === 'asc' ? asc : desc)
    }
}

module.exports = {
    lerDiretorio,
    lerArquivo,
    lerArquivos,
    removeSimbolos,
    separarTextoPor,
    mesclarConteudos,
    agruparElementos,
    elementosTerminadosCom,
    removerElementosSeVazio,
    removerElementosSeIncluir,
    ordernarPorAtributoNumerico,
    removerElementosSeApenasNumero
}