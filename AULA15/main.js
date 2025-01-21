// Escreva uma função que recebe um número e
// retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzzq
// Número NÃO é divisivel por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

function fizzBuzz(n) {
  if (typeof n !== 'number') return NaN;
  if (n % 3 == 0 && n % 5 == 0) return "FizzBuzz";
  if (n % 5 == 0) return "Buzz";
  if (n % 3 == 0) return "Fizz";
  return n;
}

for (let i = 0; i <= 100; i++) {  
  console.log(i, fizzBuzz(i));
}