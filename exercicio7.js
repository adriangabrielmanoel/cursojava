const readline = require('readline');
const rl = readline.createInterface({
    imput: process .stdin,
    output: process.stdout
});
// pedir ao usuariopara inserir o nome 
rl.question ('insrira seu nome ', (nome) => {
    //exibir o nome em maisculas 
    console.log('seu nome em maiusculas:' + nome .toUpperCase());
// contar o numerode letras (sem espacos)
let.numLetras=nome.replace(/\s+/g,'').length;
console.log('numero de letras no nome:' + numLetras);
//exibir a primeira a letra do nome 
console.log('a primeira letra do do seu nome é:'+nome.charAt(0));
rl.close();
});