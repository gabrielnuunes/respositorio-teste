//               0           1         2          3           4        5     
const alunos2 = [ "Gabriel", "CAMILA", "Rayssa", "Elivelton", "Ariel", "Jason" ]; // Array

for (let posicao = 0; posicao <= 5; posicao++) {
    console.log( `O(A) aluno(a) na posição ${posicao} será o(a) ${alunos2[posicao]}`);
}

// Vou mostrar um FOR que só o Array tem!

alunos2.push(10); // Esta função serve para adicionar um elemento no final
//console.log(alunos2);

alunos2.push("Rosangela;"); // Esta função serve para adicionar um elemento no final
console.log(alunos2);

alunos2.pop(); // Esta função serve para remover o último elemento
console.log(alunos2);

//DICA:
//o pop é para excluir o último 
//o push é pra adicionar alguém no final da fila

// Esta função ela verifica se o valor passado existe no array
console.log(alunos2.includes(10)); 
console.log(alunos2.includes(5));


let numeros = [1, 2, 3, 4,]
console.log(numeros)