const cores = ["vermelho", "preto", "branco"];

console.log(cores.length); // tamanho do array

cores[2] = "laranja"; // altera

cores[cores.length] = "azul"; // adiciona no final
cores.push("roxo"); // adiciona no final

cores.unshift("amarelo"); // adiciona no inicio

cores.pop(); // remove o último elemento
const temp = cores.pop(); // coloca o elemento removido em uma variável

cores.shift(); // remove o primeiro elemento
const temp2 = cores.shift(); // coloca o elemento removido em uma variável

delete cores[2]; // deleta o conteúdo, indice undefined

console.log(cores);

console.log(cores.slice(0, -3)); // fatia a string
