const readline= require("readline");
//configuracao para entrada de dados no terminal
const rl= readline.createInterface({
input: process.stidin,
 output:process.stdout,
})
//funcao para verificar se o numero e par
function ehPar(numero){
    return numero % 2 === 0;
  }

  //funcao para verificar se o numero e impar
  function ehImpar(numero){
return numero % 2 !== 0;

  }
// Pergunta os dois numeros e faz as verificacoes
 rl.question("Digite o primeiro numero: "), (input1) => { const num1 = parseInt(input1);}
