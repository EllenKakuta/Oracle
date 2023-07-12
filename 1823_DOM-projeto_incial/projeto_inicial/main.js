// criação de função
// ( ()=>{

import BotaoConclui from "./componentes/concluiTarefa.js";

import BotaoDeleta from "./componentes/deletaTarefa.js";

    const criarTarefa =(evento) =>{
    evento.preventDefault()
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;  
   
    const tarefa = document.createElement('li');
    tarefa.classList.add('task'); // essa classe task esta no css para formatação 
   
    const conteudo = `<p class="content">${valor}</p>`;
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui()); //botão será incluso somente quando um item for incluso a lista

    tarefa.appendChild(BotaoDeleta());

    lista.appendChild(tarefa); //sempre coloca a tarefa no final do nó, ou seja, os itens que são inclusos vão indo para parte de baixo da lista

    input.value = "" // para limpar o input
}
const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criarTarefa);




// })() //parenteses para indicar que o código está sendo executado todo código foi colocado dentro de ( ()=>{}) para que a regra de negócios não seja exibida através da página de inspeção - não está mais no escopo global - código encapsulado - função anônima
