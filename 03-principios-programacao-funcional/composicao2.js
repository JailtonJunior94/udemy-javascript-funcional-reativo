const composicao = (...fns) => {
    return (valor) => {
        return fns.reduce(async (acc, fn) => {
            if (Promise.resolve(acc) === acc) {
                return fn(await acc)
            }
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
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(texto.split('').join(' '))
        }, 3000)
    })
}

const exagerado = composicao(
    gritar,
    enfatizar,
    tornarLento
)

exagerado('PARA').then(console.log)
