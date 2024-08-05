console.log("Trabalhando com atribuição de variáveis");

const idade = 29; // aqui é minha varivale declarada
const nome = "Carlos"; // aqui é minha varivale declarada
const sobrenome= "Cruz"; // aqui é minha varivale declarada

console.log(nome + sobrenome); // Ele vai imprimir nome e sobre nome sem o espaço
console.log(nome, sobrenome); // Aqui nesse caso ele imprime com o espaço por conta da virgula
console.log(nome + "" + sobrenome); // Aqui nesse caso ele também imprime com o espaço por conta 

console.log(`Meu nome é ${nome} ${sobrenome} `); //Nesse caso aqui ele irá imprimir meu nome é Carlos Cruz. É uma outra forma de chamar a váriavel.



let idade; // declarando variável
idade = 40; //atribuindo valor
idade = idade+5;
console.log(idade); // vai me retornar 45