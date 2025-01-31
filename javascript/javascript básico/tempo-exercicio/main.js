const texto = document.querySelector(".container h1");
const data = new Date();

texto.innerHTML = data.toLocaleString("pt-BR", {
  dateStyle: "full",
  timeStyle: "short",
});
