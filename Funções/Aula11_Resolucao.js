// 1- Uma função que recebe uma String como parâmetro e retorna uma Saudação.

function saudacao ( falaOi ) {
    //console.log(falaOi);
}

//console.log(saudacao("Boa tarde!"));

// Uma boa prática é colocar nomes que se parecem com o que você quer fazer
function soma ( numero1, numero2 ) {

    console.log(numero1 + numero2);

}

soma(2,2);
soma(5,3);


// 2- Uma função que recebe uma idade e retorna esta idade em dias. 

let idade = 15;

// Com parametro e com retorno

function exibeIdade ( idade ) {
    return idade * 365;
}

// Com parametro e sem retorno

function exibeIdade2 ( idade ) {
    console.log(idade * 365);
}

// Sem parametro e com retorno

function exibeIdade3 (  ) {
    return idade * 365;
}

// Sem parametro e sem retorno

function exibeIdade4 ( ) {
    console.log(idade * 365);
}

// 3- Uma função que recebe um número e devolve o mês que combina com o número

let numero = 3; // Eu quero que mostre março

function devolveMes (numero) {

    // IF ELSE

    // Verificando antes 

    if (numero >= 1 && numero <= 12 ) {

        if (numero == 1) {
            console.log("O mês é janeiro");
        } else if (numero == 2) {
            console.log("O mês é fevereiro");
        } else if (numero == 3) {
            console.log("O mês é março");
        } else if (numero == 4) {
            console.log("O mês é abril");
        } else if (numero == 5) {
            console.log("O mês é maio");
        } else {
            console.log("Mês inválido, favor informe outro mês.")
        }

    } else  {
        console.log("Mês inválido, favor informe outro mês.")
    } 

}

