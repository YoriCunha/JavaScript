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

class Animal {
    constructor(nome,som){
        this.nome = nome;
        this.som = som;
    }
    falar(){
    console.log("${this.nome} faz ${this.som}");
    }
}

let dog = new Animal("Rex", "Au Au");
dog.falar();

class veiculo {
    constructor(marca, modelo, velocidade){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }

    descrever(){
        console.log("Veículo: ${this.marca} ${this.modelo}, Velocidade: ${this.velocidade} km/h");
    }
}

let carro = new veiculo("Toyota", "Corolla", 180);
carro.descrever();

class estudante {
    constructor(nome, notas){
        this.nome = nome;
        this.notas = notas;
    }

    media(){
        let soma = this.notas.reduce((a, b) => a + b, 0);
        return soma / this.notas.length;
    }
}
let aluno = new estudante("Carlos", [8, 7.5, 9, 6]);
console.log("Média de ${aluno.nome}: ${aluno.media()}");

class Utilitario {
    static converterCelsiusParaFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }
}

console.log(Utilitario.converterCelsiusParaFahrenheit(25)); // 77

class Jogo {
     
    static adivinharNumero() {
        const numero = Math.floor(Math.random() * 10) + 1;
        const palpite = Number(prompt("Adivinhe o número entre 1 e 10:"));
        if (palpite === numero) {
            console.log("Parabéns! Você acertou.");
            return true;
        } else {
            console.log(`Errado! O número era ${numero}.`);
            return false;
        }
    }
}
Jogo.adivinharNumero();

class ContaBancaria {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(){
        const acao = Number(prompt("Deseja sacar qual valor: ?"));
        if (acao >= saldo) {
            console.log("Saldo Indisponivel!");
            return false;
        } else {
            console.log("Confirme seu saque!");
            return true;
        }
    }
}

let account = new ContaBancaria (1500);
account.sacar();