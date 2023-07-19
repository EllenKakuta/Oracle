let livros = []
const endpontDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()


async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpontDaAPI)
    livros = await res.json()
    livros = aplicarDesconto(livros)
    exibirLivrosNaTela(livros)
}

