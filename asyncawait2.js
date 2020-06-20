const gerarNumerosEntre = (min, max, numerosProibidos) => {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min

        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido')
        }
        resolve(aleatorio)
    })
}

const gerarMegaSena = async (quantidadeNumeros) => {
    try {
        const numeros = []
        for (let _ of Array(10).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (error) {
        throw 'Que chato!'
    }
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)