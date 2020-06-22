const readline = require('readline')

const obterResposta = (pergunta) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    return new Promise((resolve) => {
        rl.question(pergunta, resposta => {
            resolve(resposta)
        })
    })
}

const namorada = () => {
    setTimeout(() => {
        console.log('N: Apagas as luzes')
        console.log('N: Pedir silêncio')
        console.log('N: Surpresa')
    }, 2000)
}

const sindico = () => {
    setTimeout(() => {
        console.log('S: Monitorando o barulho')
    })
}

const porteiro = async (interessados) => {
    while (true) {
        const resposta = await obterResposta('O namorado chegou? (s/N/q) ')
        if (resposta.toLowerCase() === 's') {
            (interessados || []).forEach(obs => obs())
        } else if (resposta.toLowerCase() === 'q') {
            break
        }
    }
}

porteiro([namorada, sindico])