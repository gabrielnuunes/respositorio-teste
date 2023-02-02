//Estrutura condicional IF

//let combustivel = "alcool"; 

/*

if ( combustivel == "gasolina" ) {
    console.log("Abastecer gasolina!");
} else if (combustivel == "alcool"){
    console.log("Abastecer alcool!");
} else if (combustivel == "diesel"){
    console.log("Abastecer Diesel")
} else {
    console.log("Valor informado é inválido, favor informe outro valor")
}

*/

// Exemplo Calculadora

let operacao = "soma";
let numero1 = 10;
let numero2 = 5;

if ( operacao == "soma" ) {
    console.log("Operação de soma " + (numero1 + numero2));

} else if (operacao == "subtracao"){
    console.log("A subtração dos dois valores é " + (numero1 - numero2));

} else if (operacao == "multiplicacao"){
    console.log(`A multiplicação de ${numero1} por ${numero2} é igual a ${numero1 * numero2}`)

} else if (operacao == "divisao"){
    console.log("A divisão dos dois valores é " + (numero1 - numero2))
} else {
    console.log("Operação inválida, informe uma operação válida!")
}

let numero3 = 10;
let numero4 = 10;

// Aqui temos tipos diferentes, então ele ira colocar um ao lado do outro
console.log("Alguma coisa " + (numero3 + numero4) + " Outra coisa") 

//Aqui temos tipos iguais então ele irá somar
console.log( numero3 + numero4 + numero5) 

let celular = "Samsung";

if ( celular == "Samsung" ); {
    console.log("Sim o seu celular é Samsung!")
}

