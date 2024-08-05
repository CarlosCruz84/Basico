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

if (idadeComprador >= 18 || estaAcompanhada == true ) {
    console.log("Boa Viagem !!");
    listaDedestinos.splice(2, 1); // Remove intem da lista
    temPassagemComprada = true;

} else {
    console.log("Não é maior de Idade e não posso vender");
    temPassagemComprada = false;
}

else if (estaAcompanhada == true) 
    console.log("comprador está acompanhado");
    listaDedestinos.splice(1, 1); // Remove intem da lista

// // } else {
// //     console.log("Não é maior de Idade e não posso vender");
// //     temPassagemComprada = false;
// }


// console.log(listaDedestinos);















listaDedestinos.push(`Sergipe`) // dessa forma eu consigo adcionar um item na lista