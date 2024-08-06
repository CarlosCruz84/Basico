console.log(`\n Trabalhando com Condicionais`);

const listaDedestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,

);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = " Salvador";

console.log(" \n Destinos possíveis:");
console.log(listaDedestinos);
//variavel const. essa é fixa.
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true


//variável let. essa varia de acordo com a lógica
let contador = 0;
let destinoExiste = false; 

//é utilizado para execultar repetidamente um bloco de codigo. " loop"
while (contador<3){
    if(listaDedestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    
    contador += 1;
}

console.log("Destino existe:", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem !");
}else{
    console.log("Compra não efetuada!");
}   
// Outra forma de fazer o loop, é usando o for.
for(let cont = 0; cont < 3; cont++){

    if( listaDedestinos[contador]==destino){
        destinoExiste = true;
    }
}