// Padaria, Posto de gasolina, Academia

let nomeCliente = "Gabriel";

function chamaCliente (nome) {
    console.log(`Sr(a). ${nome} seu lanche está pronto`);
    return `Sr(a). ${nome} seu lanche está pronto`;
}

function formaPagamento(pagamento, cliente) {
    if (pagamento == "debito") {
        console.log("Pagamento efetuado no débito!" + cliente);
    } else if (pagamento == "credito") {
        console.log("Pagamento efetuado no crédito!"  + cliente );
    } else {
        console.log("Pagamento efetuado no PIX" + cliente);
    }
}

chamaCliente("Douglas");

formaPagamento("credito", "Rayssa");

// Forma de pagamento
// Quantos lanches foram vendidos
// A média do valor da conta, ou seja 10 + 5 + 15 = 30 / 3 = 10
// Qual lanche a pessoa quer, e usar um IF ELSE, Switch