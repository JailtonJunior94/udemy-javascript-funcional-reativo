const textoComTamanhoEntre = (min) => {
    return (max) => {
        return (erro) => {
            return (texto) => {
                // Lazy Evaluation
                const tamanho = (texto || '').trim().length
                if (tamanho < min || tamanho > max) {
                    throw erro
                }
            }
        }
    }
}

const aplicarValidacao = (fn, valor) => {
    try {
        fn(valor)
    } catch (e) {
        return { error: e }
    }
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome inválido!')

const p1 = { nome: 'A', preco: 14.99, desc: 0.25 }
forcarNomeProdutoValido(p1.nome)