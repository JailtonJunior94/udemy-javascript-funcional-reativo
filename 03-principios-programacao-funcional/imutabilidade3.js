const pessoa = {
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo'
}

// Atribuição por Referência
const novaPessoa = pessoa

novaPessoa.nome = 'João'
novaPessoa.cidade = 'Fortaleza'

console.log(novaPessoa)