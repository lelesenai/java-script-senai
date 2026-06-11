// Exemplo 1: Declarand e inicializando um array vazio
console.log('\n---Exemplo 1: Array Vazio');
let meuArrayVazio = []
console.log(meuArrayVazio)

// Exemplo 2: Declarando arrays com elemento
console.log('\n-Exemplo 2: Array com Elementos');
let frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];
let numeros = ['10', '20', '30', '40', '50'];
let mistos = ['Texto', 123, true, null];
console.log('Frutas',frutas);
console.log('Números', numeros);
console.log('Misto',misto);

console.log('\n- Exemplo3: Acessando elementos por Índice');
console.log('Primeira fruta:, fruta[0]');
console.log('Terceiro número:', numeros[2]);

console.log('\n-Exemplo4: Modificando elementos');
frutas[1] = 'Pera';
console.log('Frutas modificadas', frutas)

console.log('\n-exemplo 5: Tamanho dos arrays');
console.log('Tamanho do array de frutas:',frutas.length);
