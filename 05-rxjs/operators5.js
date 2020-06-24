const { of, Observable } = require('rxjs')

const terminadoCom = (final) => {
    return (fonte) => {
        return Observable.create(subscriber => {
            fonte.subscribe({
                next(texto) {
                    if (texto.endsWith(final)) {
                        subscriber.next(texto)
                    }
                },
                error(erro) {
                    subscriber.error(erro)
                },
                complete() {
                    subscriber.complete()
                }
            })
        })
    }
}

of('Ana Silva', 'Maria Silva', 'Pedro Rocha')
    .pipe(terminadoCom('Silva'))
    .subscribe(console.log)