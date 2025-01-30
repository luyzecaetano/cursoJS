function funcao() {
  console.log("oi");
}
funcao("teste");
///////////////////////////
function funcao2() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }

  console.log(total);
}
funcao2(1, 2, 3, 4, 5, 6, 7);
///////////////////////////
function funcao3(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3);
///////////////////////////
const conta = function (operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "*") acumulador *= numero;
    if (operador === "/") acumulador /= numero;
  }

  console.log(acumulador);
};
conta("*", 10, 20, 30, 40, 50);
///////////////////////////
const conta1 = function (operador, acumulador, ...numeros) {
  console.log(arguments);
};
conta1("+", 1, 20, 30, 40, 50);
///////////////////////////
