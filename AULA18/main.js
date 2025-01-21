const inputTarefa = document.querySelector(".input-tarefa"); //input
const btnTarefa = document.querySelector(".btn-tarefa"); // button "+"
const tarefas = document.querySelector(".tarefas"); // ul (corpo)

// eventos de mouse/teclado
inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    //enter
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("btn-apagar")) {
    el.parentElement.remove();
  }
});
//

// funções que criam elementos
function criaDiv() {
  //div
  const div = document.createElement("div");
  div.classList.add("li-checkbox");
  return div;
}
function criaCheck() {
  //checklist
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  return checkbox;
}
function criaLi() {
  //li
  const li = document.createElement("li");
  return li;
}
function criaBtnApagar() {
  //button
  const apagar = document.createElement("button");
  apagar.classList.add("btn-apagar");
  return apagar;
}
//

// adicionar os elementos e criar tarefa
function criaTarefa(textoInput) {
  // chamada de funções
  const div = criaDiv();
  const checkbox = criaCheck();
  const li = criaLi();
  li.innerText = textoInput; // coloca o texto do input no elemento li
  const apagar = criaBtnApagar();

  // junção dos elementos -> div(checkbox - li -- button)
  div.appendChild(checkbox);
  div.appendChild(li);
  div.appendChild(apagar);
  tarefas.appendChild(div); // insere a div formada no elemento ul

  limpaInput(); // limpa input após inserir tarefa
}

function limpaInput() {
  // limpa input após inserir tarefa
  inputTarefa.value = "";
  inputTarefa.focus();
}
