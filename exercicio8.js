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
 rl.question("Digite o segundo numero: "), (input2) => {

  const num2 = parseInt(input2);
  
  // Verificacoes booleanas
  
  let primeiroMaior = num1 > num2;
  
  let primeiroPar = ehPar(num1);
  
  let segundoImpar= ehImpar (num2);
  
  // Exibe os resultados das verificacoes
  
  console.log("O primeiro nimero  maior que o segundo?", primeiroMaior);
  
  console.log("O primeiro iuero e par?", primeiroPar);
  
  console.log("O segundo numero e impar?", segundoImpar);
  
  // Operadores logicos
  
  console.log("O primeiro numero e maior que o segundo e e par?", primeiroMaior && primeiroPar); console.log("O primeiro ou o segundo numero e par?", primeiroPar || ehPar (num2));
  
  rl.close();
  
  };
  
