const esperarPor = (tempo = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo);
    })
}

esperarPor(2000)
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'))

const executar = async () => {
    await esperarPor(2000)
    console.log('Async/Await 1...')

    await esperarPor(2000)
    console.log('Async/Await 2...')

    await esperarPor(2000)
    console.log('Async/Await 3...')
}

executar();