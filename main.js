let ultimaFechaHora = null;

function executeActions(ultimaOrden) {
  const encenderLuzSala = "enciende la luz de la sala";
  const apagarLuzSala = "apaga la luz de la sala";

  const encenderLuzComedor = "enciende la luz del comedor";
  const apagarLuzComedor = "apaga la luz del comedor";

  const encenderLucesJardin = "enciende las luces del jardín";
  const apagarLucesJardin = "apaga las luces del jardín";

  const encenderVentilador = "enciende el ventilador";
  const apagarVentilador = "apaga el ventilador";

  const encenderCamaras = "enciende las cámaras de seguridad";
  const apagarCamaras = "apaga las cámaras de seguridad";

  const abrirCortinas = "abre las cortinas";
  const cerrarCortinas = "cierra las cortinas";

  const encenderAlarma = "enciende la alarma";
  const apagarAlarma = " la alarma";

  let mostrarOrden = ultimaOrden;
  if (ultimaOrden.includes(encenderLuzSala)) {
    const focosEncendidos = document.querySelectorAll(".foco-encendido-sala1");
    focosEncendidos.forEach(function (foco) {
      foco.style.display = "block"; // Muestra la imagen del foco encendido
    });
    const focosApagados = document.querySelectorAll(".foco-apagado-sala1");
    focosApagados.forEach(function (foco) {
      foco.style.display = "none"; // Oculta la imagen del foco apagado
    });
    console.log("Se ha encendido la luz de la sala");
  } else if (ultimaOrden.includes(apagarLuzSala)) {
    const focosEncendidos = document.querySelectorAll(".foco-encendido-sala1");
    focosEncendidos.forEach(function (foco) {
      foco.style.display = "none"; // Oculta la imagen del foco encendido
    });
    const focosApagados = document.querySelectorAll(".foco-apagado-sala1");
    focosApagados.forEach(function (foco) {
      foco.style.display = "block"; // Muestra la imagen del foco apagado
    });
    console.log("Se ha apagado la luz de la sala");
  } else if (ultimaOrden.includes(encenderLuzComedor)) {
    const focosEncendidos = document.querySelectorAll(
      ".foco-encendido-comedor"
    );
    focosEncendidos.forEach(function (foco) {
      foco.style.display = "block"; // Muestra la imagen del foco encendido
    });
    const focosApagados = document.querySelectorAll(".foco-apagado-comedor");
    focosApagados.forEach(function (foco) {
      foco.style.display = "none"; // Oculta la imagen del foco apagado
    });
    console.log("Se ha encendido la luz de la sala");
  } else if (ultimaOrden.includes(apagarLuzComedor)) {
    const focosEncendidos = document.querySelectorAll(
      ".foco-encendido-comedor"
    );
    focosEncendidos.forEach(function (foco) {
      foco.style.display = "none"; // Oculta la imagen del foco encendido
    });
    const focosApagados = document.querySelectorAll(".foco-apagado-comedor");
    focosApagados.forEach(function (foco) {
      foco.style.display = "block"; // Muestra la imagen del foco apagado
    });
    console.log("Se ha apagado la luz de la sala");
  } else if (ultimaOrden.includes(encenderLucesJardin)) {
    const focosEncendidos = document.querySelectorAll(
      ".foco-encendido-patio1, .foco-encendido-patio2, .foco-encendido-patio3, .foco-encendido-patio4, .foco-encendido-patio5"
    );
    focosEncendidos.forEach(function (foco) {
      foco.style.display = "block"; // Muestra la imagen del foco encendido
    });
    const focosApagados = document.querySelectorAll(
      ".foco-apagado-patio1, .foco-apagado-patio2, .foco-apagado-patio3, .foco-apagado-patio4, .foco-apagado-patio5 "
    );
    focosApagados.forEach(function (foco) {
      foco.style.display = "none"; // Oculta la imagen del foco apagado
    });
    console.log("Se ha encendido las luces del jardin");
  } else if (ultimaOrden.includes(apagarLucesJardin)) {
    const focosEncendidos = document.querySelectorAll(
      ".foco-encendido-patio1, .foco-encendido-patio2, .foco-encendido-patio3, .foco-encendido-patio4, .foco-encendido-patio5"
    );
    focosEncendidos.forEach(function (foco) {
      foco.style.display = "none"; // Muestra la imagen del foco encendido
    });
    const focosApagados = document.querySelectorAll(
      ".foco-apagado-patio1, .foco-apagado-patio2, .foco-apagado-patio3, .foco-apagado-patio4, .foco-apagado-patio5 "
    );
    focosApagados.forEach(function (foco) {
      foco.style.display = "block"; // Oculta la imagen del foco apagado
    });
    console.log("Se han apagado las luces del jardin");
  } else if (ultimaOrden.includes(encenderVentilador)) {
    const focosEncendidos = document.querySelectorAll(".ventilador-encendido");
    focosEncendidos.forEach(function (foco) {
      foco.style.display = "block"; // Muestra la imagen del foco encendido
    });
    const focosApagados = document.querySelectorAll(".ventilador-apagado");
    focosApagados.forEach(function (foco) {
      foco.style.display = "none"; // Oculta la imagen del foco apagado
    });
    console.log("Se ha encendido las luces del jardin");
  } else if (ultimaOrden.includes(apagarVentilador)) {
    const focosEncendidos = document.querySelectorAll(".ventilador-encendido");
    focosEncendidos.forEach(function (foco) {
      foco.style.display = "none"; // Muestra la imagen del foco encendido
    });
    const focosApagados = document.querySelectorAll(".ventilador-apagado");
    focosApagados.forEach(function (foco) {
      foco.style.display = "block"; // Oculta la imagen del foco apagado
    });
    console.log("Se ha encendido las luces del jardin");
  } else if (ultimaOrden.includes(encenderCamaras)) {
    const focosEncendidos = document.querySelectorAll(
      ".camara-encendida1, .camara-encendida2, .camara-encendida3 "
    );
    focosEncendidos.forEach(function (foco) {
      foco.style.display = "block"; // Muestra la imagen del foco encendido
    });
    const focosApagados = document.querySelectorAll(
      ".camara-apagada1, .camara-apagada2, .camara-apagada3"
    );
    focosApagados.forEach(function (foco) {
      foco.style.display = "none"; // Oculta la imagen del foco apagado
    });
    console.log("Se ha encendido las camaras");
  } else if (ultimaOrden.includes(apagarCamaras)) {
    const focosEncendidos = document.querySelectorAll(
      ".camara-encendida1, .camara-encendida2, .camara-encendida3 "
    );
    focosEncendidos.forEach(function (foco) {
      foco.style.display = "none"; // Muestra la imagen del foco encendido
    });
    const focosApagados = document.querySelectorAll(
      ".camara-apagada1, .camara-apagada2, .camara-apagada3"
    );
    focosApagados.forEach(function (foco) {
      foco.style.display = "block"; // Oculta la imagen del foco apagado
    });
    console.log("Se han apagado las camaras");
  } else if (ultimaOrden.includes(abrirCortinas)) {
    const focosEncendidos = document.querySelectorAll(
      ".cortina-abierta1, .cortina-abierta2, .cortina-abierta3 "
    );
    focosEncendidos.forEach(function (foco) {
      foco.style.display = "block"; // Muestra la imagen del foco encendido
    });
    const focosApagados = document.querySelectorAll(
      ".cortina-cerrada1, .cortina-cerrada2, .cortina-cerrada3"
    );
    focosApagados.forEach(function (foco) {
      foco.style.display = "none"; // Oculta la imagen del foco apagado
    });
    console.log("Se han abierto las cortinas");
  } else if (ultimaOrden.includes(cerrarCortinas)) {
    const focosEncendidos = document.querySelectorAll(
      ".cortina-abierta1, .cortina-abierta2, .cortina-abierta3 "
    );
    focosEncendidos.forEach(function (foco) {
      foco.style.display = "none"; // Muestra la imagen del foco encendido
    });
    const focosApagados = document.querySelectorAll(
      ".cortina-cerrada1, .cortina-cerrada2, .cortina-cerrada3"
    );
    focosApagados.forEach(function (foco) {
      foco.style.display = "block"; // Oculta la imagen del foco apagado
    });
    console.log("Se han cerrado las cortinas");
  } else {
    console.log("Orden no reconocida:", ultimaOrden);
  }

  const ordenElement = document.getElementById("orden");
  ordenElement.innerText = mostrarOrden;
  ordenElement.classList.add("recognized");

  setTimeout(() => {
    ordenElement.classList.remove("recognized");
  }, 1000);

  console.log("Ejecutando acciones para:", ultimaOrden);
}

function obtenerUltimaOrden() {
  axios
    .get("https://660b579accda4cbc75dcaf79.mockapi.io/Orders")
    .then(function (response) {
      if (response.data.length > 0) {
        const ultimaOrden = response.data[response.data.length - 1].order;
        const ultimaFechaHoraOrden =
          response.data[response.data.length - 1].dateTime;

        if (ultimaFechaHora !== ultimaFechaHoraOrden) {
          executeActions(ultimaOrden);
          ultimaFechaHora = ultimaFechaHoraOrden;
        } else {
          console.log(
            "La última orden es la misma que la anterior. No se ejecutan acciones."
          );
        }
      } else {
        console.log("No hay registros disponibles");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

setInterval(obtenerUltimaOrden, 2000);
