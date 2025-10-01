class pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log('Oi, meu nome é ${this.nome} e tenho ${this.idade} anos.');
    }
}

let joao = new pessoa("João" ,25);

joao.falar();

class Estudante extends pessoa {
    constructor(nome,idade,curso) {
        super(nome, idade);
        this.curso = curso;
    }

    estudar(){
        console.log("Estudando ${this.curso}");
    }
}

let ana = new Estudante("Ana", 22, "Matemática");

class Utilitario {
    static numeroAleatorio() {
        return Math.floor(Math.random() * 100);
    }
} // não precisa instanciar a classe para usar o método

console.log(Utilitario.numeroAleatorio());


class ContaBancaria{
    #saldo;

    constructor(saldoInicial){
        this.#saldo = saldoInicial;
    }

    depositar(valor){
        this.#saldo += valor;
    }

    getSaldo(){
        return this.#saldo;
    }
}

let conta = new ContaBancaria(1000);
conta.depositar(500);
console.log(conta.getSaldo());