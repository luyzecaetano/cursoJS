falaTeste(); // pode chamar antes ou depois de declarar a função
function falaTeste() {
  console.log("teste");
}

// function expression
const falaOi = function () {
  console.log("Oi");
};

// first-class objects (objetos de primeira classe): exemplo
// function expression
const souUmDado = function () {
  console.log("Sou um dado.");
};
// passa a função "souUmDado" como argumento
function executaFuncao(funcao) {
  console.log("Vou executar a função abaixo:");
  funcao(); //chama a função "souUmDado"
}
executaFuncao(souUmDado); // função "executaFuncao" chama a função "souUmDado"

// arrow function
const arrowFunction = () => {
  console.log("Sou uma arrow function");
};

// dentro de um objeto
const obj = {
  falar() {
    console.log("Estou falando...");
  },
};
