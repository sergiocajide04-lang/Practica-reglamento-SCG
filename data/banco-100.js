/* ============================================================================
 * BANCO DE PREGUNTAS — Documento "100 Preguntas Nuevas del Reglamento de
 * Hockey sobre Patines" (World Skate-RHTC).
 *
 * Transcripcion literal del documento original:
 *   - Preguntas   1-33  -> NIVEL FACIL    -> nivel "facil"
 *   - Preguntas  34-67  -> NIVEL MEDIO    -> nivel "medio"
 *   - Preguntas  68-100 -> NIVEL DIFICIL  -> nivel "dificil"
 *
 * respuestaCorrecta = indice 0-based dentro de "opciones" (0=A, 1=B, 2=C, 3=D)
 * tomado de la linea "Respuesta correcta:" que acompana a cada pregunta.
 *
 * El documento NO incluye explicaciones, por lo que "explicacion" es null.
 * NO se ha anadido, modificado ni inventado ningun contenido reglamentario.
 * ==========================================================================*/

window.BANCO_100 = [
  /* --------------------------- NIVEL FACIL (1-33) ------------------------ */
  { id: "D100-1", origen: "100 preguntas nº 1", nivel: "facil",
    pregunta: "¿De qué material se fabrica la bola de hockey sobre patines?",
    opciones: ["Cuero", "Caucho/plástico prensado con relleno de corcho", "Madera maciza", "Espuma de goma"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-2", origen: "100 preguntas nº 2", nivel: "facil",
    pregunta: "¿De qué color puede ser la bola oficial de juego?",
    opciones: ["Roja o azul", "Negra o amarilla", "Blanca únicamente", "Verde"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-3", origen: "100 preguntas nº 3", nivel: "facil",
    pregunta: "¿Cuántas ruedas tienen los patines de los jugadores?",
    opciones: ["2", "3", "4", "6"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-4", origen: "100 preguntas nº 4", nivel: "facil",
    pregunta: "¿Cuál es el diámetro mínimo permitido de las ruedas de los patines?",
    opciones: ["2 centímetros", "3 centímetros", "4 centímetros", "5 centímetros"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-5", origen: "100 preguntas nº 5", nivel: "facil",
    pregunta: "¿Cuántos representantes técnicos, como máximo, componen un equipo?",
    opciones: ["4", "5", "6", "7"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-6", origen: "100 preguntas nº 6", nivel: "facil",
    pregunta: "¿Cuántos delegados oficiales tiene un equipo?",
    opciones: ["1", "2", "3", "Ninguno"], respuestaCorrecta: 0, explicacion: null },

  { id: "D100-7", origen: "100 preguntas nº 7", nivel: "facil",
    pregunta: "¿Cómo debe identificarse el capitán de un equipo?",
    opciones: ["Con una gorra especial", "Con un brazalete de color diferente al de su camiseta", "Con un silbato", "No necesita identificación"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-8", origen: "100 preguntas nº 8", nivel: "facil",
    pregunta: "¿Está permitido que un entrenador actúe también como jugador en el mismo partido?",
    opciones: ["Sí, sin restricciones", "No, en ninguna competición", "Solo en categorías inferiores", "Solo si lo autoriza el árbitro"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-9", origen: "100 preguntas nº 9", nivel: "facil",
    pregunta: "¿Qué numeración pueden llevar los jugadores en sus camisetas?",
    opciones: ["Del 0 al 99", "Del 1 al 99, sin poder usar el cero", "Del 1 al 50", "Cualquier número, incluso repetido"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-10", origen: "100 preguntas nº 10", nivel: "facil",
    pregunta: "¿Debe la camiseta del portero tener un color diferente al de sus compañeros de equipo?",
    opciones: ["No, debe ser igual", "Sí, para no confundirse con los jugadores", "Solo en competiciones internacionales", "Solo si lo pide el rival"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-11", origen: "100 preguntas nº 11", nivel: "facil",
    pregunta: "¿Con qué parte del cuerpo puede el portero detener la bola dentro de su área, respetando las condiciones reglamentarias?",
    opciones: ["Solo con el stick", "Con cualquier parte de su cuerpo", "Solo con las manos", "Solo con los pies"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-12", origen: "100 preguntas nº 12", nivel: "facil",
    pregunta: "¿Es obligatorio para el portero llevar máscara de protección integral o casco y visera?",
    opciones: ["Sí", "No, es opcional", "Solo en categorías juveniles", "Solo en competiciones internacionales"], respuestaCorrecta: 0, explicacion: null },

  { id: "D100-13", origen: "100 preguntas nº 13", nivel: "facil",
    pregunta: "¿Cuántos guantes de portero debe utilizar el portero?",
    opciones: ["1", "2", "3", "Ninguno"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-14", origen: "100 preguntas nº 14", nivel: "facil",
    pregunta: "¿Es obligatorio el uso de peto para el portero?",
    opciones: ["Sí", "No, es opcional", "Solo en categoría Sénior", "Solo en competiciones internacionales"], respuestaCorrecta: 0, explicacion: null },

  { id: "D100-15", origen: "100 preguntas nº 15", nivel: "facil",
    pregunta: "¿Pueden los jugadores de pista (no porteros) utilizar protección para la cabeza y la cara?",
    opciones: ["No, está prohibido", "Sí, sin necesidad de autorización especial cada vez", "Solo si lo autoriza World Skate en cada partido", "Solo los defensas"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-16", origen: "100 preguntas nº 16", nivel: "facil",
    pregunta: "¿Qué elemento de protección opcional puede usar cualquier jugador para proteger los órganos genitales?",
    opciones: ["Coquilla", "Casco integral", "Peto de portero", "Guantes de portero"], respuestaCorrecta: 0, explicacion: null },

  { id: "D100-17", origen: "100 preguntas nº 17", nivel: "facil",
    pregunta: "¿Cuál es la altura de la valla que rodea el perímetro de la pista de juego?",
    opciones: ["80 centímetros", "90 centímetros", "1 metro", "1,5 metros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-18", origen: "100 preguntas nº 18", nivel: "facil",
    pregunta: "¿Cuántas puertas de acceso a la pista debe haber junto a los banquillos?",
    opciones: ["1", "2", "3", "4"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-19", origen: "100 preguntas nº 19", nivel: "facil",
    pregunta: "¿Quiénes componen, como mínimo, la mesa oficial de juego en las pruebas nacionales de clubes?",
    opciones: ["Solo un comisario", "Un cronometrador y un árbitro auxiliar", "Cinco árbitros", "No es obligatorio ningún cargo"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-20", origen: "100 preguntas nº 20", nivel: "facil",
    pregunta: "¿Qué instrumento utilizan los árbitros para señalar el inicio y el reinicio del juego?",
    opciones: ["Una bandera", "Un silbato", "Una campana", "Un micrófono"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-21", origen: "100 preguntas nº 21", nivel: "facil",
    pregunta: "¿Cuántas tarjetas deben portar obligatoriamente los árbitros principales?",
    opciones: ["1", "2", "3", "4"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-22", origen: "100 preguntas nº 22", nivel: "facil",
    pregunta: "¿De qué colores son las tarjetas que puede mostrar el árbitro según el reglamento vigente?",
    opciones: ["Amarilla, azul y roja", "Amarilla y roja únicamente", "Verde y roja", "Azul y negra"], respuestaCorrecta: 0, explicacion: null },

  { id: "D100-23", origen: "100 preguntas nº 23", nivel: "facil",
    pregunta: "¿Qué equipo está obligado a facilitar las bolas necesarias para el partido?",
    opciones: ["Solo el visitante", "El equipo local", "Ninguno, las aporta siempre la organización", "Solo si lo pide el árbitro"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-24", origen: "100 preguntas nº 24", nivel: "facil",
    pregunta: "Si los capitanes no se ponen de acuerdo sobre la bola a utilizar, ¿quién decide?",
    opciones: ["El público", "Los árbitros principales", "El delegado local", "Se suspende el partido"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-25", origen: "100 preguntas nº 25", nivel: "facil",
    pregunta: "¿Con cuánta antelación respecto al horario oficial de inicio deben entrar los jugadores de cada equipo en pista?",
    opciones: ["5 minutos", "10 minutos", "15 minutos", "20 minutos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-26", origen: "100 preguntas nº 26", nivel: "facil",
    pregunta: "¿Está permitida la publicidad de contenido político o religioso en el equipamiento de los jugadores?",
    opciones: ["Sí", "No", "Solo si lo aprueba el club", "Solo en competiciones nacionales"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-27", origen: "100 preguntas nº 27", nivel: "facil",
    pregunta: "¿Puede un jugador de pista llevar coderas de protección?",
    opciones: ["No, está prohibido", "Sí, siempre que sean acolchadas y no rígidas", "Solo el portero", "Solo el capitán"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-28", origen: "100 preguntas nº 28", nivel: "facil",
    pregunta: "¿Qué tipo de material está prohibido en las protecciones de los porteros?",
    opciones: ["El cuero", "Los elementos metálicos o con revestimientos metalizados", "El plástico", "La tela"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-29", origen: "100 preguntas nº 29", nivel: "facil",
    pregunta: "¿Cuántos árbitros principales puede haber dirigiendo un partido?",
    opciones: ["Siempre uno", "Uno o dos", "Siempre tres", "Cuatro"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-30", origen: "100 preguntas nº 30", nivel: "facil",
    pregunta: "¿Cuál es una de las funciones principales del árbitro auxiliar?",
    opciones: ["Marcar los goles", "Controlar las faltas de equipo y la disciplina de los banquillos", "Sustituir al portero lesionado", "Vender las entradas"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-31", origen: "100 preguntas nº 31", nivel: "facil",
    pregunta: "Si el capitán de un equipo es expulsado, ¿qué ocurre con el brazalete de capitán?",
    opciones: ["Sigue llevándolo aunque esté expulsado", "Pasa al sub-capitán inscrito en el acta", "Se elimina para el resto del partido", "Lo decide el árbitro"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-32", origen: "100 preguntas nº 32", nivel: "facil",
    pregunta: "¿Deben los jugadores llevar la camiseta por dentro del pantalón al inicio de cada parte del partido?",
    opciones: ["No importa cómo la lleven", "Sí, es obligatorio", "Solo el portero debe hacerlo", "Solo el capitán debe hacerlo"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-33", origen: "100 preguntas nº 33", nivel: "facil",
    pregunta: "¿Se permite publicidad en el uniforme de los árbitros de Hockey sobre Patines?",
    opciones: ["No, nunca", "Sí, con las limitaciones establecidas en el reglamento", "Solo en el pantalón", "Solo en la parte de la espalda"], respuestaCorrecta: 1, explicacion: null },

  /* -------------------------- NIVEL MEDIO (34-67) ------------------------ */
  { id: "D100-34", origen: "100 preguntas nº 34", nivel: "medio",
    pregunta: "¿Cuál es el peso oficial de la bola de juego, incluyendo su tolerancia?",
    opciones: ["100 g ± 5 g", "150 g ± 5 g", "200 g ± 5 g", "72 g ± 5 g"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-35", origen: "100 preguntas nº 35", nivel: "medio",
    pregunta: "¿Cuál es el diámetro exacto de la bola oficial?",
    opciones: ["65 mm", "70 mm", "72 mm", "75 mm"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-36", origen: "100 preguntas nº 36", nivel: "medio",
    pregunta: "¿Cuál es el peso máximo del stick sin contar la tolerancia?",
    opciones: ["450 gramos", "500 gramos", "550 gramos", "600 gramos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-37", origen: "100 preguntas nº 37", nivel: "medio",
    pregunta: "¿Cuál es la tolerancia máxima de peso permitida para el stick?",
    opciones: ["25 gramos", "50 gramos", "75 gramos", "100 gramos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-38", origen: "100 preguntas nº 38", nivel: "medio",
    pregunta: "¿Cuál es la dimensión B máxima permitida para el stick?",
    opciones: ["95 centímetros", "100 centímetros", "105 centímetros", "110 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-39", origen: "100 preguntas nº 39", nivel: "medio",
    pregunta: "¿Entre qué valores debe estar comprendida la dimensión C (altura) del stick?",
    opciones: ["10 y 15 centímetros", "17 y 22 centímetros", "20 y 25 centímetros", "25 y 30 centímetros"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-40", origen: "100 preguntas nº 40", nivel: "medio",
    pregunta: "¿Cuál es la suma máxima permitida entre las dimensiones B y C del stick?",
    opciones: ["120 centímetros", "122 centímetros", "124 centímetros", "130 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-41", origen: "100 preguntas nº 41", nivel: "medio",
    pregunta: "¿Qué diámetro interior tiene el anillo utilizado para comprobar la medida transversal del stick?",
    opciones: ["3 centímetros", "4 centímetros", "5 centímetros", "6 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-42", origen: "100 preguntas nº 42", nivel: "medio",
    pregunta: "¿Cuál es la altura máxima permitida para los guantes de portero?",
    opciones: ["30 centímetros", "35 centímetros", "40 centímetros", "45 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-43", origen: "100 preguntas nº 43", nivel: "medio",
    pregunta: "¿Cuál es la anchura máxima de la parte superior de las espinilleras de portero?",
    opciones: ["25 centímetros", "27,5 centímetros", "30 centímetros", "32,5 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-44", origen: "100 preguntas nº 44", nivel: "medio",
    pregunta: "¿Cuál es la altura total máxima de las espinilleras de portero?",
    opciones: ["55 centímetros", "60 centímetros", "65 centímetros", "70 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-45", origen: "100 preguntas nº 45", nivel: "medio",
    pregunta: "¿Cuál es el espesor máximo permitido en las espinilleras de protección opcionales de los jugadores de pista?",
    opciones: ["2 centímetros", "3 centímetros", "5 centímetros", "7 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-46", origen: "100 preguntas nº 46", nivel: "medio",
    pregunta: "¿Cuál es el espesor máximo de los guantes acolchados que puede usar un jugador de pista?",
    opciones: ["1,5 centímetros", "2 centímetros", "2,5 centímetros", "3 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-47", origen: "100 preguntas nº 47", nivel: "medio",
    pregunta: "¿Cuánto puede sobrepasar como máximo el guante acolchado la línea de la muñeca hacia el antebrazo?",
    opciones: ["5 centímetros", "8 centímetros", "10 centímetros", "12 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-48", origen: "100 preguntas nº 48", nivel: "medio",
    pregunta: "¿Cuál es la dimensión mínima de la pista de juego (largo por ancho)?",
    opciones: ["30 × 15 metros", "34 × 17 metros", "36 × 18 metros", "38 × 19 metros"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-49", origen: "100 preguntas nº 49", nivel: "medio",
    pregunta: "¿Cuál es la dimensión máxima permitida para la pista de juego?",
    opciones: ["40 × 20 metros", "42 × 21 metros", "44 × 22 metros", "46 × 23 metros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-50", origen: "100 preguntas nº 50", nivel: "medio",
    pregunta: "¿Qué porcentaje de tolerancia pueden aprobar las federaciones nacionales sobre las dimensiones estándar de la pista?",
    opciones: ["5%", "10%", "15%", "20%"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-51", origen: "100 preguntas nº 51", nivel: "medio",
    pregunta: "¿Qué radio tienen las esquinas semicirculares en la pista de dimensión estándar internacional?",
    opciones: ["1 metro", "2 metros", "3 metros", "4 metros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-52", origen: "100 preguntas nº 52", nivel: "medio",
    pregunta: "¿A qué altura, medida desde el suelo, se colocan las redes de protección en las tablas de fondo?",
    opciones: ["2 metros", "3 metros", "4 metros", "5 metros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-53", origen: "100 preguntas nº 53", nivel: "medio",
    pregunta: "¿Cuál es la longitud de las líneas del área de penalti paralelas a las tablas de fondo?",
    opciones: ["5 metros", "7 metros", "9 metros", "11 metros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-54", origen: "100 preguntas nº 54", nivel: "medio",
    pregunta: "¿Cuál es la longitud de la línea de gol o de portería?",
    opciones: ["1,50 metros", "1,70 metros", "1,90 metros", "2 metros"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-55", origen: "100 preguntas nº 55", nivel: "medio",
    pregunta: "¿A qué distancia mínima y máxima de la tabla de fondo se sitúa la línea de gol?",
    opciones: ["Entre 1 y 1,5 metros", "Entre 2 y 2,5 metros", "Entre 2,70 y 3,30 metros", "Entre 3,5 y 4 metros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-56", origen: "100 preguntas nº 56", nivel: "medio",
    pregunta: "¿Qué radio tiene el círculo central marcado en la pista?",
    opciones: ["1 metro", "2 metros", "3 metros", "4 metros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-57", origen: "100 preguntas nº 57", nivel: "medio",
    pregunta: "¿Cuáles son las medidas interiores de la portería (altura × anchura)?",
    opciones: ["100 × 160 centímetros", "105 × 170 centímetros", "110 × 180 centímetros", "115 × 190 centímetros"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-58", origen: "100 preguntas nº 58", nivel: "medio",
    pregunta: "¿Cuál es el diámetro exterior de los postes y del larguero de la portería?",
    opciones: ["5 centímetros", "6 centímetros", "7,5 centímetros", "9 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-59", origen: "100 preguntas nº 59", nivel: "medio",
    pregunta: "¿Cuál es el diámetro exterior del tubo que forma el arco semicircular de la estructura trasera inferior de la portería?",
    opciones: ["4 centímetros", "5 centímetros", "6 centímetros", "7 centímetros"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-60", origen: "100 preguntas nº 60", nivel: "medio",
    pregunta: "¿Qué dimensión tiene la malla de la red que cubre la estructura trasera de la portería?",
    opciones: ["2 × 2 centímetros", "2,50 × 2,50 centímetros", "3 × 3 centímetros", "3,50 × 3,50 centímetros"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-61", origen: "100 preguntas nº 61", nivel: "medio",
    pregunta: "¿Con cuánta antelación respecto al inicio del partido debe llegar el equipo arbitral al recinto de juego?",
    opciones: ["60 minutos", "75 minutos", "90 minutos", "120 minutos"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-62", origen: "100 preguntas nº 62", nivel: "medio",
    pregunta: "¿Cuánto debe durar, como mínimo, el entrenamiento de adaptación a la pista antes de una competición?",
    opciones: ["15 minutos", "20 minutos", "30 minutos", "45 minutos"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-63", origen: "100 preguntas nº 63", nivel: "medio",
    pregunta: "¿Con cuánta antelación respecto al horario oficial de inicio debe entrar el equipo arbitral en la pista de juego?",
    opciones: ["10 minutos", "15 minutos", "20 minutos", "30 minutos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-64", origen: "100 preguntas nº 64", nivel: "medio",
    pregunta: "Si hay un retraso en el inicio del partido, ¿cuánto tiempo mínimo de calentamiento se garantiza a los equipos?",
    opciones: ["15 minutos", "20 minutos", "25 minutos", "30 minutos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-65", origen: "100 preguntas nº 65", nivel: "medio",
    pregunta: "¿Cuántos días naturales antes del inicio de un Campeonato Mundial o Continental deben estar disponibles los jugadores convocados a sus selecciones?",
    opciones: ["15 días", "21 días", "25 días", "30 días"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-66", origen: "100 preguntas nº 66", nivel: "medio",
    pregunta: "¿Durante cuántos días de Semana Santa (Pascua) deben estar disponibles los jugadores convocados a sus selecciones nacionales?",
    opciones: ["5 días", "7 días", "8 días", "10 días"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-67", origen: "100 preguntas nº 67", nivel: "medio",
    pregunta: "En competiciones internacionales de naciones disputadas en días sucesivos, ¿cuántos jugadores como máximo se pueden inscribir en el acta de cada partido, aunque la Federación haya inscrito más para la competición?",
    opciones: ["10", "11", "12", "14"], respuestaCorrecta: 0, explicacion: null },

  /* ------------------------- NIVEL DIFICIL (68-100) ---------------------- */
  { id: "D100-68", origen: "100 preguntas nº 68", nivel: "dificil",
    pregunta: "¿A qué distancia de la línea de gol se sitúa la barra horizontal de la estructura trasera inferior de la portería?",
    opciones: ["15 centímetros", "20 centímetros", "25 centímetros", "30 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-69", origen: "100 preguntas nº 69", nivel: "dificil",
    pregunta: "¿Con qué inclinación respecto al suelo se coloca la barra horizontal de la estructura trasera inferior de la portería?",
    opciones: ["10 grados", "15 grados", "20 grados", "25 grados"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-70", origen: "100 preguntas nº 70", nivel: "dificil",
    pregunta: "¿Cuál es el radio de construcción del arco semicircular de la estructura trasera inferior de la portería, con base en el centro de la línea de gol?",
    opciones: ["54 centímetros", "64 centímetros", "74 centímetros", "84 centímetros"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-71", origen: "100 preguntas nº 71", nivel: "dificil",
    pregunta: "¿Cuánto mide la barra longitudinal soldada a las barras verticales del rectángulo de la estructura trasera superior de la portería?",
    opciones: ["150 centímetros", "160 centímetros", "170 centímetros", "180 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-72", origen: "100 preguntas nº 72", nivel: "dificil",
    pregunta: "¿Cuánto miden las dos barras verticales soldadas en la parte superior de cada poste, formando el rectángulo de la estructura trasera superior?",
    opciones: ["30 centímetros", "35 centímetros", "40 centímetros", "45 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-73", origen: "100 preguntas nº 73", nivel: "dificil",
    pregunta: "¿Qué dimensión tiene la barra fijada perpendicularmente a la parte central de la barra de la estructura frontal, soldada al semiarco de la estructura trasera superior?",
    opciones: ["55 centímetros", "60 centímetros", "65 centímetros", "70 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-74", origen: "100 preguntas nº 74", nivel: "dificil",
    pregunta: "¿Cuál es la altura de la red interior suspendida dentro de cada portería?",
    opciones: ["100 centímetros", "105 centímetros", "110 centímetros", "115 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-75", origen: "100 preguntas nº 75", nivel: "dificil",
    pregunta: "¿Cuál es la anchura de la red interior suspendida dentro de cada portería?",
    opciones: ["170 centímetros", "175 centímetros", "180 centímetros", "185 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-76", origen: "100 preguntas nº 76", nivel: "dificil",
    pregunta: "¿A qué distancia de la línea de gol se fija la red interior de la portería?",
    opciones: ["30 centímetros", "35 centímetros", "40 centímetros", "45 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-77", origen: "100 preguntas nº 77", nivel: "dificil",
    pregunta: "¿A qué ángulo, respecto al nivel vertical y horizontal, deben estar cortadas las esquinas superiores de la portería?",
    opciones: ["30 grados", "45 grados", "60 grados", "90 grados"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-78", origen: "100 preguntas nº 78", nivel: "dificil",
    pregunta: "¿A qué altura mínima debe colocarse la base de los paneles luminosos de control del tiempo de posesión de la bola?",
    opciones: ["1 metro", "1,20 metros", "1,40 metros", "1,60 metros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-79", origen: "100 preguntas nº 79", nivel: "dificil",
    pregunta: "¿A qué distancia de cada portería se colocan los paneles luminosos de información del tiempo de posesión de bola?",
    opciones: ["Entre 0,5 y 1 metro", "Entre 1 y 2 metros", "Entre 2 y 3 metros", "Entre 3 y 4 metros"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-80", origen: "100 preguntas nº 80", nivel: "dificil",
    pregunta: "¿Cuál es la anchura máxima del guante de portero con los cuatro dedos abiertos?",
    opciones: ["15 centímetros", "18 centímetros", "20 centímetros", "22 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-81", origen: "100 preguntas nº 81", nivel: "dificil",
    pregunta: "¿Cuál es la anchura máxima del guante de portero con el pulgar abierto?",
    opciones: ["20 centímetros", "22 centímetros", "25 centímetros", "28 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-82", origen: "100 preguntas nº 82", nivel: "dificil",
    pregunta: "¿Cuál es el espesor máximo permitido para el guante de portero?",
    opciones: ["3 centímetros", "4 centímetros", "5 centímetros", "6 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-83", origen: "100 preguntas nº 83", nivel: "dificil",
    pregunta: "¿Cuál es la anchura de la parte central de las espinilleras del portero?",
    opciones: ["25 centímetros", "27,5 centímetros", "30 centímetros", "32,5 centímetros"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-84", origen: "100 preguntas nº 84", nivel: "dificil",
    pregunta: "¿Cuál es la anchura de la parte inferior de las espinilleras del portero?",
    opciones: ["20 centímetros", "22,5 centímetros", "25 centímetros", "27,5 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-85", origen: "100 preguntas nº 85", nivel: "dificil",
    pregunta: "¿Cuál es la altura máxima del refuerzo lateral de la protección para los pies del portero?",
    opciones: ["9 centímetros", "11 centímetros", "13 centímetros", "15 centímetros"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-86", origen: "100 preguntas nº 86", nivel: "dificil",
    pregunta: "¿Cuál es la medida máxima entre extremos, en el sentido de la largura del calzado, del refuerzo lateral de la protección de los pies del portero?",
    opciones: ["15 centímetros", "18 centímetros", "20 centímetros", "22 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-87", origen: "100 preguntas nº 87", nivel: "dificil",
    pregunta: "¿Cuál es la altura máxima permitida para la protección opcional de cuello del portero?",
    opciones: ["3 centímetros", "4 centímetros", "5 centímetros", "6 centímetros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-88", origen: "100 preguntas nº 88", nivel: "dificil",
    pregunta: "¿Cuál es el espesor máximo de la protección elástica o semirrígida opcional para los muslos del portero?",
    opciones: ["0,5 centímetros", "1 centímetro", "1,5 centímetros", "2 centímetros"], respuestaCorrecta: 0, explicacion: null },

  { id: "D100-89", origen: "100 preguntas nº 89", nivel: "dificil",
    pregunta: "¿Cuál es el espesor máximo permitido para las piezas del peto de un portero?",
    opciones: ["1 centímetro", "1,5 centímetros", "2 centímetros", "2,5 centímetros"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-90", origen: "100 preguntas nº 90", nivel: "dificil",
    pregunta: "Según el Reglamento Técnico, ¿cuál es la densidad especificada para la visera del casco oficial?",
    opciones: ["1,17 g/cm3", "1,27 g/cm3", "1,37 g/cm3", "1,47 g/cm3"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-91", origen: "100 preguntas nº 91", nivel: "dificil",
    pregunta: "¿Cuál es el peso aproximado especificado para un casco oficial de talla L?",
    opciones: ["250 gramos", "280 gramos", "300 gramos", "320 gramos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-92", origen: "100 preguntas nº 92", nivel: "dificil",
    pregunta: "¿Cuál es el espesor de la placa de copoliéster PETG utilizada en la visera del casco oficial?",
    opciones: ["3 milímetros", "4 milímetros", "5 milímetros", "6 milímetros"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-93", origen: "100 preguntas nº 93", nivel: "dificil",
    pregunta: "En las competiciones mundiales, ¿qué categoría de árbitros dirige obligatoriamente todos los partidos?",
    opciones: ["Categoría regional", "Categoría nacional", "Categoría ELITE", "Categoría amateur"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-94", origen: "100 preguntas nº 94", nivel: "dificil",
    pregunta: "¿Cuántos árbitros de categoría internacional pueden llegar a componer el equipo arbitral en una competición internacional?",
    opciones: ["Dos", "Tres", "Tres o cuatro", "Cinco"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-95", origen: "100 preguntas nº 95", nivel: "dificil",
    pregunta: "Si faltan los dos árbitros principales designados y no hay ningún árbitro presente, en activo o retirado, ¿quién dirige finalmente el partido según el reglamento de arbitraje?",
    opciones: ["Se suspende siempre el partido", "Un entrenador o delegado de cada equipo, dirigiendo cada uno una parte", "El público elige a un árbitro", "No puede jugarse en ningún caso"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-96", origen: "100 preguntas nº 96", nivel: "dificil",
    pregunta: "En el criterio de desempate en competiciones a dos rondas, tras agotar los enfrentamientos directos y toda la fase general, ¿quién decide en caso de empate persistente?",
    opciones: ["El árbitro principal del último partido", "World Skate-RHTC, previa consulta a los equipos afectados", "Se sortea directamente sin consulta", "Gana automáticamente el equipo visitante"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-97", origen: "100 preguntas nº 97", nivel: "dificil",
    pregunta: "Según la regla de la caja del stick, ¿qué límite no puede superar la suma de las dimensiones B y C?",
    opciones: ["124 centímetros", "130 centímetros", "115 centímetros", "No existe límite combinado"], respuestaCorrecta: 0, explicacion: null },

  { id: "D100-98", origen: "100 preguntas nº 98", nivel: "dificil",
    pregunta: "¿Cuántos árbitros deben designarse obligatoriamente en las competiciones séniores de clubes, según las Reglas de Arbitraje?",
    opciones: ["Uno", "Dos", "Tres (dos principales y uno auxiliar)", "Cuatro"], respuestaCorrecta: 2, explicacion: null },

  { id: "D100-99", origen: "100 preguntas nº 99", nivel: "dificil",
    pregunta: "Si durante la ejecución de un penalti o libre directo el segundo portero sustituto también es suspendido o expulsado, ¿qué deben hacer los árbitros?",
    opciones: ["Repetir el lanzamiento indefinidamente", "Dar el partido por terminado, elaborando un informe detallado en el acta", "Anular el lanzamiento sin más consecuencias", "Conceder el gol automáticamente al equipo atacante"], respuestaCorrecta: 1, explicacion: null },

  { id: "D100-100", origen: "100 preguntas nº 100", nivel: "dificil",
    pregunta: "Si el portero sustituido se niega a ceder su equipación de protección al sustituto y las diligencias con delegados y capitán no resultan fructíferas, ¿qué deben hacer los árbitros?",
    opciones: ["Continuar el partido igualmente sin más", "Dar el partido por terminado, elaborando un informe detallado en el acta", "Sancionar la situación con un libre directo", "Expulsar a todo el banquillo de suplentes"], respuestaCorrecta: 1, explicacion: null }
];
