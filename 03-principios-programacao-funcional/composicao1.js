const composicao = (...fns) => {
    return (valor) => {
        return fns.reduce((acc, fn) => {
            return fn(acc)
        }, valor)
    }
}

const gritar = (texto) => {
    return texto.toUpperCase()
}

const enfatizar = (texto) => {
    return `${texto}!!!`
}

const tornarLento = (texto) => {
    return texto.split('').join(' ')
}

const exagerado = composicao(
    gritar,
    enfatizar,
    tornarLento
)
const resultado = exagerado('PARA')

console.log(resultado)