let saudacao = "Olá";
saudacao[0] = 'A';
console.log(saudacao);

let nome = "Maria";
let mensagem = "Oi, " + nome + "!";
console.log(mensagem);

let frase = "Aprendendo JavaScript em 2025!";
let ano = frase.slice(-5);
console.log(ano);

let novaFrase = frase.replace("2023", "2024");
console.log(novaFrase);

let grito = "olá".toUpperCase();
console.log(grito); 

let sussurro = "OI".toLowerCase();
console.log(grito);

let textoComEspacos = "   Olá, mundo!   ";
let textoSemEspacos = textoComEspacos.trim();
console.log(textoSemEspacos);

let poema = "Roses are red, \nViolets are blue.";
console.log(poema);

let citacao = "Ela disse: \"JavaScript é incrível!\"";
console.log(citacao);

let produto = "Node.js";
let versao = "v14.17.0";
let descricao = 'Estudando ${produto} na versão ${versao}';
console.log(descricao);



