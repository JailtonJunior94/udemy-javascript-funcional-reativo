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

module.exports = {
    lerDiretorio,
    lerArquivo,
    lerArquivos,
    elementosTerminadosCom,
    removerElementosSeVazio,
    removerElementosSeIncluir,
    removerElementosSeApenasNumero
}