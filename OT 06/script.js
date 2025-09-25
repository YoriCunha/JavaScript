let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};

console.log(carro.modelo);

carro.cor = "preto";
carro.ano = 2023;
console.log(carro);

let calculadora = {
    soma: function (a, b) {
        return a + b;
    }
};

console.log(calculadora.soma(5, 3));

for (let prop in carro) {
    if (prop === "marca") {
        carro[prop] = "Volkswagen";
    } else if (prop === "modelo") {
        carro[prop] = "Jetta";
    } else if (prop === "ano") {
        carro[prop] = 2024;
    }
}

let livro = {
    titulo: "A Biblia",
    autor: "Deus",
}

console.log(livro);

const novoTitulo = "A Biblia Sagrada";

const mudaTitulo = (livro, novoTitulo) =>{
    livro.titulo = novoTitulo;
}
mudaTitulo(livro, novoTitulo);
console.log(livro);

let moto = {
    marca: "Honda",
    modelo: "CB500F",
    ano: 2021
}
Object.keys(moto).forEach((key) => {
    console.log(key, moto[key]);
});
Object.values(moto).forEach((value) => {
    console.log(value);
});