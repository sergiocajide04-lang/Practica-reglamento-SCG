/* ============================================================================
 * AGREGADOR Y VALIDADOR DEL BANCO DE PREGUNTAS
 *
 * Une los dos bancos documentales en una unica coleccion `window.PREGUNTAS`
 * y expone utilidades de consulta y de validacion de integridad.
 *
 * Depende de (deben cargarse antes en el HTML):
 *   - data/banco-300.js         -> window.BANCO_300
 *   - data/banco-100.js         -> window.BANCO_100
 *   - data/explicaciones-300.js -> window.EXPLICACIONES_300
 *   - data/explicaciones-100.js -> window.EXPLICACIONES_100
 *
 * Las preguntas son transcripcion literal de los documentos; las
 * explicaciones proceden del Reglamento Oficial y se unen aqui, sin tocar
 * los archivos de transcripcion.
 * ==========================================================================*/

(function () {
  "use strict";

  var NIVELES = ["facil", "medio", "dificil"];

  var ETIQUETAS_NIVEL = {
    facil: "Fácil",
    medio: "Medio",
    dificil: "Difícil"
  };

  /**
   * Une los bancos en un unico array e inyecta la justificacion reglamentaria
   * correspondiente a cada pregunta, cuando existe.
   */
  function construirBanco() {
    var bancos = [window.BANCO_300 || [], window.BANCO_100 || []];
    var explicaciones = {};
    [window.EXPLICACIONES_300, window.EXPLICACIONES_100].forEach(function (mapa) {
      if (!mapa) return;
      Object.keys(mapa).forEach(function (clave) {
        explicaciones[clave] = mapa[clave];
      });
    });

    var todas = [];
    bancos.forEach(function (banco) {
      banco.forEach(function (p) {
        if (!p.explicacion && explicaciones[p.id]) {
          p.explicacion = explicaciones[p.id];
        }
        todas.push(p);
      });
    });
    return todas;
  }

  var PREGUNTAS = construirBanco();

  /** Devuelve todas las preguntas de un nivel concreto. */
  function preguntasPorNivel(nivel) {
    return PREGUNTAS.filter(function (p) {
      return p.nivel === nivel;
    });
  }

  /** Recuento de preguntas por nivel: { facil: n, medio: n, dificil: n }. */
  function recuentoPorNivel() {
    var conteo = {};
    NIVELES.forEach(function (n) {
      conteo[n] = 0;
    });
    PREGUNTAS.forEach(function (p) {
      if (conteo[p.nivel] === undefined) conteo[p.nivel] = 0;
      conteo[p.nivel] += 1;
    });
    return conteo;
  }

  /**
   * Comprobaciones de integridad del banco (requisito de validacion de datos).
   * Devuelve { ok: bool, errores: [], avisos: [] } sin lanzar excepciones,
   * para que la aplicacion pueda arrancar y mostrar el problema al usuario.
   */
  function validarBanco(preguntasExamen) {
    var minimoExamen = preguntasExamen || 30;
    var errores = [];
    var avisos = [];
    var idsVistos = Object.create(null);
    var enunciadosVistos = Object.create(null);

    PREGUNTAS.forEach(function (p, i) {
      var ref = p.id || "posición " + (i + 1);

      // Identificador unico
      if (!p.id) {
        errores.push("Pregunta en " + ref + ": falta el identificador.");
      } else if (idsVistos[p.id]) {
        errores.push("Identificador duplicado: " + p.id + ".");
      } else {
        idsVistos[p.id] = true;
      }

      // Nivel valido
      if (NIVELES.indexOf(p.nivel) === -1) {
        errores.push(ref + ": nivel inválido o ausente (" + p.nivel + ").");
      }

      // Enunciado
      if (typeof p.pregunta !== "string" || p.pregunta.trim() === "") {
        errores.push(ref + ": enunciado vacío.");
      }

      // Opciones
      if (!Array.isArray(p.opciones) || p.opciones.length < 2) {
        errores.push(ref + ": debe tener al menos dos opciones.");
      } else {
        p.opciones.forEach(function (o, j) {
          if (typeof o !== "string" || o.trim() === "") {
            errores.push(ref + ": la opción " + (j + 1) + " está vacía.");
          }
        });
      }

      // Respuesta correcta dentro de rango
      if (
        typeof p.respuestaCorrecta !== "number" ||
        !isFinite(p.respuestaCorrecta) ||
        p.respuestaCorrecta % 1 !== 0 ||
        !Array.isArray(p.opciones) ||
        p.respuestaCorrecta < 0 ||
        p.respuestaCorrecta >= p.opciones.length
      ) {
        errores.push(ref + ": la respuesta correcta no apunta a una opción válida.");
      }

      // Enunciados repetidos: solo aviso, no error (los documentos originales
      // contienen preguntas equivalentes y se conservan tal cual).
      if (typeof p.pregunta === "string") {
        var clave = p.pregunta.trim().toLowerCase();
        if (enunciadosVistos[clave]) {
          avisos.push(
            "Enunciado repetido: " + ref + " coincide con " + enunciadosVistos[clave] + "."
          );
        } else {
          enunciadosVistos[clave] = ref;
        }
      }
    });

    // Preguntas sin justificacion reglamentaria: aviso, no error.
    var sinExplicacion = PREGUNTAS.filter(function (p) { return !p.explicacion; });
    if (sinExplicacion.length) {
      avisos.push(
        sinExplicacion.length + " pregunta(s) sin justificación del reglamento: " +
        sinExplicacion.map(function (p) { return p.id; }).join(", ") + "."
      );
    }

    // El examen toma sus preguntas del banco completo, sin cuota por nivel.
    if (PREGUNTAS.length < minimoExamen) {
      errores.push(
        "El banco tiene " + PREGUNTAS.length + " preguntas y el examen necesita " + minimoExamen + "."
      );
    }

    // Cada nivel necesita preguntas para que su modo de práctica funcione.
    var conteo = recuentoPorNivel();
    NIVELES.forEach(function (n) {
      if (!conteo[n]) {
        errores.push("Nivel " + ETIQUETAS_NIVEL[n] + ": no hay ninguna pregunta.");
      }
    });

    return { ok: errores.length === 0, errores: errores, avisos: avisos, conteo: conteo };
  }

  // API publica
  window.BancoPreguntas = {
    NIVELES: NIVELES,
    ETIQUETAS_NIVEL: ETIQUETAS_NIVEL,
    todas: PREGUNTAS,
    porNivel: preguntasPorNivel,
    recuento: recuentoPorNivel,
    validar: validarBanco
  };

  window.PREGUNTAS = PREGUNTAS;
})();
