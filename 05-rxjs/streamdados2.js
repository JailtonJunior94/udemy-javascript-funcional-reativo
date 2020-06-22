const numeros = [1, 2, 3, 4, 6, 7, 8, 9, 10]

const gerarElementos = (array) => {
    return {
        iniciar(fn) {
            let indice = 0
            const interval = setInterval(() => {
                if (indice >= array.length) {
                    clearInterval(interval)
                }
                fn(array[indice])
                indice++
            }, 1000)

            return {
                parar() {
                    clearInterval(interval)
                }
            }
        }
    }
}

const temp1 = gerarElementos(numeros)
temp1.iniciar(num => {
    console.log(Math.pow(2, num))
})