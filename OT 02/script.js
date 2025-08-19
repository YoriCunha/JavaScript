let animais = [];

animais.push("Cachorro");
animais.push("Gato");
animais.push("Coelho");
animais.push("Tartaruga");

animais.shift(); 
console.log(animais); 

animais.unshift("Peixe", "Papagaio");
console.log(animais);

animais[1] = "Girafa";
console.log(animais);   
console.log("Total de animais:", animais.length);


let frutas = ["Maçã", "Banana", "Laranja","Uva"];
console.log(frutas);
console.log("Total de frutas:",frutas.length);


for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}