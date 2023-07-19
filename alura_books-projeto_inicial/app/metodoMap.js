function aplicarDesconto (livros){
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
     }) //os 3 pontos fazem a copia do array para um novo objeto, ou seja, pega o valor real e transforma no valor com o desconto
    return livrosComDesconto
}