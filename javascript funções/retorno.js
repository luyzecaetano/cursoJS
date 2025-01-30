// return : retorna um valor e termina uma função
// function criaPessoa(nome, sobrenome) {
//   return { nome, sobrenome };
// }
// const p1 = criaPessoa("Luiz", "Otávio");

// console.log(p1);
///////////////////////////
function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);

console.log(duplica(3));
console.log(triplica(3));
