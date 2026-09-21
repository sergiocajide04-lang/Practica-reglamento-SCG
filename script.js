/* ============================================================================
 * ÁREA ÁRBITRO — Lógica de la aplicación
 *
 * Organización del archivo:
 *   1.  Configuración y estado
 *   2.  Utilidades (DOM, aleatoriedad, formato)
 *   3.  Navegación entre pantallas
 *   4.  Renderizado de preguntas y corrección
 *   5.  Modos de práctica (fácil / medio / difícil)
 *   6.  Modo examen
 *   7.  Resultado y revisión de fallos
 *   8.  Estadísticas persistentes (localStorage)
 *   9.  Arranque y enlace de eventos
 * ==========================================================================*/

(function () {
  "use strict";

  /* ------------------- 1. CONFIGURACIÓN Y ESTADO ----------------------- */

  var CONFIG = {
    EXAMEN_TOTAL: 30,            // preguntas por examen, tomadas al azar del banco completo
    EXAMEN_APROBADO_MIN: 28,     // aciertos mínimos para aprobar
    LETRAS: ["A", "B", "C", "D", "E", "F"],
    CLAVE_STORAGE: "areaArbitro.estadisticas.v1"
  };

  var Banco = window.BancoPreguntas;

  // Estado de una sesión de práctica libre
  var practica = {
    nivel: null,
    cola: [],          // preguntas barajadas aún no mostradas en esta sesión
    actual: null,
    numero: 0,
    aciertos: 0,
    fallos: 0,
    respondida: false
  };

  // Estado de una sesión de examen
  var examen = {
    preguntas: [],
    indice: 0,
    aciertos: 0,
    fallos: 0,
    respuestas: [],    // { pregunta, elegida, correcta }
    respondida: false
  };

  /* ---------------------------- 2. UTILIDADES --------------------------- */

  function $(id) { return document.getElementById(id); }

  function crear(tag, clase, texto) {
    var el = document.createElement(tag);
    if (clase) el.className = clase;
    if (texto !== undefined && texto !== null) el.textContent = texto;
    return el;
  }

  function vaciar(el) { while (el.firstChild) el.removeChild(el.firstChild); }

  /** Baraja una copia del array (Fisher–Yates). */
  function barajar(array) {
    var copia = array.slice();
    for (var i = copia.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copia[i];
      copia[i] = copia[j];
      copia[j] = tmp;
    }
    return copia;
  }

  /** Toma n elementos al azar sin repetición. */
  function tomarAlAzar(array, n) {
    return barajar(array).slice(0, n);
  }

  function porcentaje(aciertos, total) {
    if (!total) return 0;
    return (aciertos / total) * 100;
  }

  function formatearPorcentaje(valor) {
    return valor.toFixed(1).replace(".", ",") + " %";
  }

  function letraDe(indice) {
    return CONFIG.LETRAS[indice] || String(indice + 1);
  }

  /* ---------------------- 3. NAVEGACIÓN DE PANTALLAS -------------------- */

  var PANTALLAS = [
    "pantalla-inicio",
    "pantalla-practica",
    "pantalla-examen-intro",
    "pantalla-examen",
    "pantalla-resultado",
    "pantalla-revision"
  ];

  function mostrarPantalla(id) {
    PANTALLAS.forEach(function (p) {
      var el = $(p);
      if (!el) return;
      var activa = p === id;
      el.hidden = !activa;
      el.classList.toggle("pantalla--activa", activa);
    });
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function irAInicio() {
    refrescarEstadisticasInicio();
    mostrarPantalla("pantalla-inicio");
  }

  /* ------------- 4. RENDERIZADO DE PREGUNTAS Y CORRECCIÓN --------------- */

  /**
   * Pinta una pregunta con sus opciones dentro de un contenedor.
   * `alResponder(indiceElegido)` se invoca una sola vez por pregunta.
   */
  function renderizarPregunta(contenedorOpciones, pregunta, alResponder) {
    vaciar(contenedorOpciones);

    pregunta.opciones.forEach(function (textoOpcion, indice) {
      var boton = crear("button", "opcion");
      boton.type = "button";
      boton.dataset.indice = String(indice);

      boton.appendChild(crear("span", "opcion__letra", letraDe(indice)));
      boton.appendChild(crear("span", "opcion__texto", textoOpcion));
      boton.appendChild(crear("span", "opcion__marca", ""));

      boton.addEventListener("click", function () {
        alResponder(indice);
      });

      contenedorOpciones.appendChild(boton);
    });
  }

  /** Aplica los colores de corrección y bloquea las opciones. */
  function pintarCorreccion(contenedorOpciones, indiceElegido, indiceCorrecto) {
    var botones = contenedorOpciones.querySelectorAll(".opcion");
    Array.prototype.forEach.call(botones, function (boton, indice) {
      boton.disabled = true;
      var marca = boton.querySelector(".opcion__marca");

      if (indice === indiceCorrecto) {
        boton.classList.add("opcion--correcta");
        if (marca) marca.textContent = "✔";
      } else if (indice === indiceElegido) {
        boton.classList.add("opcion--fallada");
        if (marca) marca.textContent = "✘";
      } else {
        boton.classList.add("opcion--apagada");
      }
    });
  }

  /**
   * Construye el bloque de feedback.
   * La explicación solo se muestra si existe en los datos: nunca se inventa.
   */
  function pintarFeedback(contenedor, pregunta, indiceElegido) {
    var acierto = indiceElegido === pregunta.respuestaCorrecta;
    var correcta = pregunta.opciones[pregunta.respuestaCorrecta];

    vaciar(contenedor);
    contenedor.hidden = false;
    contenedor.className = "feedback " + (acierto ? "feedback--ok" : "feedback--ko");

    var titulo = crear("p", "feedback__titulo");
    titulo.appendChild(crear("span", null, acierto ? "✅" : "❌"));
    titulo.appendChild(crear("span", null, acierto ? "¡Respuesta correcta!" : "Respuesta incorrecta"));
    contenedor.appendChild(titulo);

    if (!acierto) {
      var tuya = crear("div", "feedback__bloque");
      tuya.appendChild(crear("span", "feedback__etiqueta", "Tu respuesta"));
      tuya.appendChild(crear("span", null, letraDe(indiceElegido) + ") " + pregunta.opciones[indiceElegido]));
      contenedor.appendChild(tuya);
    }

    var buena = crear("div", "feedback__bloque");
    buena.appendChild(crear("span", "feedback__etiqueta", "Respuesta correcta"));
    var b = crear("b", null, letraDe(pregunta.respuestaCorrecta) + ") " + correcta);
    buena.appendChild(b);
    contenedor.appendChild(buena);

    if (pregunta.explicacion) {
      var porque = crear("div", "feedback__bloque");
      porque.appendChild(crear("span", "feedback__etiqueta", "¿Por qué? · Según el reglamento"));
      porque.appendChild(crear("span", null, pregunta.explicacion));
      contenedor.appendChild(porque);
    }

    return acierto;
  }

  /* ------------------------ 5. MODOS DE PRÁCTICA ------------------------ */

  function iniciarPractica(nivel) {
    practica.nivel = nivel;
    practica.cola = [];
    practica.actual = null;
    practica.numero = 0;
    practica.aciertos = 0;
    practica.fallos = 0;
    practica.respondida = false;

    var chip = $("practicaNivel");
    chip.textContent = "Nivel " + Banco.ETIQUETAS_NIVEL[nivel];
    chip.className = "chip " + ({ facil: "chip--verde", medio: "chip--ambar", dificil: "chip--rojo" }[nivel] || "");

    mostrarPantalla("pantalla-practica");
    siguientePreguntaPractica();
  }

  /**
   * Devuelve la siguiente pregunta del nivel.
   * La cola se rellena barajada; cuando se agota, se vuelve a barajar todo
   * el nivel, de forma que no se repite ninguna hasta haberlas visto todas.
   */
  function tomarPreguntaPractica() {
    if (practica.cola.length === 0) {
      var disponibles = Banco.porNivel(practica.nivel);
      var nuevaCola = barajar(disponibles);
      // Evita que la primera de la nueva vuelta repita la última mostrada.
      if (practica.actual && nuevaCola.length > 1 && nuevaCola[0].id === practica.actual.id) {
        var movida = nuevaCola.shift();
        nuevaCola.push(movida);
      }
      practica.cola = nuevaCola;
    }
    return practica.cola.shift();
  }

  function siguientePreguntaPractica() {
    practica.actual = tomarPreguntaPractica();
    practica.numero += 1;
    practica.respondida = false;

    $("practicaContador").textContent = "Pregunta " + practica.numero;
    $("practicaTexto").textContent = practica.actual.pregunta;
    $("practicaFeedback").hidden = true;
    $("practicaSiguiente").hidden = true;

    renderizarPregunta($("practicaOpciones"), practica.actual, responderPractica);
    actualizarTableroPractica();
  }

  function responderPractica(indiceElegido) {
    if (practica.respondida) return;   // no se permite cambiar la respuesta
    practica.respondida = true;

    var pregunta = practica.actual;
    pintarCorreccion($("practicaOpciones"), indiceElegido, pregunta.respuestaCorrecta);
    var acierto = pintarFeedback($("practicaFeedback"), pregunta, indiceElegido);

    if (acierto) practica.aciertos += 1; else practica.fallos += 1;

    registrarRespuesta(acierto);
    actualizarTableroPractica();

    var botonSiguiente = $("practicaSiguiente");
    botonSiguiente.hidden = false;
    botonSiguiente.focus({ preventScroll: true });
  }

  function actualizarTableroPractica() {
    var respondidas = practica.aciertos + practica.fallos;
    var totalNivel = Banco.porNivel(practica.nivel).length;

    $("practicaAciertos").textContent = practica.aciertos;
    $("practicaFallos").textContent = practica.fallos;
    $("practicaPorcentaje").textContent = respondidas
      ? Math.round(porcentaje(practica.aciertos, respondidas)) + "%"
      : "—";
    $("practicaRestantes").textContent = practica.cola.length;

    // La barra refleja cuántas preguntas del nivel se han visto en la vuelta.
    var vistas = totalNivel - practica.cola.length;
    $("practicaProgreso").style.width = Math.min(100, (vistas / totalNivel) * 100) + "%";
  }

  /* --------------------------- 6. MODO EXAMEN --------------------------- */

  function mostrarIntroExamen() {
    $("examenParaAprobar").textContent = CONFIG.EXAMEN_APROBADO_MIN;
    mostrarPantalla("pantalla-examen-intro");
  }

  /**
   * Genera el examen: 30 preguntas tomadas al azar del banco completo,
   * sin distribución fija por dificultad y sin repetir ninguna.
   */
  function generarExamen() {
    return tomarAlAzar(Banco.todas, CONFIG.EXAMEN_TOTAL);
  }

  function iniciarExamen() {
    examen.preguntas = generarExamen();
    examen.indice = 0;
    examen.aciertos = 0;
    examen.fallos = 0;
    examen.respuestas = [];
    examen.respondida = false;

    mostrarPantalla("pantalla-examen");
    pintarPreguntaExamen();
  }

  function pintarPreguntaExamen() {
    var pregunta = examen.preguntas[examen.indice];
    examen.respondida = false;

    var chip = $("examenNivelChip");
    chip.textContent = Banco.ETIQUETAS_NIVEL[pregunta.nivel];
    chip.className = "chip " + ({ facil: "chip--verde", medio: "chip--ambar", dificil: "chip--rojo" }[pregunta.nivel] || "");

    $("examenContador").textContent = (examen.indice + 1) + " / " + examen.preguntas.length;
    $("examenTexto").textContent = pregunta.pregunta;
    $("examenFeedback").hidden = true;
    $("examenSiguiente").hidden = true;

    renderizarPregunta($("examenOpciones"), pregunta, responderExamen);
    actualizarTableroExamen();
  }

  function responderExamen(indiceElegido) {
    if (examen.respondida) return;
    examen.respondida = true;

    var pregunta = examen.preguntas[examen.indice];
    pintarCorreccion($("examenOpciones"), indiceElegido, pregunta.respuestaCorrecta);
    var acierto = pintarFeedback($("examenFeedback"), pregunta, indiceElegido);

    if (acierto) examen.aciertos += 1; else examen.fallos += 1;
    examen.respuestas.push({
      pregunta: pregunta,
      elegida: indiceElegido,
      correcta: acierto
    });

    registrarRespuesta(acierto);
    actualizarTableroExamen();

    var boton = $("examenSiguiente");
    boton.textContent = (examen.indice === examen.preguntas.length - 1)
      ? "Ver resultado"
      : "Siguiente pregunta →";
    boton.hidden = false;
    boton.focus({ preventScroll: true });
  }

  function avanzarExamen() {
    if (examen.indice >= examen.preguntas.length - 1) {
      finalizarExamen();
      return;
    }
    examen.indice += 1;
    pintarPreguntaExamen();
  }

  function actualizarTableroExamen() {
    var respondidas = examen.aciertos + examen.fallos;
    $("examenAciertos").textContent = examen.aciertos;
    $("examenFallos").textContent = examen.fallos;
    $("examenRespondidas").textContent = respondidas + " / " + examen.preguntas.length;
    $("examenParaAprobar").textContent = CONFIG.EXAMEN_APROBADO_MIN;
    $("examenProgreso").style.width = (respondidas / examen.preguntas.length) * 100 + "%";
  }

  function salirDeExamen() {
    var haEmpezado = examen.aciertos + examen.fallos > 0;
    if (haEmpezado && !window.confirm("Si sales ahora perderás el examen en curso. ¿Salir?")) {
      return;
    }
    irAInicio();
  }

  /* ------------------ 7. RESULTADO Y REVISIÓN DE FALLOS ----------------- */

  function finalizarExamen() {
    var total = examen.preguntas.length;
    var aciertos = examen.aciertos;
    var aprobado = aciertos >= CONFIG.EXAMEN_APROBADO_MIN;
    var pct = porcentaje(aciertos, total);

    var panel = $("resultadoPanel");
    panel.className = "panel panel--centrado " + (aprobado ? "panel--aprobado" : "panel--suspenso");

    $("resultadoVeredicto").className = "veredicto " + (aprobado ? "veredicto--ok" : "veredicto--ko");
    $("resultadoIcono").textContent = aprobado ? "🏆" : "❌";
    $("resultadoTitulo").textContent = aprobado ? "Examen aprobado" : "Examen no aprobado";
    $("resultadoNota").textContent = aciertos + " / " + total;
    $("resultadoPorcentaje").textContent = formatearPorcentaje(pct);
    $("resultadoAciertos").textContent = aciertos;
    $("resultadoFallos").textContent = examen.fallos;

    var faltan = CONFIG.EXAMEN_APROBADO_MIN - aciertos;
    $("resultadoMensaje").textContent = aprobado
      ? "Has superado el mínimo de " + CONFIG.EXAMEN_APROBADO_MIN + " aciertos sobre " + total + "."
      : "Necesitabas " + CONFIG.EXAMEN_APROBADO_MIN + " aciertos: te " +
        (faltan === 1 ? "ha faltado 1 respuesta correcta." : "han faltado " + faltan + " respuestas correctas.");

    $("resultadoRevisar").disabled = examen.fallos === 0;
    $("resultadoRevisar").textContent = examen.fallos === 0
      ? "Sin fallos que revisar"
      : "Revisar fallos (" + examen.fallos + ")";

    guardarResultadoExamen(aciertos, total, aprobado);
    mostrarPantalla("pantalla-resultado");
  }

  function mostrarRevision() {
    var fallos = examen.respuestas.filter(function (r) { return !r.correcta; });
    var lista = $("revisionLista");
    vaciar(lista);

    $("revisionContador").textContent = fallos.length + " de " + examen.preguntas.length;

    if (fallos.length === 0) {
      lista.appendChild(crear("p", "fallo__vacio", "No has fallado ninguna pregunta. Examen perfecto."));
      mostrarPantalla("pantalla-revision");
      return;
    }

    fallos.forEach(function (registro, i) {
      lista.appendChild(construirTarjetaFallo(registro, i + 1));
    });

    mostrarPantalla("pantalla-revision");
  }

  function construirTarjetaFallo(registro, numero) {
    var p = registro.pregunta;
    var tarjeta = crear("article", "fallo");

    var cabecera = crear("div", "fallo__cabecera");
    cabecera.appendChild(crear("span", "fallo__num", "Fallo " + numero));
    var chipNivel = crear("span", "chip " + ({ facil: "chip--verde", medio: "chip--ambar", dificil: "chip--rojo" }[p.nivel] || ""), Banco.ETIQUETAS_NIVEL[p.nivel]);
    cabecera.appendChild(chipNivel);
    tarjeta.appendChild(cabecera);

    tarjeta.appendChild(crear("h3", "fallo__pregunta", p.pregunta));

    var filaKo = crear("div", "fallo__fila fallo__fila--ko");
    filaKo.appendChild(crear("span", "fallo__icono", "✘"));
    var cuerpoKo = crear("span");
    cuerpoKo.appendChild(crear("span", "fallo__etq", "Tu respuesta"));
    cuerpoKo.appendChild(crear("span", null, letraDe(registro.elegida) + ") " + p.opciones[registro.elegida]));
    filaKo.appendChild(cuerpoKo);
    tarjeta.appendChild(filaKo);

    var filaOk = crear("div", "fallo__fila fallo__fila--ok");
    filaOk.appendChild(crear("span", "fallo__icono", "✔"));
    var cuerpoOk = crear("span");
    cuerpoOk.appendChild(crear("span", "fallo__etq", "Respuesta correcta"));
    cuerpoOk.appendChild(crear("span", null, letraDe(p.respuestaCorrecta) + ") " + p.opciones[p.respuestaCorrecta]));
    filaOk.appendChild(cuerpoOk);
    tarjeta.appendChild(filaOk);

    if (p.explicacion) {
      var exp = crear("div", "fallo__explicacion");
      exp.appendChild(crear("span", "fallo__etq", "¿Por qué? · Según el reglamento"));
      exp.appendChild(crear("span", null, p.explicacion));
      tarjeta.appendChild(exp);
    }

    return tarjeta;
  }

  /* ------------------ 8. ESTADÍSTICAS PERSISTENTES ---------------------- */

  var estadisticasPorDefecto = {
    respondidas: 0,
    aciertos: 0,
    examenes: 0,
    examenesAprobados: 0,
    mejorNota: null   // aciertos del mejor examen
  };

  function leerEstadisticas() {
    try {
      var crudo = window.localStorage.getItem(CONFIG.CLAVE_STORAGE);
      if (!crudo) return Object.assign({}, estadisticasPorDefecto);
      var datos = JSON.parse(crudo);
      return Object.assign({}, estadisticasPorDefecto, datos);
    } catch (e) {
      // Modo privado, almacenamiento bloqueado o datos corruptos.
      return Object.assign({}, estadisticasPorDefecto);
    }
  }

  function escribirEstadisticas(datos) {
    try {
      window.localStorage.setItem(CONFIG.CLAVE_STORAGE, JSON.stringify(datos));
    } catch (e) {
      /* Sin persistencia: la app sigue funcionando igualmente. */
    }
  }

  function registrarRespuesta(acierto) {
    var datos = leerEstadisticas();
    datos.respondidas += 1;
    if (acierto) datos.aciertos += 1;
    escribirEstadisticas(datos);
  }

  function guardarResultadoExamen(aciertos, total, aprobado) {
    var datos = leerEstadisticas();
    datos.examenes += 1;
    if (aprobado) datos.examenesAprobados += 1;
    if (datos.mejorNota === null || aciertos > datos.mejorNota) {
      datos.mejorNota = aciertos;
    }
    datos.ultimoExamen = { aciertos: aciertos, total: total, fecha: new Date().toISOString() };
    escribirEstadisticas(datos);
  }

  function refrescarEstadisticasInicio() {
    var datos = leerEstadisticas();
    $("statTotal").textContent = Banco.todas.length;
    $("statExamenes").textContent = datos.examenes;
    $("statMejor").textContent = datos.mejorNota === null
      ? "—"
      : datos.mejorNota + "/" + CONFIG.EXAMEN_TOTAL;
    $("statAcierto").textContent = datos.respondidas
      ? Math.round(porcentaje(datos.aciertos, datos.respondidas)) + "%"
      : "—";
  }

  /* --------------------- 9. ARRANQUE Y EVENTOS -------------------------- */

  /** Muestra en pantalla los problemas detectados en el banco de preguntas. */
  function mostrarAvisoValidacion(resultado) {
    if (resultado.ok) return;
    var caja = $("avisoDatos");
    vaciar(caja);
    caja.hidden = false;
    caja.appendChild(crear("b", null, "Problemas detectados en el banco de preguntas:"));
    var ul = crear("ul");
    resultado.errores.slice(0, 12).forEach(function (mensaje) {
      ul.appendChild(crear("li", null, mensaje));
    });
    caja.appendChild(ul);
  }

  function enlazarEventos() {
    // Tarjetas de modo de la pantalla de inicio
    document.querySelectorAll("[data-modo]").forEach(function (boton) {
      boton.addEventListener("click", function () {
        var modo = boton.dataset.modo;
        if (modo === "examen") mostrarIntroExamen();
        else iniciarPractica(modo);
      });
    });

    // Acciones genéricas de navegación
    document.querySelectorAll('[data-accion="ir-inicio"]').forEach(function (b) {
      b.addEventListener("click", irAInicio);
    });
    document.querySelectorAll('[data-accion="salir-practica"]').forEach(function (b) {
      b.addEventListener("click", irAInicio);
    });
    document.querySelectorAll('[data-accion="salir-examen"]').forEach(function (b) {
      b.addEventListener("click", salirDeExamen);
    });

    $("practicaSiguiente").addEventListener("click", siguientePreguntaPractica);
    $("examenComenzar").addEventListener("click", iniciarExamen);
    $("examenSiguiente").addEventListener("click", avanzarExamen);
    $("resultadoRevisar").addEventListener("click", mostrarRevision);
    $("resultadoRepetir").addEventListener("click", iniciarExamen);
    $("revisionVolver").addEventListener("click", function () {
      mostrarPantalla("pantalla-resultado");
    });
  }

  function iniciar() {
    var validacion = Banco.validar(CONFIG.EXAMEN_TOTAL);
    mostrarAvisoValidacion(validacion);

    if (validacion.avisos.length) {
      // Los enunciados equivalentes entre documentos se conservan a propósito.
      console.info("Avisos del banco de preguntas:", validacion.avisos);
    }
    console.info("Banco cargado:", Banco.todas.length, "preguntas", Banco.recuento());

    refrescarEstadisticasInicio();
    enlazarEventos();
    mostrarPantalla("pantalla-inicio");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
