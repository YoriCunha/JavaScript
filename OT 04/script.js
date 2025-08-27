
let age = 65;

if (age < 13) {
    console.log("Criança")
} else if (age >= 13 && age <= 17) {
    console.log("Adolescente")
} else if (age >= 18 && age <= 64) {
    console.log("Aduto")
} else if (age >= 65) {
    console.log("Velho")
}

let number = prompt("Digite um numero: ");
switch (number) {
    case "1":
        alert("Você errou!");
        break;

    case "2":
        alert("Você errou!");
        break;

    case "3":
        alert("Você errou!");
        break;

    case "4":
        alert("Você acertou!");
        break;

    case "5":
        alert("Você errou!");
        break;
}

let nota = prompt("Digite sua nota: ");
switch (true) {
    case (nota < 6):
        alert("Reprovado");
        break;
    
    case (nota >= 6 && nota <= 7):
        alert("Recuperação");
        break;

    case (nota > 7):
        alert("Aprovado");
        break;
}
