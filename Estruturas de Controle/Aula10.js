// Estrutura do FOR

// Aqui estou declarando a variável 
let litros = 5;

// 40 é a capacidade do tanque
let abastecer = litros < 40;

// Eu abasteço o carro
litros++

for ( let litros = 5; litros <= 40; litros++) {
    //console.log(litros);
}

// let nomes = "Gabriel", "Thiago", "Rosangela"

// 7, 6, 5, 4, 3, 2, 1, 0

for (let numero = 7; numero >= 0; numero--) {
    
    //console.log(numero)
    
}

// 0, 2, 4, 6, 8, 10

for ( let numero = 0; numero <= 10; numero += 2) {
    //console.log(numero);
}

//let soma = 1 + 1; // Aqui eu fiz uma operação

//let soma2 = soma + 2; // E aqui eu peguei o resultado e fiz a segunda operação


// FOR dentro de outro FOR

// o primeiro seria os dois alunos

// Eu tenho 2 alunos e cada aluno tem 2 notas
// Gabriel e a nota1 5.6 e a nota2 6.1
// Ariel e a nota1 6.8 e a nota2 5.4

for (let alunos = 1; alunos <= 2; alunos++) {
    //console.log("Aluno " + alunos);

    for ( notas = 1; notas <= 2; notas++ ){
        //console.log("A nota é " + notas);
    }

}

/*
while (nota) { // O while não sabe quanto vale a variavel nota

}

for (let nota = 5; ; nota++) { // O FOR precisa saber o quanto vale a variavel nota

}
*/

// Do While

// A diferença do While e do Do While 
// DO While - ele faz antes de verificar
// While - ele verifica antes de fazer

let passos = 40;

while (passos <= 50) { // O while não sabe quanto vale a variavel nota

    //console.log("Andou " + passos + " passos");
    passos++;

}

let hora = 9;

do {
    
    console.log("Agora são " + hora + " horas.");
    hora++;
    
} while (hora <= 12);



while (hora <= 12) {

    console.log("Agora são " + hora + " horas."); // Aqui não é obrigatorio
    hora++;

}

// Exemplo de calculadora

let sinal = "+";
let numero1 = 2;
let numero2 = 2;

if ( sinal == "+") {
    console.log("Operação de soma" + numero1 + numero2);
} else  {
    console.log("Operação de subtração");
}

switch (sinal) {
    case "+":
        console.log("Operação de soma");
        break;

    case "-":
        console.log("Operação de subtração");
        break;
}
