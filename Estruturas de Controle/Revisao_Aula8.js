let conexoes = "2";

if ( conexoes == "direto") {

    console.log("Sem escalas");

} else if ( conexoes == "1") {
    
    console.log("1 parada");

} else {
    console.log("2 parada");
};

// --------------------------------

let pagamento = 0;

if ( pagamento == 1 ) {  // Se marcar opção 1 ele para aqui
    console.log("à vista");
}
else if ( pagamento >= 2 && pagamento <= 5 ) { // Qualquer número abaixo de 5
    console.log("Parcelado e sem Juros");
}
else if ( pagamento >= 6 && pagamento <= 12 ) { // Esta opção seria parcelada?
    console.log("Parcelado com Juros");

} else {
    console.log("Informe outra opção de pagamento")
}

// --------------------------------

let idade = 16;

if (idade > 15 && idade < 18 || idade > 70 ) {
    console.log("O voto é opcional");
}
else if (idade < 16) {
    console.log("Você não pode votar");
}
else {
    console.log("Você é obrigado a votar");
}