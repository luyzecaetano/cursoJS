const num = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero');
const texo = document.getElementById("texto");

numeroTitulo.innerHTML = num;
texto.innerHTML = `<p>Raiz Quadrada: ${Math.sqrt(num)}<br />
${num} é inteiro: ${Number.isInteger(num)}<br />
É NaN: ${Number.isNaN(num)}<br />
Arredondado para baixo: ${Math.floor(num)}<br />
Arredondado para cima: ${Math.ceil(num)}<br />
Com duas casas decimais: ${num.toFixed(2)}</p>`;