// Primeira nota
//             0    1    2    3 
let notas = [ 7.8, 5.2, 8.1, 6.2 ]; // Quatro indices

// o indice 0 será o primeiro dado de qualquer array

//console.log(notas);
//console.log(notas[1]);
//console.log(notas[3]); // Neste caso seria a 4ª nota

// Tentando mostrar uma nota que não existe
//console.log(notas[10]); // Ele irá mostrar indefinido

/*

let nota1 = notas[1];
let nota2 = notas[2];

let resultado = nota1 + nota2;
let resultadoSubtracao = nota1 - nota2;
let resultadoMultiplicacao = nota1 * nota2;
let resultadoDivisao = nota1 / nota2;

console.log(resultado);
console.log(resultadoSubtracao);
console.log(resultadoMultiplicacao);
console.log(resultadoDivisao);

*/

//               0           1         2          3     
let nomes = [ "Gabriel", "CAMILA", "Rayssa", "Elivelton" ];
console.log(nomes);

console.log(nomes[3]);
console.log(nomes[5]);

nomes[5] = "Thiago";
console.log(nomes[5]);

console.log(nomes[0]);
console.log(nomes[1]);

let aniversariante = "Qualquer pessoa";
console.log("Aniversariante " + aniversariante);

aniversariante = "Camila!";
console.log("Aniversariante " + aniversariante);

//                 0         1          2          3          4         5 
const alunos = [ "Gabriel", "CAMILA", "Rayssa", "Elivelton", "Ariel", "Jason" ]; // Array

alunos[6] = "Rosangela";
console.log(alunos);

alunos[7] = "João das Couves";


// Não pode trocar uma constante por variável
//alunos = "Amanda"; // String 
//alunos = 10; // Número inteiro 
//alunos = 2.4; // Número decimal 


// O Array deixa aumentar ou diminuir o seu tamanho mesmo ele sendo constante



// Escreva uma função que receba dois parâmetros salário e aumento e retorne o 
// novo salário com aumento. Por exemplo, o salario é R$ 500,00 e o aumento foi 
// de 10% então o novo salário será 550.

function aumentoSalario ( salario, aumento ) {

    let porcentagem = aumento / 100;   // Aqui eu calculei a porcentagem = 0.1

    // 500 * 0.1 = 50
    let adicional = salario * porcentagem; // Aqui eu estou calculando o valor que será aumentado

    //  500 + 50 
    let resultado = salario + adicional;  // Aqui estou somando o aumento com o salário atual


    // 550
    console.log(`O aumento foi de R$ ${resultado}.`)

}

aumentoSalario(500, 10);
