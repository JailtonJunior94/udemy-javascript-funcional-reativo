const { Observable, Subject } = require('rxjs')

const getObservable = () => {
    return new Observable(subscriber => {
        setTimeout(() => {
            console.log('#1 OBS...')
            subscriber.next(Math.random())
            subscriber.complete()
        }, 1000)
    })
}

const obs = getObservable()
obs.subscribe(console.log)
obs.subscribe(console.log)

const getSubject = () => {
    const sub = new Subject()
    setTimeout(() => {
        console.log('#2 SUB...')
        sub.next(Math.random())
        sub.complete(Math.random())
    }, 1000)
    return sub
}

const subject = getSubject()
subject.subscribe(console.log)
subject.subscribe(console.log)