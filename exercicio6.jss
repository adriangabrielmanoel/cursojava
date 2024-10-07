const readline = require('readline');

 const rl = readline.createInterface({
     input: process.stdin,
      output: process.stdout
       });

       // Pedir ao usuario para inserir o nome 
       rl.question('Insira seu nome:', (nome) => {
         // Exibir o nome em maiusculas console.log('Seu nome em maiusculas: + nome.toUpperCase())
          // Contar o numero de letras (sem espacos)
           let numLetras nome.replace(/\s+/g, '").length;
            console.log('Numero de letras no nome: numLetras);
             // Exibir a primeira letra do nome 
             console.log ('A primeira letra do seu nome : nome.charAt(0));
             
              rl.close(); });