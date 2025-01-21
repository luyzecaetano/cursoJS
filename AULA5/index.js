const pessoa = {
  // nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
};

const { sobrenome: sb = '', idade = 'null'} = pessoa;
console.log(sb, idade);

const { endereco: { rua, numero }, endereco } = pessoa;
console.log(rua, numero, endereco);

const { nome, ...resto } = pessoa;
console.log(resto);