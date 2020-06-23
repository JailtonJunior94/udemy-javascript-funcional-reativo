// Desafio!
// Criar um stram de números
// Entre MIN e MAX com Observable

const { Observable, noop } = require('rxjs')

const entre = (min, max) => {
    return new Observable(subscriber => {
        for (let i = min; i <= max; i++) {
            subscriber.next(i)
        }
        subscriber.complete()
    })
}

entre(4, 5)
    .subscribe(num => console.log(`Número = ${num}`), noop, () => console.log('Fim'))