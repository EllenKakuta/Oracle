const BotaoConclui = ()=>{
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button') // adiciona a classe css
    botaoConclui.innerText= 'concluir' // incluir texto no botão
    botaoConclui.addEventListener('click', concluiTarefa);
    return botaoConclui;
}

const concluiTarefa = (evento)=>{
    const botaoConclui = evento.target //qual o alvo do evento, em quem eu cliquei
    const tarefaCompleta = botaoConclui.parentElement //pai do botão
    tarefaCompleta.classList.toggle('done'); //vai executar a classe css a partir do momento que o botão é clicado (boleano)
}

export default BotaoConclui