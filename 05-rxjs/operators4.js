const { from, Observable } = require('rxjs')

const primeiro = () => {
    return (source) => {
        return Observable.create(subscriber => {
            source.subscribe({
                next(v) {
                    subscriber.next(v + 1000)
                }
            })
        })
    }
}

from([1, 2, 3, 4, 5])
    .pipe(primeiro())
    .subscribe(console.log)