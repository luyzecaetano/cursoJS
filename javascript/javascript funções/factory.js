function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    fala(assunto) {
      return `${this.nome} está ${assunto}.`;
    },
    altura,
    peso,
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("maria", "luiza", 1.6, 46);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);
