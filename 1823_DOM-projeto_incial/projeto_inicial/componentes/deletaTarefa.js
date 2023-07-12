const BotaoDeleta = ()=>{
    const botaoDeleta = document.createElement('button');
    botaoDeleta.innerText = 'deletar';
    botaoDeleta.addEventListener('click', deletaTarefa);
    return botaoDeleta
}

const deletaTarefa = (evento)=>{
    const botaoDeleta = evento.target
    const tarefaCompleta = botaoDeleta.parentElement //pega o elemento pai para excluir a <li> inteira
    tarefaCompleta.remove();
    return botaoDeleta
}

export default BotaoDeleta