// A culpa é da Camila

let dataDeHoje = 18;
let dataDeVencimento = 10;
let qntdDeDiasEmAtraso = 0;
let juros = 1.53;
let multa = 0;

qntdDeDiasEmAtraso = dataDeHoje - dataDeVencimento; // Aqui vamos descobrir a quantidade de dias em atraso

multa = qntdDeDiasEmAtraso * juros; // Aqui teremos o valor da multa

console.log(`O valor da multa é R$ ${multa} reais.`);
console.log(`A porcentagem do juros é ${multa}% reais.`);

// Se tiver até 5 dias de atraso a multa é de 1 real
// Se tiver de 6 a 10 dias de atraso a multa é de 1,50 

let vintePorcento =  (20/100);
console.log(vintePorcento);

console.log( 100 * vintePorcento + " reais");

