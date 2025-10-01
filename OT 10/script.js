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

