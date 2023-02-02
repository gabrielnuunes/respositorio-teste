//Crie dois exemplos de operadores de atribuição
//Crie dois exemplos de operadores unários
//Crie dois exemplos de operadores binários
//Crie dois exemplos de operadores ternários
//Crie dois exemplos de operador E
//Crie dois exemplos de operador OU

// Primeira tarefa
let animal = "Cavalo";
console.log(animal);

animal = "Gato";
console.log(animal);

//Operadores Unários

//console.log(`O valor da quantidade é ${quantidade}, o aluno é ${aluno}`);
//console.log('O nome do aluno é ' + aluno);
//console.log( `O nome do aluno é ${aluno}`);

let quantidade = 0;
let aluno = "Rayssa";

quantidade++
console.log(`O valor da quantidade alterada é ${quantidade}, ${aluno}`);

//Operadores Binários
// + , -, *, / , >, <, >=, ==, ===, !=

// Cinco é maior do que dois? Verdadeiro
let comparacao = 5 > 2; // True ou Verdadeiro

//let comparacao2 = umaVariavel > 2; // True ou Verdadeiro

console.log("O valor da comparação entre os números é " + comparacao);

//Operador Ternário

// Expressão ? respostaPositiva : resposatNegativa;
let hora = 10;

let resultado = hora > 18 ? "Boa noite" : "Boa tarde ou bom dia";
console.log(`O resultado da operação ternária é ${resultado}`);

let soma = (2 * 2) - (1 * 5); // Resultado é 3
console.log(`O resultado da soma é ${soma}`);

let vermelha = false;
let azul = false;
let verdeVizinho = true;

let resultadoPrimeira = (azul || vermelha); // Primeira comparação
console.log(`O resultado da primeira comparação é ${resultadoPrimeira}`)

// Segunda comparação com o resultado da primeira
let resultadoSegunda = resultadoPrimeira || verdeVizinho; 

console.log(`O resultado da segunda comparação é ${resultadoSegunda}`)

let resultado2 = 1 + 2; // 3

let soma2 = resultado + 3;
