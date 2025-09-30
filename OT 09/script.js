
let frutas = new Set();

frutas.add("Laranja");
frutas.add("Banana");
frutas.add("Maça");

frutas.add("Maça");
for (let fruit of frutas) {
    console.log(fruit);
}

console.log(frutas.has("Banana"));

frutas.delete("Maça")

for (let fruit of frutas) {
    console.log(fruit);
}

frutas.clear();
let number = [1,2,3,4,5,6,7,8,9,10];
let numero = new Set(number);

console.log(numero.size);

