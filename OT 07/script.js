let map = new map();
map.set("chave1","valor1");
map.set("chave2","valor2");

console.log(map.get("chave1")); // valor1
console.log(map.get("chave2")); // valor2

for (let [chave,valor] of map) {
    console.log(`${chave}: ${valor}`);
}

console.log(map.size); // mostra quantos pares chave-valor tem no Map
map.delete("chave2"); // remove um par baseado na chave
console.log(map.has("chave2")); // verifica se o Map tem a chave

let mapParaObjeto = Object.fromEntries(map);
console.log(mapParaObjeto);

let chavesArray = [...map.keys()];
console.log(chavesArray);