const comandos = require('readline-sync');

let propriedades = [];
let apoio = "";

while (apoio != 'exit'){

    apoio = comandos.question('Digite a propriedade: ')
    //comand -> font-size

    propriedades.push(apoio);

    apoio = comandos.question('Pressione >Enter< para adicionar item. Digite "exit" para finalizar.');
}

console.log(propriedades.sort().join('\n'));