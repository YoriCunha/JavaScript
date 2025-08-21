for (let i = 0; i < 10; i++) {
    console.log("Número:", i);
}

for (let i = 0; i < 20; i++) {
    if (i % 2 != 0) {
        console.log("impar:", i);
    }
}

let i = 0;
do {
    console.log("Número:", i);
    i++;
} while (i < 10);

for (let i = 0; i < 100; i++) {
    if (i == 50) {
        break;
    }
    console.log("Número:", i);
}