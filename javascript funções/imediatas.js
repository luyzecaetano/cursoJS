(function () {
  const nome = "b";
})(); // função chamada imediatamente

const nome = "Qualquer coisa";

////////////

(function (idade, peso, altura) {
  const sobrenome = "Miranda";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Luiz"));
  }

  falaNome();
  console.log(idade, peso, altura);
})(20, 45, 1.64);
