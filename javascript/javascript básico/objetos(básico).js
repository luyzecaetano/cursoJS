const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,

  fala() {
    console.log(`A minha idade atual é ${this.idade}.`);
  },

  incrementaIdade() {
    this.idade++;
  },
};

pessoa.fala();
pessoa.incrementaIdade();

function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
  };
}

const pessoa1 = criaPessoa("Luiz", "Miranda", 24);
const pessoa2 = criaPessoa("Maria", "Oliveira", 54);
const pessoa3 = criaPessoa("Luana", "Pinheiro", 71);
const pessoa4 = criaPessoa("Mateo", "Borges", 36);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade);
console.log(pessoa4.nome, pessoa4.sobrenome, pessoa4.idade);

///////////////////////////
// atribuição via desestruturação
const pessoas = {
  // nome: 'Luiz',
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};

const { sobrenome: sb = "", idade = "null" } = pessoa;
console.log(sb, idade);

const {
  endereco: { rua, numero },
  endereco,
} = pessoa;
console.log(rua, numero, endereco);

const { nome, ...resto } = pessoa;
console.log(resto);
