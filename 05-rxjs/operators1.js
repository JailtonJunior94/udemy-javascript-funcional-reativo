// Os dois tipos...
// 1. Operadores de Criação
const { of } = require('rxjs')

// 2. Operadores Encadeáveis (Pipeable Op.)
const { last, map } = require('rxjs/operators')

of(1, 2, 'ana', false, 'ultimo')
    .pipe(last())
    .pipe(map(v => v[0]))
    .subscribe((valor) => {
        console.log(`O valor gerado foi: ${valor}`)
    })