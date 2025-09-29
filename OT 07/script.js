
// por em pratica //

let livro = new Map();
livro.set("O senhor dos aneis"," J.R.R. Tolkien");
livro.set("Harry Potter"," J.K. Rowling");
livro.set("O hobbit"," J.R.R. Tolkien");

console.log(livro.get("Harry Potter")); // J.K. Rowling

for (let [titulo,autor] of livro) {
    console.log(`${titulo} foi escrito por ${autor}`);
}

console.log(livro.size); // 3
livro.delete("O hobbit");

for (let [titulo,autor] of livro) {
    console.log(`${titulo} foi escrito por ${autor}`);
}

console.log(livro.has("O Hobbit"));

let colecao = new Map();
colecao.set("carro"," fusca");
colecao.set("ano"," 2024");

let obj = Object.fromEntries(colecao);
console.log(obj); // { carro: ' fusca', ano: ' 2024' }
