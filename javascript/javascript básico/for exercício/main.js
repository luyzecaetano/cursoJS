const elementos = [
  {tag: 'p', texto: 'Qualquer texto 1.'},
  {tag: 'div', texto: 'Qualquer texto 2.'},
  {tag: 'section', texto: 'Qualquer texto 3.'},
  {tag: 'footer', texto: 'Qualquer texto 4.'}
]

const container = document.querySelector('.container')
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);

  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);
}

container.appendChild(div)