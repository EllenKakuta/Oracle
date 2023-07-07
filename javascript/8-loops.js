console.log(`\nTrabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 15;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\nDestinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >=18 || estaAcompanhado ==true;
let contador = 0;
let destinoExiste = false;
while (contador<3){
   
    if( listaDeDestinos[contador] == destino){
        // console.log("Destino existente");
        destinoExiste = true;
        break;
    }
    contador+=1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste == true){
    console.log("Boa viagem");
}else{
    console.log('Desculpe, tivemos um erro');
}


for (let cont=0;contador <3;cont++){
   
    if( listaDeDestinos[contador] == destino){
        // console.log("Destino existente");
        destinoExiste = true;
        break;
    }
   
}