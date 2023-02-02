// Estrutura Switch

let dataDeVencimento = 24;
let juros = 0;
let multa = 0;

switch (pagamento) {
    case 1:
        console.log("O pagamento será à vista");
    break;

    case 2: case 3: case 4: case 5:        
        console.log("O pagamento será parcelado sem juros");
    break;

    case 6: case 7: case 8: case 9: case 10: case 11: case 12: 
        console.log("O pagamento será parcelado com juros");
    break;

    default:
        console.log("A quantidade de parcelas solicitadas são inválidas")

}

//console.log("Final!")


// Outro exemplo com Switch

let horaDoDia = "madrugada"; // Manhã, Tarde e Noite

switch (horaDoDia) {
    case "manhã":
        console.log("Bom dia!");
    break;
    
    case "tarde":
        console.log("Boa tarde!");
    break;

    case "noite": 
        console.log("Boa noite");
    break;
    
    default:
        console.log("O horário do dia informado é inválido!")
}

