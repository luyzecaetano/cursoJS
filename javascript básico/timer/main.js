function relogio() {
  const relogio = document.querySelector(".relogio");
  let timer, segundos = 0;

  function setTimer() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = configTimer(segundos);
    })
  }

  function configTimer(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  document.addEventListener("click", function (event) {
    const e = event.target;

    if (e.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0;
    }
    
    if (e.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      setTimer();
    }

    if (e.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }
  });
} relogio()
