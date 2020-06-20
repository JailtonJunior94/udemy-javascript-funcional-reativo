const funcionarOuNao = (valor, changeErro) => {
    return new Promise((resolve, reject) => {
        if (Math.random() < changeErro) {
            reject('Ocorreu um erro')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.1)
    .then(valor => console.log(valor))
    .catch(error => console.log(error))