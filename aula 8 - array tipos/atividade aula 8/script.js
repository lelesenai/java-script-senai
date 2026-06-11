// Criando o array de produtos
let produtos = ["Teclado", "Mouse", "Monitor", "Fone de Ouvido", "Gabinete"];

// 1º Passo
console.log("Primeiro item:", produtos[0]);
console.log("Último item:", produtos[produtos.length - 1]);

// 2º Passo
// Substituindo "Gabinete" por "Webcam"
produtos[4] = "Webcam";

console.log("Array atualizado:");
console.log(produtos);

// 3º Passo
// Percorrendo o array com um loop for
for (let i = 0; i < produtos.length; i++) {
    console.log("Produto disponível:", produtos[i]);
}
Primeiro item: Teclado
Último item: Gabinete

Array atualizado:
[ 'Teclado', 'Mouse', 'Monitor', 'Fone de Ouvido', 'Webcam' ]

Produto disponível: Teclado
Produto disponível: Mouse
Produto disponível: Monitor
Produto disponível: Fone de Ouvido
Produto disponível: Webcam