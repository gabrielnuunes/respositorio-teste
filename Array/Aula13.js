//                 0         1          2          3          4         5 
const alunos = [ "Gabriel", "CAMILA", "Rayssa", "Elivelton", "Ariel", "Jason" ]; // Array

let indice = 4;

//console.log(alunos[0]); // Gabriel
//console.log(alunos[1]); // CAMILA
//console.log(alunos[2]); // Rayssa

//console.log(alunos["3"]); // Elivelton
//console.log(alunos[3.0]); // Elivelton
//console.log(alunos[3]); // Elivelton

//console.log(`O(A) aluno(a) na posição ${indice} é o aluno(a) ${alunos[indice]} !`); // Elivelton
//console.log(alunos[indice]); // Elivelton


//                 0      0   <= 5      +1         // 1ª vez
//                 1      1   <= 5    1 + 1 = 2    // 2ª vez
//                 2      2   <= 5    2 + 1 = 3    // 3ª vez
//                 3      3   <= 5    3 + 1 = 4    // 4ª vez
//                 4      4   <= 5    4 + 1 = 5    // 5ª vez

//                 0         1          2          3          4         5 
const alunos2 = [ "Gabriel", "CAMILA", "Rayssa", "Elivelton", "Ariel", "Jason", "Carlos" ]; // Array

for (let posicao = 0; posicao <= 5; posicao++) {
    console.log( `O(A) aluno(a) na posição ${posicao} será o(a) ${alunos2[posicao]}!`);
}

// Vou mostrar um FOR que só o Array tem!

alunos2.push(10); // Esta função serve para adicionar um elemento no final
//console.log(alunos2);

alunos2.push("Rosangela;");
console.log(alunos2);

alunos2.pop(); // Esta função serve para remover o último elemento
console.log(alunos2);

// Esta função ela verifica se o valor passado existe no array
console.log(alunos2.includes(10));
console.log(alunos2.includes(5));

//Esta função separa os elementos pelo valor que a gente quiser 
console.log(alunos2.join(" / "));

console.log(alunos.pop(0));
console.log(alunos2);

//Esta função serve para mostrar o tamanho do nosso array
console.log(alunos2.length);