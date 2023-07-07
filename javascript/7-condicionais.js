console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 18;
const estaAcompanhado = false;
const temPassagemComprada = true;
console.log("Destinos possíveis: ");
console.log(listaDeDestinos);
// if(idadeComprador>=18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1) 
// }else if(estaAcompanhado){
//         console.log("Menor acompanhado de responsável");
//         listaDeDestinos.splice(1,1) 
// }else{
//         console.log("Comprador menor de idade, proibida a venda");
// } 
// console.log(listaDeDestinos);

if(idadeComprador>=18 || estaAcompanhado == true ){
    console.log("Boa viagem");
    listaDeDestinos.splice(1,1) 
}else {
        console.log("Comprador menor de idade, proibida a venda");
} 
console.log("Embarque: \n\n")
if(idadeComprador >=18 && temPassagemComprada ==true){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);