let numero = [1,2,3];
let maisNumeros = [...numeros, 4, 5, 6];
console.log(maisNumeros);

let pessoa = { nome: 'João', idade: 25};
let pessoaAtualizada = { ...pessoa, idade: 26};
console.log(pessoaAtualizada);

let inicio = [1, 2];
let fim = [3, 4];
let combinado = [...inicio, ...fim];
console.log(combinado);

let produtos1 = ["Limão", "Banana"];
let produtos2 = ["Alface", "Tomate"];
let lista = [...produtos1, ...produtos2];