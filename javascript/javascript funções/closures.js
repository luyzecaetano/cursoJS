function retornaFuncao() {
  const nome = "Luyze";
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao();
console.log(funcao());
