const { ajax } = require('rxjs/ajax')
const { XMLHttpRequest } = require('xmlhttprequest')
const { map, concatAll } = require('rxjs/operators')

ajax({
    url: 'https://api.github.com/users/jailtonjunior94/repos',
    createXHR: () => new XMLHttpRequest()
})
    .pipe(map(resp => JSON.parse(resp.xhr.responseText)))
    .pipe(concatAll())
    .pipe(map(repo => repo.full_name))
    .subscribe(console.log)
