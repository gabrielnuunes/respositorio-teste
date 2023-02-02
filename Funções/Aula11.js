// Exemplo sem função 



function soma () {
    console.log(num1 + num2);
}

let num1 = 10;
let num2 = 5;



dizBomDia();
dizBomDia();
dizBomDia();
dizBomDia();

// 1 Tipo - Com parâmetro e com saída

function soma ( a, b ) {
   
    // Return siginica que esta 
    // função irá devolver alguma coisa

    return a + b;  
}

soma(2,2)

console.log(soma(2,2));

// 2 tipo Com parâmetro e sem retorno

function exibirSubtracao (numero1, numero2) {

    console.log("O resultado da subtração é " + (numero1 - numero2 ));

}

exibirSubtracao(8, 2);
exibirSubtracao(10, 5);

// 3 Tipo - Sem parâmetro e com retorno

function multiplicaDoisECinco () {

    return 2 * 5;

}

function falaMengao () {

    return "Flamengo!";

}

console.log(falaMengao());

console.log(multiplicaDoisECinco());

// 4 Tipo - Sem parâmetro e sem retorno

function dizBomDia () {

    console.log("Bom dia!")

}

// 