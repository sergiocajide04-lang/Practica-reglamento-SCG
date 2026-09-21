/* ============================================================================
 * BANCO DE PREGUNTAS — Documento "300 Preguntas del Reglamento de Hockey
 * sobre Patines" (World Skate-RHTC).
 *
 * Transcripcion literal del documento original:
 *   - Preguntas   1-100  -> BLOQUE 1: NIVEL FACIL      -> nivel "facil"
 *   - Preguntas 101-200  -> BLOQUE 2: NIVEL AVANZADO   -> nivel "medio"
 *   - Preguntas 201-300  -> BLOQUE 3: NIVEL DIFICIL    -> nivel "dificil"
 *
 * respuestaCorrecta = indice 0-based dentro de "opciones" (0=A, 1=B, 2=C, 3=D)
 * tomado de la "Clave de Respuestas (1-300)" del propio documento.
 *
 * El documento NO incluye explicaciones, por lo que "explicacion" es null.
 * NO se ha anadido, modificado ni inventado ningun contenido reglamentario.
 * ==========================================================================*/

window.BANCO_300 = [
  /* ---------------------- BLOQUE 1: NIVEL FACIL (1-100) ------------------ */
  { id: "D300-1", origen: "300 preguntas nº 1", nivel: "facil",
    pregunta: "¿Cuántos jugadores componen un equipo según el reglamento?",
    opciones: ["8", "10", "12", "14"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-2", origen: "300 preguntas nº 2", nivel: "facil",
    pregunta: "De los 10 jugadores de un equipo, ¿cuántos deben ser obligatoriamente porteros?",
    opciones: ["1", "2", "3", "4"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-3", origen: "300 preguntas nº 3", nivel: "facil",
    pregunta: "¿Cuántos jugadores hay normalmente en pista por equipo?",
    opciones: ["4", "5", "6", "7"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-4", origen: "300 preguntas nº 4", nivel: "facil",
    pregunta: "¿Cuál es el mínimo de jugadores de pista necesarios para iniciar un partido?",
    opciones: ["2", "3", "4", "5"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-5", origen: "300 preguntas nº 5", nivel: "facil",
    pregunta: "¿Cuántos porteros deben estar disponibles para iniciar normalmente un partido?",
    opciones: ["1", "2", "3", "Ninguno"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-6", origen: "300 preguntas nº 6", nivel: "facil",
    pregunta: "¿Cuánto dura un partido SUB-15?",
    opciones: ["20 minutos", "30 minutos", "40 minutos", "50 minutos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-7", origen: "300 preguntas nº 7", nivel: "facil",
    pregunta: "¿Cómo se distribuye el tiempo de juego en SUB-15?",
    opciones: ["2 × 10 minutos", "2 × 15 minutos", "2 × 20 minutos", "2 × 25 minutos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-8", origen: "300 preguntas nº 8", nivel: "facil",
    pregunta: "¿Cuánto dura normalmente un partido SUB-17?",
    opciones: ["30 minutos", "40 minutos", "45 minutos", "50 minutos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-9", origen: "300 preguntas nº 9", nivel: "facil",
    pregunta: "¿Cuánto dura un partido Sénior?",
    opciones: ["40 minutos", "45 minutos", "50 minutos", "60 minutos"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-10", origen: "300 preguntas nº 10", nivel: "facil",
    pregunta: "¿Cuánto dura el descanso entre los dos periodos?",
    opciones: ["5 minutos", "8 minutos", "10 minutos", "15 minutos"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-11", origen: "300 preguntas nº 11", nivel: "facil",
    pregunta: "¿Cuánto tiempo tiene un equipo para pasar de su zona defensiva a la atacante?",
    opciones: ["5 segundos", "8 segundos", "10 segundos", "15 segundos"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-12", origen: "300 preguntas nº 12", nivel: "facil",
    pregunta: "Después de volver a la zona defensiva tras una acción ofensiva, ¿cuánto tiempo tiene para regresar a la zona atacante?",
    opciones: ["3 segundos", "5 segundos", "8 segundos", "10 segundos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-13", origen: "300 preguntas nº 13", nivel: "facil",
    pregunta: "¿Cuál es el tiempo máximo de posesión para finalizar un ataque?",
    opciones: ["30 segundos", "40 segundos", "45 segundos", "50 segundos"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-14", origen: "300 preguntas nº 14", nivel: "facil",
    pregunta: "¿Cuál de estas situaciones puede interrumpir la cuenta de posesión?",
    opciones: ["Que la bola toque un poste", "Que un jugador cambie de patines", "Que el entrenador pida una sustitución", "Que el público proteste"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-15", origen: "300 preguntas nº 15", nivel: "facil",
    pregunta: "¿Quién realiza el saque inicial del primer periodo?",
    opciones: ["El equipo local", "El equipo visitante", "El equipo que elija el árbitro", "El equipo que marcó el último gol"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-16", origen: "300 preguntas nº 16", nivel: "facil",
    pregunta: "¿Quién realiza el saque inicial del segundo periodo?",
    opciones: ["El visitante", "El local", "El equipo que perdió el primer periodo", "El equipo que marque primero"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-17", origen: "300 preguntas nº 17", nivel: "facil",
    pregunta: "¿Desde dónde se realiza el saque después de un gol?",
    opciones: ["Desde el área", "Desde la línea de fondo", "Desde el centro de la pista", "Desde una esquina"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-18", origen: "300 preguntas nº 18", nivel: "facil",
    pregunta: "En un saque inicial, ¿cuántos jugadores pueden permanecer dentro del semicírculo central de su propia pista?",
    opciones: ["1", "2", "3", "4"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-19", origen: "300 preguntas nº 19", nivel: "facil",
    pregunta: "Si un jugador marca directamente desde el saque inicial sin que nadie toque la bola, ¿qué ocurre?",
    opciones: ["Gol válido", "Penalti", "Libre directo", "Libre indirecto"], respuestaCorrecta: 3, explicacion: null },

  { id: "D300-20", origen: "300 preguntas nº 20", nivel: "facil",
    pregunta: "¿Con qué parte del stick se debe efectuar el inicio o reinicio del partido?",
    opciones: ["Con cualquier parte", "Con la pala", "Con las partes planas", "Con el mango"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-21", origen: "300 preguntas nº 21", nivel: "facil",
    pregunta: "¿A qué altura máxima puede elevarse normalmente la bola?",
    opciones: ["1 metro", "1,20 metros", "1,50 metros", "2 metros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-22", origen: "300 preguntas nº 22", nivel: "facil",
    pregunta: "¿Qué excepción tiene el portero respecto a la altura de la bola?",
    opciones: ["Ninguna", "Puede jugarla por encima de 1,50 m dentro de su área", "Puede jugarla siempre por encima de 2 m", "Solo puede hacerlo fuera del área"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-23", origen: "300 preguntas nº 23", nivel: "facil",
    pregunta: "Si la bola sale de la pista y los árbitros no saben quién la sacó, ¿cómo se reanuda?",
    opciones: ["Libre directo", "Libre indirecto", "Saque neutral", "Penalti"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-24", origen: "300 preguntas nº 24", nivel: "facil",
    pregunta: "Si la bola toca el techo del pabellón, ¿cómo se reanuda el juego?",
    opciones: ["Libre indirecto", "Libre directo", "Saque neutral en el centro", "Penalti"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-25", origen: "300 preguntas nº 25", nivel: "facil",
    pregunta: "¿Cuándo se considera que un gol es válido?",
    opciones: ["Cuando la bola toca la línea", "Cuando sobrepasa completamente la línea de portería", "Cuando toca el poste", "Cuando el árbitro lo considera oportuno"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-26", origen: "300 preguntas nº 26", nivel: "facil",
    pregunta: "¿Puede ser válido un gol marcado directamente desde un saque neutral?",
    opciones: ["Sí", "No", "Solo en prórroga", "Solo en Sénior"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-27", origen: "300 preguntas nº 27", nivel: "facil",
    pregunta: "¿Es válido un gol que entra directamente en la portería rival desde un libre indirecto?",
    opciones: ["Sí", "No", "Solo si toca el larguero", "Solo si toca al portero"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-28", origen: "300 preguntas nº 28", nivel: "facil",
    pregunta: "¿Cuántas sustituciones puede realizar un equipo durante el partido?",
    opciones: ["5", "10", "15", "Las que quiera"], respuestaCorrecta: 3, explicacion: null },

  { id: "D300-29", origen: "300 preguntas nº 29", nivel: "facil",
    pregunta: "En una sustitución con el juego activo, ¿puede entrar el sustituto antes de que salga el jugador sustituido?",
    opciones: ["Sí", "No", "Solo el portero", "Solo en prórroga"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-30", origen: "300 preguntas nº 30", nivel: "facil",
    pregunta: "¿Puede un portero ser sustituido por un jugador de pista?",
    opciones: ["Sí", "No", "Solo en la segunda parte", "Solo durante un tiempo muerto"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-31", origen: "300 preguntas nº 31", nivel: "facil",
    pregunta: "¿Cuántos tiempos muertos puede solicitar cada equipo en cada parte?",
    opciones: ["1", "2", "3", "4"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-32", origen: "300 preguntas nº 32", nivel: "facil",
    pregunta: "¿Cuánto dura cada tiempo muerto?",
    opciones: ["30 segundos", "45 segundos", "1 minuto", "2 minutos"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-33", origen: "300 preguntas nº 33", nivel: "facil",
    pregunta: "¿Se conceden tiempos muertos durante la prórroga?",
    opciones: ["Sí", "No", "Solo uno", "Solo si hay empate"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-34", origen: "300 preguntas nº 34", nivel: "facil",
    pregunta: "¿Quién solicita el tiempo muerto al árbitro auxiliar?",
    opciones: ["El capitán exclusivamente", "El delegado o entrenador principal", "El portero", "El árbitro principal"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-35", origen: "300 preguntas nº 35", nivel: "facil",
    pregunta: "Si un equipo solicita un tiempo muerto y después renuncia a utilizarlo, ¿se considera consumido?",
    opciones: ["Sí", "No", "Solo si lo pide el entrenador", "Solo en la segunda parte"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-36", origen: "300 preguntas nº 36", nivel: "facil",
    pregunta: "¿Se considera juego pasivo mantener la posesión después de superar los 45 segundos que un equipo tiene para finalizar su ataque?",
    opciones: ["Sí", "No", "Solo si no hay marcador electrónico", "Solo en prórroga"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-37", origen: "300 preguntas nº 37", nivel: "facil",
    pregunta: "Cuando quedan cinco segundos para finalizar el ataque, ¿qué deben hacer los árbitros?",
    opciones: ["Detener el partido", "Avisar al equipo atacante", "Conceder un penalti", "Sacar tarjeta azul"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-38", origen: "300 preguntas nº 38", nivel: "facil",
    pregunta: "Si tras el aviso de cinco segundos el equipo no finaliza su ataque, ¿qué se sanciona?",
    opciones: ["Penalti", "Libre directo", "Libre indirecto", "Saque neutral"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-39", origen: "300 preguntas nº 39", nivel: "facil",
    pregunta: "¿Qué es el anti-juego?",
    opciones: ["Juego excesivamente físico", "Cuando ambos equipos muestran falta de intención de atacar y competir", "Una falta técnica", "Una sustitución irregular"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-40", origen: "300 preguntas nº 40", nivel: "facil",
    pregunta: "Si ambos equipos continúan practicando anti-juego después del primer aviso, ¿qué tarjeta reciben los capitanes o sustitutos?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-41", origen: "300 preguntas nº 41", nivel: "facil",
    pregunta: "¿Qué tarjeta corresponde normalmente a una falta técnica?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna necesariamente"], respuestaCorrecta: 3, explicacion: null },

  { id: "D300-42", origen: "300 preguntas nº 42", nivel: "facil",
    pregunta: "¿Qué tarjeta se muestra normalmente por una falta grave?",
    opciones: ["Amarilla", "Azul", "Roja", "Verde"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-43", origen: "300 preguntas nº 43", nivel: "facil",
    pregunta: "¿Qué tarjeta corresponde a una falta muy grave?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-44", origen: "300 preguntas nº 44", nivel: "facil",
    pregunta: "¿Qué ocurre si un jugador en pista reincide en una tarjeta amarilla?",
    opciones: ["Otra amarilla", "Azul", "Roja directa", "Libre indirecto solamente"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-45", origen: "300 preguntas nº 45", nivel: "facil",
    pregunta: "¿Qué ocurre si un representante del banquillo reincide en una tarjeta amarilla?",
    opciones: ["Azul", "Roja", "No ocurre nada", "Penalti"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-46", origen: "300 preguntas nº 46", nivel: "facil",
    pregunta: "¿Qué tarjeta recibe un jugador que entra o sale de la pista saltando la valla sin autorización de los árbitros principales, estando el juego parado?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-47", origen: "300 preguntas nº 47", nivel: "facil",
    pregunta: "¿Qué ocurre si una sustitución irregular es realizada con el juego activo?",
    opciones: ["Falta técnica", "Falta grave", "Falta muy grave", "No es infracción"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-48", origen: "300 preguntas nº 48", nivel: "facil",
    pregunta: "¿Qué tarjeta corresponde a una sustitución irregular?",
    opciones: ["Amarilla", "Azul", "Roja", "Verde"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-49", origen: "300 preguntas nº 49", nivel: "facil",
    pregunta: "Si se lanza un stick y este impacta en la bola, ¿qué tarjeta corresponde?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-50", origen: "300 preguntas nº 50", nivel: "facil",
    pregunta: "Si se lanza un stick pero no impacta en nada, ¿qué tarjeta corresponde?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-51", origen: "300 preguntas nº 51", nivel: "facil",
    pregunta: "¿Qué ocurre si se lanza un objeto y no se identifica al responsable?",
    opciones: ["Se ignora", "Se sanciona al capitán con amarilla", "Se sanciona al entrenador según lo establecido", "Se expulsa a todo el equipo"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-52", origen: "300 preguntas nº 52", nivel: "facil",
    pregunta: "¿Qué ocurre si un jugador marca intencionadamente un gol en su propia portería?",
    opciones: ["Gol válido sin sanción", "Tarjeta amarilla", "Tarjeta azul", "Tarjeta roja"], respuestaCorrecta: 3, explicacion: null },

  { id: "D300-53", origen: "300 preguntas nº 53", nivel: "facil",
    pregunta: "Cuando un jugador marca intencionadamente un gol en su propia portería, además de a él, ¿a quién se muestra también tarjeta roja?",
    opciones: ["Al portero", "Al entrenador o responsable correspondiente", "Al árbitro auxiliar", "Al capitán rival"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-54", origen: "300 preguntas nº 54", nivel: "facil",
    pregunta: "¿Cuánto dura la suspensión temporal asociada a una tarjeta azul?",
    opciones: ["1 minuto", "2 minutos", "3 minutos", "4 minutos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-55", origen: "300 preguntas nº 55", nivel: "facil",
    pregunta: "¿Cuánto dura el periodo de inferioridad provocado por una tarjeta roja?",
    opciones: ["2 minutos", "3 minutos", "4 minutos", "5 minutos"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-56", origen: "300 preguntas nº 56", nivel: "facil",
    pregunta: "¿A qué distancia del centro de la línea de portería se encuentra el punto de libre directo?",
    opciones: ["5,40 m", "6,40 m", "7,40 m", "8,40 m"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-57", origen: "300 preguntas nº 57", nivel: "facil",
    pregunta: "¿A qué distancia del centro de la línea de portería se encuentra el punto de penalti?",
    opciones: ["4,40 m", "5,40 m", "6,40 m", "7,40 m"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-58", origen: "300 preguntas nº 58", nivel: "facil",
    pregunta: "Para ejecutar un libre directo, ¿es necesario que el árbitro pite?",
    opciones: ["Sí", "No", "Solo en la segunda parte", "Solo si lo solicita el jugador"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-59", origen: "300 preguntas nº 59", nivel: "facil",
    pregunta: "En un libre directo, ¿desde qué distancia máxima puede iniciar el lanzamiento mediante movimiento?",
    opciones: ["1 metro", "2 metros", "3 metros", "5 metros"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-60", origen: "300 preguntas nº 60", nivel: "facil",
    pregunta: "¿Puede el jugador que ejecuta un libre directo retener la bola para pasarla a un compañero?",
    opciones: ["Sí", "No", "Solo en prórroga", "Solo si el árbitro lo permite"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-61", origen: "300 preguntas nº 61", nivel: "facil",
    pregunta: "¿Puede transportar la bola detrás de la portería rival durante un libre directo?",
    opciones: ["Sí", "No", "Solo una vez", "Solo si no toca al portero"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-62", origen: "300 preguntas nº 62", nivel: "facil",
    pregunta: "En un penalti, ¿el jugador debe comenzar desde una posición estática?",
    opciones: ["Sí", "No", "Solo en Sénior", "Solo en desempates"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-63", origen: "300 preguntas nº 63", nivel: "facil",
    pregunta: "¿Puede el ejecutante del penalti transportar la bola hacia la portería?",
    opciones: ["Sí", "No", "Solo después de un rebote", "Solo en prórroga"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-64", origen: "300 preguntas nº 64", nivel: "facil",
    pregunta: "¿Es obligatoria la presencia de un portero para defender un libre directo o penalti?",
    opciones: ["Sí", "No", "Solo en penalti", "Solo en libre directo"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-65", origen: "300 preguntas nº 65", nivel: "facil",
    pregunta: "¿Puede el portero defensor moverse antes del pitido arbitral?",
    opciones: ["Sí", "No", "Solo lateralmente", "Solo hacia atrás"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-66", origen: "300 preguntas nº 66", nivel: "facil",
    pregunta: "¿Qué tarjeta recibe inicialmente un portero que se mueve antes del pitido en un penalti o libre directo?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-67", origen: "300 preguntas nº 67", nivel: "facil",
    pregunta: "Si el portero defensor reincide en moverse antes del pitido arbitral en un penalti o libre directo, ¿qué tarjeta recibe?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-68", origen: "300 preguntas nº 68", nivel: "facil",
    pregunta: "¿Qué ocurre si el jugador ejecutante inicia un penalti o libre directo sin autorización del árbitro?",
    opciones: ["Se repite", "Libre indirecto contra su equipo", "Penalti para el rival", "No ocurre nada"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-69", origen: "300 preguntas nº 69", nivel: "facil",
    pregunta: "Si un jugador defensor se mueve antes del pitido y el lanzamiento no termina en gol, ¿qué ocurre?",
    opciones: ["Se repite el lanzamiento", "Libre indirecto", "Penalti", "Se da por válido"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-70", origen: "300 preguntas nº 70", nivel: "facil",
    pregunta: "Si se mueven jugadores de ambos equipos antes del pitido y no hay gol, ¿qué ocurre?",
    opciones: ["Se repite el lanzamiento", "Libre directo", "Penalti", "Se anula el lanzamiento"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-71", origen: "300 preguntas nº 71", nivel: "facil",
    pregunta: "¿Con cuántos jugadores puede jugar un equipo durante una inferioridad si decide jugar sin portero?",
    opciones: ["3", "4", "5", "6"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-72", origen: "300 preguntas nº 72", nivel: "facil",
    pregunta: "¿Con cuántos jugadores puede jugar con portero durante una inferioridad?",
    opciones: ["2 + portero", "3 + portero", "4 + portero", "5 + portero"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-73", origen: "300 preguntas nº 73", nivel: "facil",
    pregunta: "¿Cuánto dura la prórroga total en SUB-15 y SUB-17?",
    opciones: ["5 minutos", "6 minutos", "8 minutos", "10 minutos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-74", origen: "300 preguntas nº 74", nivel: "facil",
    pregunta: "¿Cómo se divide la prórroga en SUB-15 y SUB-17?",
    opciones: ["2 × 2 minutos", "2 × 3 minutos", "2 × 4 minutos", "2 × 5 minutos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-75", origen: "300 preguntas nº 75", nivel: "facil",
    pregunta: "¿Cuánto dura la prórroga en las demás categorías?",
    opciones: ["6 minutos", "8 minutos", "10 minutos", "12 minutos"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-76", origen: "300 preguntas nº 76", nivel: "facil",
    pregunta: "¿Cuánto dura el descanso entre los dos periodos de la prórroga?",
    opciones: ["1 minuto", "2 minutos", "3 minutos", "5 minutos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-77", origen: "300 preguntas nº 77", nivel: "facil",
    pregunta: "Si continúa el empate después de la prórroga, ¿cómo se decide el ganador?",
    opciones: ["Gol de oro", "Sorteo", "Tanda de penaltis", "Un periodo adicional"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-78", origen: "300 preguntas nº 78", nivel: "facil",
    pregunta: "¿Cuántos penaltis ejecuta inicialmente cada equipo en la primera serie?",
    opciones: ["3", "4", "5", "6"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-79", origen: "300 preguntas nº 79", nivel: "facil",
    pregunta: "¿Pueden utilizar distintos jugadores para cada uno de los cinco primeros penaltis?",
    opciones: ["Sí", "No, debe lanzar siempre el mismo", "Solo el equipo local", "Solo si lo autoriza el árbitro"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-80", origen: "300 preguntas nº 80", nivel: "facil",
    pregunta: "En la serie adicional de penaltis, ¿puede un mismo jugador lanzar todos los penaltis de su equipo?",
    opciones: ["Sí", "No", "Solo dos", "Solo tres"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-81", origen: "300 preguntas nº 81", nivel: "facil",
    pregunta: "¿Cuántos puntos obtiene un equipo por una victoria?",
    opciones: ["1", "2", "3", "4"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-82", origen: "300 preguntas nº 82", nivel: "facil",
    pregunta: "¿Cuántos puntos obtiene un equipo por un empate?",
    opciones: ["0", "1", "2", "3"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-83", origen: "300 preguntas nº 83", nivel: "facil",
    pregunta: "¿Cuántos puntos obtiene un equipo por una derrota?",
    opciones: ["0", "1", "2", "3"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-84", origen: "300 preguntas nº 84", nivel: "facil",
    pregunta: "En un empate a puntos entre dos equipos, ¿qué criterio se analiza primero?",
    opciones: ["Diferencia general de goles", "Goles marcados en todo el torneo", "Partidos entre los equipos implicados", "Sorteo"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-85", origen: "300 preguntas nº 85", nivel: "facil",
    pregunta: "Si continúa el empate entre dos equipos, ¿qué se analiza después de los puntos obtenidos entre ellos?",
    opciones: ["Diferencia de goles", "Número de tarjetas", "Goles fuera de casa", "Posesión"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-86", origen: "300 preguntas nº 86", nivel: "facil",
    pregunta: "¿Qué ratio se utiliza como criterio posterior de desempate?",
    opciones: ["Goles sufridos/goles marcados", "Goles marcados/goles encajados", "Victorias/partidos", "Faltas/goles"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-87", origen: "300 preguntas nº 87", nivel: "facil",
    pregunta: "¿Cuándo debe notificarse un protesto administrativo?",
    opciones: ["Después del partido", "Durante el descanso", "Antes de comenzar el partido", "Al día siguiente"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-88", origen: "300 preguntas nº 88", nivel: "facil",
    pregunta: "¿Quién debe plantear un protesto administrativo?",
    opciones: ["Solo el entrenador", "Delegado y capitán", "Solo el capitán", "El árbitro auxiliar"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-89", origen: "300 preguntas nº 89", nivel: "facil",
    pregunta: "¿Cuándo debe notificarse un protesto técnico?",
    opciones: ["Antes del partido exclusivamente", "Durante una interrupción o inmediatamente después del final", "Al día siguiente", "Antes del calentamiento"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-90", origen: "300 preguntas nº 90", nivel: "facil",
    pregunta: "¿Cuánto margen tiene un equipo para presentarse después de la hora oficial de inicio?",
    opciones: ["5 minutos", "10 minutos", "15 minutos", "20 minutos"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-91", origen: "300 preguntas nº 91", nivel: "facil",
    pregunta: "¿Cuál es la dimensión mínima de una pista de hockey sobre patines?",
    opciones: ["30 × 15 m", "34 × 17 m", "36 × 18 m", "40 × 20 m"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-92", origen: "300 preguntas nº 92", nivel: "facil",
    pregunta: "¿Cuál es la dimensión máxima de la pista?",
    opciones: ["40 × 20 m", "42 × 21 m", "44 × 22 m", "45 × 23 m"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-93", origen: "300 preguntas nº 93", nivel: "facil",
    pregunta: "¿Cuál es la medida estándar internacional de una pista?",
    opciones: ["36 × 18 m", "38 × 19 m", "40 × 20 m", "44 × 22 m"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-94", origen: "300 preguntas nº 94", nivel: "facil",
    pregunta: "¿Qué altura tiene la valla que delimita la pista?",
    opciones: ["80 cm", "90 cm", "1 metro", "1,20 m"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-95", origen: "300 preguntas nº 95", nivel: "facil",
    pregunta: "¿Cuál es el diámetro de la bola?",
    opciones: ["60 mm", "65 mm", "72 mm", "75 mm"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-96", origen: "300 preguntas nº 96", nivel: "facil",
    pregunta: "¿Cuánto pesa aproximadamente la bola oficial?",
    opciones: ["100 g ± 5 g", "125 g ± 5 g", "150 g ± 5 g", "200 g ± 5 g"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-97", origen: "300 preguntas nº 97", nivel: "facil",
    pregunta: "¿Cuál es el peso máximo del stick incluyendo la tolerancia?",
    opciones: ["500 g", "525 g", "550 g", "600 g"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-98", origen: "300 preguntas nº 98", nivel: "facil",
    pregunta: "¿Cuál es la dimensión máxima A del stick?",
    opciones: ["100 cm", "105 cm", "110 cm", "115 cm"], respuestaCorrecta: 3, explicacion: null },

  { id: "D300-99", origen: "300 preguntas nº 99", nivel: "facil",
    pregunta: "¿Cuánto antes del inicio del partido debe llegar el equipo arbitral al recinto?",
    opciones: ["30 minutos", "60 minutos", "75 minutos", "90 minutos"], respuestaCorrecta: 3, explicacion: null },

  { id: "D300-100", origen: "300 preguntas nº 100", nivel: "facil",
    pregunta: "¿Qué instrumentos deben portar los árbitros principales?",
    opciones: ["Silbato y dos tarjetas", "Silbato y tres tarjetas: amarilla, azul y roja", "Solo silbato", "Cuatro tarjetas de diferentes colores"], respuestaCorrecta: 1, explicacion: null },

  /* ------------------ BLOQUE 2: NIVEL AVANZADO (101-200) ----------------- */
  { id: "D300-101", origen: "300 preguntas nº 101", nivel: "medio",
    pregunta: "Un equipo recupera la bola en su zona defensiva. ¿Desde qué momento comienza a contar el límite de 10 segundos?",
    opciones: ["Desde que la bola cruza la línea central", "Desde que el jugador controla o tiene posibilidad de controlar la bola", "Desde que el árbitro señala la posesión", "Desde que el jugador realiza el primer pase"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-102", origen: "300 preguntas nº 102", nivel: "medio",
    pregunta: "Un equipo vuelve voluntariamente con la bola a su zona defensiva después de haber iniciado un ataque. ¿Cuánto tiempo dispone para regresar a zona atacante?",
    opciones: ["3 segundos", "5 segundos", "8 segundos", "10 segundos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-103", origen: "300 preguntas nº 103", nivel: "medio",
    pregunta: "La bola sobrepasa la línea central y entra en zona defensiva. ¿Cuándo comienza el cómputo de los cinco segundos?",
    opciones: ["Cuando el jugador toca la bola", "Cuando el árbitro lo indica", "Cuando la bola sobrepasa la línea de media pista", "Cuando el jugador recibe la bola"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-104", origen: "300 preguntas nº 104", nivel: "medio",
    pregunta: "Un equipo lleva 30 segundos de posesión en ataque y la bola golpea el poste rival. ¿Qué ocurre con el tiempo de posesión?",
    opciones: ["Continúa desde 30", "Se reinicia", "Se detiene durante cinco segundos", "Se reduce a 30 segundos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-105", origen: "300 preguntas nº 105", nivel: "medio",
    pregunta: "La bola es tocada por un defensor, pero este no consigue recuperarla y el atacante mantiene la posesión. ¿Se interrumpe la cuenta de posesión?",
    opciones: ["Sí", "No", "Solo si el árbitro lo considera recuperación", "Solo si ocurre dentro del área"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-106", origen: "300 preguntas nº 106", nivel: "medio",
    pregunta: "Un defensor recupera realmente la bola después de que el atacante la poseyera. ¿Qué ocurre con el tiempo de posesión?",
    opciones: ["Continúa el tiempo anterior", "Se reinicia", "Se reduce a 10 segundos", "Se detiene hasta el siguiente pase"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-107", origen: "300 preguntas nº 107", nivel: "medio",
    pregunta: "¿Cuál de estas acciones NO interrumpe por sí misma el tiempo de posesión?",
    opciones: ["La bola toca el poste", "La bola es recuperada por el rival", "Se ejecuta un saque neutral", "La bola es tocada ligeramente por un rival"], respuestaCorrecta: 3, explicacion: null },

  { id: "D300-108", origen: "300 preguntas nº 108", nivel: "medio",
    pregunta: "Si no existe marcador electrónico de posesión, ¿quién controla el tiempo de ataque?",
    opciones: ["El árbitro auxiliar", "El cronometrador", "Los árbitros principales", "El delegado local"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-109", origen: "300 preguntas nº 109", nivel: "medio",
    pregunta: "Un equipo permanece en zona atacante durante 45 segundos sin finalizar su acción. ¿Qué concepto puede aplicarse?",
    opciones: ["Anti-juego exclusivamente", "Juego pasivo", "Falta grave", "Falta de equipo automática"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-110", origen: "300 preguntas nº 110", nivel: "medio",
    pregunta: "Un jugador tiene una clara oportunidad de gol pero decide deliberadamente no finalizarla. ¿Qué puede constituir?",
    opciones: ["Juego pasivo", "Falta técnica", "Falta grave", "Saque neutral"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-111", origen: "300 preguntas nº 111", nivel: "medio",
    pregunta: "¿Quién realiza el saque inicial del primer periodo?",
    opciones: ["Local", "Visitante", "Equipo que gana el sorteo", "Equipo que elija el árbitro"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-112", origen: "300 preguntas nº 112", nivel: "medio",
    pregunta: "¿Quién realiza el saque inicial del segundo periodo?",
    opciones: ["Visitante", "Local", "Equipo que perdió el primer periodo", "Equipo que recibió menos tarjetas"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-113", origen: "300 preguntas nº 113", nivel: "medio",
    pregunta: "En el saque inicial, ¿cuántos jugadores pueden permanecer dentro del semicírculo central de su propia media pista?",
    opciones: ["Uno", "Dos", "Tres", "Todos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-114", origen: "300 preguntas nº 114", nivel: "medio",
    pregunta: "Tras el pitido inicial, el jugador retrasa voluntariamente la bola hacia su propia media pista. ¿Cuánto tiempo tiene para llevarla a zona atacante?",
    opciones: ["3 segundos", "5 segundos", "8 segundos", "10 segundos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-115", origen: "300 preguntas nº 115", nivel: "medio",
    pregunta: "Desde el saque inicial, el jugador remata directamente y marca sin que nadie toque la bola. ¿Qué decisión corresponde?",
    opciones: ["Gol válido", "Penalti", "Libre directo", "Libre indirecto"], respuestaCorrecta: 3, explicacion: null },

  { id: "D300-116", origen: "300 preguntas nº 116", nivel: "medio",
    pregunta: "Cuando se anula un gol marcado directamente desde el saque inicial, ¿dónde se ejecuta el libre indirecto con el que se reanuda el juego?",
    opciones: ["En el centro", "En el lugar del remate", "En el ángulo inferior del área de portería más próxima por donde entró la bola", "En cualquier lugar de la zona atacante"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-117", origen: "300 preguntas nº 117", nivel: "medio",
    pregunta: "Si se marca un gol exactamente al finalizar una parte y la mesa ya señala el final, ¿qué hacen los árbitros?",
    opciones: ["Anulan el gol", "Validan el gol si corresponde", "Ordenan un saque neutral", "Repiten el último ataque"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-118", origen: "300 preguntas nº 118", nivel: "medio",
    pregunta: "Cuando se valida un gol marcado justo en el momento en que la mesa señala la finalización de una parte o prórroga, ¿es necesario realizar el saque de gol desde el centro?",
    opciones: ["Sí", "No", "Solo en competición internacional", "Solo si el gol fue en el segundo periodo"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-119", origen: "300 preguntas nº 119", nivel: "medio",
    pregunta: "Si el cronómetro no emite la señal acústica de finalización, ¿quién debe indicarla en primer lugar?",
    opciones: ["El árbitro principal", "El árbitro auxiliar", "El delegado", "El entrenador local"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-120", origen: "300 preguntas nº 120", nivel: "medio",
    pregunta: "Si el cronómetro no emite la señal acústica de finalización y tampoco puede indicarla el árbitro auxiliar, ¿quién señala la finalización?",
    opciones: ["El capitán", "Los árbitros principales", "La mesa", "El entrenador"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-121", origen: "300 preguntas nº 121", nivel: "medio",
    pregunta: "Para que un gol sea válido, la bola debe:",
    opciones: ["Tocar la línea de gol", "Sobrepasar completamente la línea de portería", "Tocar primero el poste", "Ser tocada por dos jugadores"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-122", origen: "300 preguntas nº 122", nivel: "medio",
    pregunta: "Un atacante golpea la bola con el pie y esta entra en la portería. ¿Es gol?",
    opciones: ["Sí", "No", "Sí, si fue accidental", "Sí, si el árbitro no lo vio"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-123", origen: "300 preguntas nº 123", nivel: "medio",
    pregunta: "Un defensor desvía accidentalmente la bola con su patín y entra en su propia portería. ¿Puede concederse gol?",
    opciones: ["Sí", "No", "Solo si el portero toca posteriormente la bola", "Solo en segunda parte"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-124", origen: "300 preguntas nº 124", nivel: "medio",
    pregunta: "Un jugador atacante remata, la bola rebota accidentalmente en su propio patín y entra. ¿Qué ocurre?",
    opciones: ["Gol", "No es válido", "Penalti", "Saque neutral"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-125", origen: "300 preguntas nº 125", nivel: "medio",
    pregunta: "Un portero desvía la bola al intentar defender y esta entra directamente en la portería rival. ¿Puede concederse gol?",
    opciones: ["Sí", "No", "Solo si la bola toca previamente a otro jugador", "Solo si el portero estaba fuera del área"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-126", origen: "300 preguntas nº 126", nivel: "medio",
    pregunta: "La bola golpea el larguero, se eleva por encima de 1,50 m, cae sobre la espalda del portero y entra en la portería. ¿Puede ser válido el gol?",
    opciones: ["Sí", "No", "Solo si el portero está fuera del área", "Solo en prórroga"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-127", origen: "300 preguntas nº 127", nivel: "medio",
    pregunta: "Un atacante transporta voluntariamente la bola por encima de la portería para posteriormente rematar. ¿Qué ocurre?",
    opciones: ["Gol válido", "Gol inválido", "Penalti", "Saque neutral"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-128", origen: "300 preguntas nº 128", nivel: "medio",
    pregunta: "Si un gol es inválido por una de las situaciones reglamentarias descritas, ¿cómo se reanuda normalmente?",
    opciones: ["Saque neutral en el centro", "Libre indirecto", "Libre directo", "Penalti"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-129", origen: "300 preguntas nº 129", nivel: "medio",
    pregunta: "La bola entra en la portería como consecuencia de un elemento extraño que entró indebidamente en la pista. ¿Cómo se reanuda?",
    opciones: ["Libre indirecto", "Libre directo", "Saque neutral", "Saque inicial"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-130", origen: "300 preguntas nº 130", nivel: "medio",
    pregunta: "Cuando la bola entra en la portería por la intervención de un elemento extraño que entró indebidamente en la pista, ¿dónde se ejecuta el saque neutral de reanudación?",
    opciones: ["Centro de pista", "Punto de penalti", "Cualquiera de los ángulos inferiores del área correspondiente", "Lugar donde entró el elemento extraño"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-131", origen: "300 preguntas nº 131", nivel: "medio",
    pregunta: "¿Cuántas sustituciones puede realizar un equipo durante un partido?",
    opciones: ["5", "10", "15", "Ilimitadas"], respuestaCorrecta: 3, explicacion: null },

  { id: "D300-132", origen: "300 preguntas nº 132", nivel: "medio",
    pregunta: "Durante el juego activo, un sustituto entra en pista antes de que salga su compañero. ¿Qué se produce?",
    opciones: ["Sustitución válida", "Sustitución irregular", "Falta de equipo", "Saque neutral"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-133", origen: "300 preguntas nº 133", nivel: "medio",
    pregunta: "Un jugador entra saltando la valla durante el juego. ¿Qué consideración tiene?",
    opciones: ["Sustitución válida", "Sustitución irregular", "Falta técnica exclusivamente", "No se sanciona"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-134", origen: "300 preguntas nº 134", nivel: "medio",
    pregunta: "Un jugador temporalmente excluido entra en pista durante su suspensión. ¿Es una sustitución irregular?",
    opciones: ["Sí", "No", "Solo si toca la bola", "Solo si el juego está activo"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-135", origen: "300 preguntas nº 135", nivel: "medio",
    pregunta: "Un jugador no inscrito en el acta entra en pista. ¿Cómo se considera?",
    opciones: ["Sustitución normal", "Sustitución irregular", "Falta de equipo", "Protesto técnico"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-136", origen: "300 preguntas nº 136", nivel: "medio",
    pregunta: "¿Cuál es el número máximo de jugadores que puede tener simultáneamente un equipo en pista?",
    opciones: ["4", "5", "6", "7"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-137", origen: "300 preguntas nº 137", nivel: "medio",
    pregunta: "¿Existe alguna excepción relacionada con los tiempos muertos respecto a la norma que prohíbe tener seis o más jugadores en pista?",
    opciones: ["Sí", "No", "Solo en prórroga", "Solo en categoría Sénior"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-138", origen: "300 preguntas nº 138", nivel: "medio",
    pregunta: "Un portero puede ser sustituido por un jugador de pista:",
    opciones: ["Solo durante el segundo periodo", "Solo cuando hay lesión", "En cualquier momento del partido y de las prórrogas", "Nunca"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-139", origen: "300 preguntas nº 139", nivel: "medio",
    pregunta: "Un jugador asistido en pista quiere regresar inmediatamente sin que se haya reiniciado el partido. ¿Puede?",
    opciones: ["Sí", "No", "Solo con autorización del entrenador", "Solo si es portero"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-140", origen: "300 preguntas nº 140", nivel: "medio",
    pregunta: "¿Cuándo puede volver a entrar un jugador que recibió asistencia en pista?",
    opciones: ["Inmediatamente", "Cuando lo decida el entrenador", "Después de que el partido se reinicie", "Al siguiente periodo"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-141", origen: "300 preguntas nº 141", nivel: "medio",
    pregunta: "¿Puede el portero mantener una rodilla apoyada en el suelo durante el juego normal?",
    opciones: ["Sí", "No", "Solo fuera del área", "Solo durante un penalti"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-142", origen: "300 preguntas nº 142", nivel: "medio",
    pregunta: "¿Puede mantener una rodilla apoyada durante la ejecución de un penalti contra su equipo?",
    opciones: ["Sí", "No", "Solo antes del pitido", "Solo si tiene el stick apoyado"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-143", origen: "300 preguntas nº 143", nivel: "medio",
    pregunta: "En defensa de su portería, ¿puede el portero sentarse o echarse al suelo?",
    opciones: ["Sí", "No", "Solo en caso de penalti", "Solo si pierde el stick"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-144", origen: "300 preguntas nº 144", nivel: "medio",
    pregunta: "Si el portero pierde accidentalmente una protección (casco, guantes o espinilleras) durante una acción, ¿puede continuar defendiendo esa acción?",
    opciones: ["Sí", "No", "Solo si pierde el casco", "Solo si pierde un guante"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-145", origen: "300 preguntas nº 145", nivel: "medio",
    pregunta: "Una vez finalizada la acción que el portero ha defendido tras perder accidentalmente una protección, ¿qué deben hacer los árbitros?",
    opciones: ["Expulsarlo", "Detener el juego para que recoloque su equipamiento", "Conceder penalti", "Sacar tarjeta azul"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-146", origen: "300 preguntas nº 146", nivel: "medio",
    pregunta: "Un portero está completamente fuera de su área. ¿Puede utilizar sus protecciones específicas para jugar la bola?",
    opciones: ["Sí", "No", "Solo los guantes", "Solo las espinilleras"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-147", origen: "300 preguntas nº 147", nivel: "medio",
    pregunta: "Si el portero está fuera del área y juega la bola apoyándose en algo distinto de sus patines, ¿puede constituir falta?",
    opciones: ["Sí", "No", "Solo si marca gol", "Solo en el segundo periodo"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-148", origen: "300 preguntas nº 148", nivel: "medio",
    pregunta: "¿Puede un portero detener la bola con cualquier parte de su cuerpo mientras defiende su portería?",
    opciones: ["Sí, dentro de las condiciones reglamentarias", "Nunca", "Solo con las piernas", "Solo con el torso"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-149", origen: "300 preguntas nº 149", nivel: "medio",
    pregunta: "¿Qué elemento debe conservar siempre el portero durante una acción defensiva en el suelo?",
    opciones: ["Casco", "Guantes", "Stick", "Peto"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-150", origen: "300 preguntas nº 150", nivel: "medio",
    pregunta: "Un portero pierde accidentalmente el stick y defiende la bola con sus protecciones. ¿Qué consecuencia específica establece el reglamento?",
    opciones: ["Siempre tarjeta roja", "Siempre penalti", "La situación puede ser sancionada según la conducta, pero la pérdida accidental del stick no aparece como autorización equivalente a la pérdida de protecciones", "Gol automático"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-151", origen: "300 preguntas nº 151", nivel: "medio",
    pregunta: "Un jugador permanece parado con la bola y de espaldas a la pista detrás de una portería. ¿Qué tipo de infracción puede ser?",
    opciones: ["Falta técnica", "Falta grave", "Falta muy grave", "Falta de equipo"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-152", origen: "300 preguntas nº 152", nivel: "medio",
    pregunta: "Un jugador inmoviliza deliberadamente la bola entre el stick y la valla. ¿Qué tipo de infracción es?",
    opciones: ["Técnica", "Grave", "Muy grave", "Penalti automático"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-153", origen: "300 preguntas nº 153", nivel: "medio",
    pregunta: "Un jugador realiza incorrectamente un libre directo. ¿Qué tipo de infracción se contempla?",
    opciones: ["Falta técnica", "Falta grave", "Falta muy grave", "Falta de equipo"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-154", origen: "300 preguntas nº 154", nivel: "medio",
    pregunta: "Un jugador beneficiado por un libre indirecto toca la bola antes del pitido después de haber solicitado que los rivales se coloquen a distancia. ¿Qué comete?",
    opciones: ["Falta técnica", "Falta grave", "Falta de equipo", "Penalti"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-155", origen: "300 preguntas nº 155", nivel: "medio",
    pregunta: "En un saque neutral, un jugador mueve la bola antes del pitido. ¿Qué infracción comete?",
    opciones: ["Falta técnica", "Falta grave", "Falta muy grave", "Ninguna"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-156", origen: "300 preguntas nº 156", nivel: "medio",
    pregunta: "Un jugador supera el tiempo permitido para abandonar su zona defensiva. ¿Qué tipo de falta es?",
    opciones: ["Técnica", "Grave", "Muy grave", "Amarilla directa"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-157", origen: "300 preguntas nº 157", nivel: "medio",
    pregunta: "Un jugador evita un gol interceptando la bola con una parte del cuerpo dentro del área de protección del portero. ¿Qué tipo de infracción aparece en el reglamento?",
    opciones: ["Técnica", "Grave", "Muy grave", "Anti-juego"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-158", origen: "300 preguntas nº 158", nivel: "medio",
    pregunta: "Un jugador de pista agarra deliberadamente la bola con la mano. ¿Qué tipo de falta se contempla?",
    opciones: ["Técnica", "Grave", "Muy grave", "Falta de equipo"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-159", origen: "300 preguntas nº 159", nivel: "medio",
    pregunta: "Un portero se echa intencionadamente encima de la bola para impedir que sea jugada. ¿Qué infracción puede ser?",
    opciones: ["Técnica", "Grave", "Muy grave", "Ninguna"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-160", origen: "300 preguntas nº 160", nivel: "medio",
    pregunta: "Un jugador grita o silba deliberadamente para engañar al adversario haciéndole creer que posee la bola. ¿Qué tipo de infracción es?",
    opciones: ["Técnica", "Grave", "Muy grave", "Falta de equipo"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-161", origen: "300 preguntas nº 161", nivel: "medio",
    pregunta: "Un jugador simula haber sufrido una falta. ¿Qué tarjeta debe mostrarse?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-162", origen: "300 preguntas nº 162", nivel: "medio",
    pregunta: "Un jugador entra en pista saltando la valla sin autorización, incluso con el juego parado. ¿Qué tarjeta corresponde?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-163", origen: "300 preguntas nº 163", nivel: "medio",
    pregunta: "Un médico entra en pista para asistir a un jugador sin autorización de los árbitros. ¿Qué tarjeta se contempla?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-164", origen: "300 preguntas nº 164", nivel: "medio",
    pregunta: "Un portero va al banquillo sin autorización durante juego normal. ¿Qué tarjeta recibe?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-165", origen: "300 preguntas nº 165", nivel: "medio",
    pregunta: "¿Hay alguna situación en la que el portero pueda acudir al banquillo de suplentes sin la autorización previa de los árbitros principales?",
    opciones: ["Sí, durante un tiempo muerto o asistencia en pista", "Nunca", "Solo durante el descanso", "Solo si lo ordena el capitán"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-166", origen: "300 preguntas nº 166", nivel: "medio",
    pregunta: "Un jugador preparado para lanzar un penalti abandona su posición sin autorización. ¿Qué tarjeta se contempla?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-167", origen: "300 preguntas nº 167", nivel: "medio",
    pregunta: "Un jugador sin stick juega deliberadamente la bola. ¿Qué tarjeta corresponde inicialmente?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-168", origen: "300 preguntas nº 168", nivel: "medio",
    pregunta: "Un jugador con un patín averiado juega deliberadamente la bola. ¿Qué tarjeta corresponde?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-169", origen: "300 preguntas nº 169", nivel: "medio",
    pregunta: "Un jugador dirige deliberadamente la bola contra un rival caído sin intención de marcar. ¿Qué puede recibir?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-170", origen: "300 preguntas nº 170", nivel: "medio",
    pregunta: "Un entrenador protesta una decisión arbitral sin insultos desde el banquillo. ¿Qué tarjeta contempla el reglamento?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-171", origen: "300 preguntas nº 171", nivel: "medio",
    pregunta: "Un jugador recibe una falta grave estando en pista. ¿Qué tarjeta recibe?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-172", origen: "300 preguntas nº 172", nivel: "medio",
    pregunta: "¿Cuánto dura la suspensión temporal por una tarjeta azul?",
    opciones: ["1 minuto", "2 minutos", "3 minutos", "5 minutos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-173", origen: "300 preguntas nº 173", nivel: "medio",
    pregunta: "Un jugador acumula tres tarjetas azules. ¿Qué ocurre?",
    opciones: ["Continúa jugando", "Recibe amarilla", "Recibe roja y es expulsado definitivamente", "Se reinician las tarjetas"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-174", origen: "300 preguntas nº 174", nivel: "medio",
    pregunta: "La roja por acumulación de tres azules, según el reglamento, ¿requiere informe confidencial?",
    opciones: ["Sí", "No", "Solo en competiciones internacionales", "Solo si protesta"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-175", origen: "300 preguntas nº 175", nivel: "medio",
    pregunta: "Un jugador que está cumpliendo una suspensión temporal debe:",
    opciones: ["Permanecer en el banquillo", "Ir al vestuario", "Permanecer en pista", "Salir del recinto"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-176", origen: "300 preguntas nº 176", nivel: "medio",
    pregunta: "Un jugador sancionado con tarjeta azul, ¿puede reentrar en pista antes de cumplir completamente su suspensión temporal?",
    opciones: ["Sí", "No", "Solo si marca su equipo", "Solo con autorización del entrenador"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-177", origen: "300 preguntas nº 177", nivel: "medio",
    pregunta: "Un integrante del banquillo comete una falta grave. ¿Qué tarjeta recibe?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-178", origen: "300 preguntas nº 178", nivel: "medio",
    pregunta: "Cuando una falta grave la comete un integrante del banquillo, ¿qué consecuencia adicional tiene para el equipo?",
    opciones: ["Periodo de inferioridad", "Ninguna otra consecuencia para el equipo", "Penalti automático", "Libre directo automático"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-179", origen: "300 preguntas nº 179", nivel: "medio",
    pregunta: "Un jugador en pista comete una falta muy grave. ¿Qué tarjeta recibe?",
    opciones: ["Amarilla", "Azul", "Roja", "Azul + amarilla"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-180", origen: "300 preguntas nº 180", nivel: "medio",
    pregunta: "Una tarjeta roja mostrada a un jugador en pista por una falta muy grave provoca:",
    opciones: ["Solo expulsión personal", "Un periodo de inferioridad para su equipo", "Dos periodos de inferioridad", "Penalti siempre"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-181", origen: "300 preguntas nº 181", nivel: "medio",
    pregunta: "Se lanza un stick y golpea la bola. ¿Qué tarjeta corresponde?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-182", origen: "300 preguntas nº 182", nivel: "medio",
    pregunta: "Se lanza un stick hacia la bola pero no llega a tocarla. ¿Qué tarjeta corresponde?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-183", origen: "300 preguntas nº 183", nivel: "medio",
    pregunta: "Se lanza un objeto desde el banquillo y no se identifica quién lo lanzó. ¿A quién se muestra inicialmente la tarjeta roja?",
    opciones: ["Capitán", "Delegado", "Entrenador", "Segundo entrenador"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-184", origen: "300 preguntas nº 184", nivel: "medio",
    pregunta: "Se lanza un objeto desde el banquillo, no se identifica al responsable y el entrenador ya había sido expulsado. ¿A quién corresponde entonces la tarjeta roja?",
    opciones: ["Capitán", "Delegado", "Médico", "Portero"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-185", origen: "300 preguntas nº 185", nivel: "medio",
    pregunta: "Se lanza un objeto desde el banquillo, no se identifica al responsable y no están presentes ni el entrenador ni el delegado. ¿Qué tarjeta recibe el capitán en pista?",
    opciones: ["Amarilla", "Azul", "Roja", "Ninguna"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-186", origen: "300 preguntas nº 186", nivel: "medio",
    pregunta: "Un jugador comete una falta técnica dentro de su propia área. ¿Cuál es la sanción general?",
    opciones: ["Libre indirecto", "Libre directo", "Penalti", "Saque neutral"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-187", origen: "300 preguntas nº 187", nivel: "medio",
    pregunta: "Excepción: un defensor eleva la bola por encima de 1,50 m mediante un movimiento de stick dentro de su propia área. ¿Qué se señala?",
    opciones: ["Penalti", "Libre indirecto desde una esquina superior", "Libre directo", "Saque neutral"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-188", origen: "300 preguntas nº 188", nivel: "medio",
    pregunta: "Una falta de equipo impide una clara situación de posible gol fuera del área. ¿Qué puede señalarse?",
    opciones: ["Libre indirecto", "Libre directo", "Penalti", "Saque neutral"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-189", origen: "300 preguntas nº 189", nivel: "medio",
    pregunta: "Una falta de equipo se comete dentro del área del equipo infractor. ¿Qué puede señalarse?",
    opciones: ["Libre indirecto", "Libre directo", "Penalti", "Saque neutral"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-190", origen: "300 preguntas nº 190", nivel: "medio",
    pregunta: "¿La falta de equipo que da lugar a libre directo por impedir una clara ocasión se contabiliza en el registro de faltas?",
    opciones: ["Sí", "No", "Solo en la segunda parte", "Solo si acaba en gol"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-191", origen: "300 preguntas nº 191", nivel: "medio",
    pregunta: "Un equipo alcanza 10 faltas de equipo. ¿Qué sucede?",
    opciones: ["Penalti", "Libre directo", "Libre indirecto", "Saque neutral"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-192", origen: "300 preguntas nº 192", nivel: "medio",
    pregunta: "Después de las 10 primeras faltas, ¿cada cuántas faltas adicionales vuelve a producirse un libre directo por acumulación?",
    opciones: ["Cada 2", "Cada 3", "Cada 4", "Cada 5"], respuestaCorrecta: 3, explicacion: null },

  { id: "D300-193", origen: "300 preguntas nº 193", nivel: "medio",
    pregunta: "Cuando un equipo llega a 9 faltas en el primer ciclo, ¿qué debe hacer el árbitro auxiliar?",
    opciones: ["Detener el partido", "Colocar una marca indicativa en la mesa", "Mostrar tarjeta amarilla al capitán", "Conceder libre directo"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-194", origen: "300 preguntas nº 194", nivel: "medio",
    pregunta: "Si se alcanza el número de faltas que implica libre directo, ¿qué señal debe realizar el árbitro auxiliar?",
    opciones: ["Señal visual exclusivamente", "Señal sonora o pitido", "Levantar tarjeta azul", "Tocar el silbato tres veces"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-195", origen: "300 preguntas nº 195", nivel: "medio",
    pregunta: "Se comete una falta grave durante una situación de gol inminente y los árbitros aplican la ley de la ventaja. Si finalmente no hay gol, ¿qué deben hacer?",
    opciones: ["Solo libre indirecto", "Mostrar la tarjeta correspondiente y señalar libre directo o penalti", "Reiniciar con saque neutral", "No sancionar"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-196", origen: "300 preguntas nº 196", nivel: "medio",
    pregunta: "Si aplicando la ventaja se consigue el gol, ¿qué ocurre con la sanción disciplinaria al infractor?",
    opciones: ["Se elimina", "Se mantiene y se aplica después del gol", "Se sustituye siempre por amarilla", "Se convierte en falta de equipo"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-197", origen: "300 preguntas nº 197", nivel: "medio",
    pregunta: "¿Cuándo no deben aplicar los árbitros la ley de la ventaja, salvo una situación de gol inminente?",
    opciones: ["Falta técnica", "Falta grave o muy grave", "Falta de equipo ordinaria", "Saque neutral"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-198", origen: "300 preguntas nº 198", nivel: "medio",
    pregunta: "Un protesto administrativo sobre la elegibilidad de un jugador debe comunicarse:",
    opciones: ["Después del partido", "Antes de comenzar el partido", "Durante el descanso", "Al finalizar la competición"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-199", origen: "300 preguntas nº 199", nivel: "medio",
    pregunta: "¿Quién debe notificar el protesto administrativo?",
    opciones: ["Solo el entrenador", "Delegado y capitán", "Solo el capitán", "Árbitro auxiliar y delegado"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-200", origen: "300 preguntas nº 200", nivel: "medio",
    pregunta: "Un equipo considera que los árbitros cometieron durante el partido un error técnico que pudo influir directamente en el resultado. ¿Qué tipo de protesto corresponde y cuándo debe notificarse?",
    opciones: ["Protesto administrativo, antes del partido", "Protesto técnico, durante una interrupción o inmediatamente después del final", "Protesto administrativo, durante el descanso", "Protesto técnico, al día siguiente"], respuestaCorrecta: 1, explicacion: null },

  /* ------------------- BLOQUE 3: NIVEL DIFICIL (201-300) ----------------- */
  { id: "D300-201", origen: "300 preguntas nº 201", nivel: "dificil",
    pregunta: "Un equipo mantiene la posesión en su zona defensiva y dispone de marcador electrónico de posesión. ¿Deben los árbitros realizar además la señal manual de cuenta de posesión?",
    opciones: ["Sí, siempre", "Solo en los últimos 10 segundos", "No", "Solo cuando lo solicite el capitán"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-202", origen: "300 preguntas nº 202", nivel: "dificil",
    pregunta: "No existe marcador de posesión y un equipo tiene la bola en su zona defensiva. ¿Qué deben hacer los árbitros?",
    opciones: ["No realizar ninguna señal", "Realizar la señal correspondiente al paso de cada segundo", "Señalar únicamente los últimos 5 segundos", "Pedir al cronometrador que haga la señal"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-203", origen: "300 preguntas nº 203", nivel: "dificil",
    pregunta: "Un equipo está en posesión de la bola en zona defensiva. El árbitro está realizando la señal manual de posesión. ¿A qué altura debe situarse aproximadamente el brazo?",
    opciones: ["Cabeza", "Pecho", "Cintura", "Rodilla"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-204", origen: "300 preguntas nº 204", nivel: "dificil",
    pregunta: "Un árbitro concede un tiempo muerto. ¿Qué señal debe realizar?",
    opciones: ["Ambos brazos en V", "Una mano vertical con palma abierta y la otra horizontal sobre ella", "Un brazo horizontal", "Ambas manos sobre la cabeza"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-205", origen: "300 preguntas nº 205", nivel: "dificil",
    pregunta: "Se señala un saque neutral. ¿Qué combinación de señales debe realizar el árbitro?",
    opciones: ["Un brazo horizontal y otro vertical", "Un brazo levantado con dos dedos en V y el otro indicando el lugar", "Ambos brazos en V", "Una mano cerrada y otra abierta"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-206", origen: "300 preguntas nº 206", nivel: "dificil",
    pregunta: "El árbitro aplica la ley de la ventaja. ¿Cuál es la posición de sus brazos?",
    opciones: ["Ambos completamente verticales", "Ambos paralelos y flexionados, formando aproximadamente 60° con el cuerpo", "Uno vertical y otro horizontal", "Ambos cruzados sobre el pecho"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-207", origen: "300 preguntas nº 207", nivel: "dificil",
    pregunta: "Durante una situación de juego pasivo, el árbitro realiza el aviso correspondiente. ¿Hasta cuándo mantiene la señal?",
    opciones: ["Cinco segundos", "Hasta que se dispare la bola o finalice el tiempo concedido para disparar", "Hasta que la bola salga de la pista", "Hasta que el equipo cambie de jugador"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-208", origen: "300 preguntas nº 208", nivel: "dificil",
    pregunta: "Un árbitro señala una infracción que obliga a poner la bola en una esquina del área de penalti. ¿Qué gesto debe realizar?",
    opciones: ["Brazos cruzados", "Brazos erguidos sobre la cabeza y manos unidas por las puntas formando un rombo", "Un brazo horizontal", "Dos dedos en V"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-209", origen: "300 preguntas nº 209", nivel: "dificil",
    pregunta: "Para señalar un libre indirecto, ¿cómo deben colocarse los brazos?",
    opciones: ["Paralelos", "Formando aproximadamente 45°", "Horizontalmente formando 90° entre sí", "Verticalmente"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-210", origen: "300 preguntas nº 210", nivel: "dificil",
    pregunta: "En la señal del libre indirecto, uno de los brazos debe:",
    opciones: ["Señalar hacia el público", "Señalar dónde debe ejecutarse", "Señalar al árbitro auxiliar", "Señalar al portero"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-211", origen: "300 preguntas nº 211", nivel: "dificil",
    pregunta: "Un árbitro muestra una tarjeta a un jugador. ¿A qué distancia aproximada debe situarse del infractor?",
    opciones: ["1 metro", "2 metros aproximadamente", "5 metros", "10 metros"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-212", origen: "300 preguntas nº 212", nivel: "dificil",
    pregunta: "Después de mostrar la tarjeta, ¿qué debe comunicar el árbitro a la mesa?",
    opciones: ["Solo el número del jugador", "Número del jugador y equipo al que pertenece", "Número de dorsal y, si no es jugador, su función", "Únicamente el tipo de tarjeta"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-213", origen: "300 preguntas nº 213", nivel: "dificil",
    pregunta: "Si la persona sancionada no es un jugador, ¿qué debe indicar el árbitro a la mesa?",
    opciones: ["Su nombre completo", "Su número de licencia exclusivamente", "Su función dentro del equipo", "Su posición en pista"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-214", origen: "300 preguntas nº 214", nivel: "dificil",
    pregunta: "Después de indicar el dorsal o función del infractor, ¿qué debe hacer el árbitro?",
    opciones: ["Abandonar la pista", "Indicar a qué equipo pertenece señalando el lado de la pista", "Mostrar otra tarjeta", "Señalar el centro"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-215", origen: "300 preguntas nº 215", nivel: "dificil",
    pregunta: "¿Qué brazo utiliza el árbitro para señalar el equipo al que pertenece el infractor?",
    opciones: ["Uno levantado verticalmente", "Uno horizontal indicando el lado de la pista", "Ambos brazos", "El brazo que sostiene el silbato"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-216", origen: "300 preguntas nº 216", nivel: "dificil",
    pregunta: "Se muestra una tarjeta roja durante el partido. ¿Debe realizarse informe confidencial?",
    opciones: ["No", "Sí", "Solo si el capitán protesta", "Solo en finales"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-217", origen: "300 preguntas nº 217", nivel: "dificil",
    pregunta: "En el informe por tarjeta roja, ¿qué debe explicarse?",
    opciones: ["Solo el número del jugador", "Infracciones, circunstancias y motivos", "Solo el resultado", "Únicamente la tarjeta mostrada"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-218", origen: "300 preguntas nº 218", nivel: "dificil",
    pregunta: "Si la tarjeta roja se produce por comportamiento violento, ¿qué información debe incluirse en el informe confidencial?",
    opciones: ["Solo quién fue expulsado", "Los detalles de las conductas y golpes producidos", "Solo la duración de la expulsión", "Únicamente la parte del partido"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-219", origen: "300 preguntas nº 219", nivel: "dificil",
    pregunta: "Si hubo un golpe con el stick y provocó una lesión o impacto físico, el informe debe especificar:",
    opciones: ["El color del stick", "La parte del cuerpo golpeada", "La marca del stick", "La posición del jugador"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-220", origen: "300 preguntas nº 220", nivel: "dificil",
    pregunta: "Si se muestra una tarjeta roja y además hubo insultos, ¿deben reflejarse en el informe?",
    opciones: ["No", "Sí, detallando las injurias pronunciadas", "Solo si el capitán lo solicita", "Solo si hay denuncia posterior"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-221", origen: "300 preguntas nº 221", nivel: "dificil",
    pregunta: "¿Cuál de estos documentos NO aparece entre los formularios oficiales que deben utilizar los árbitros para registrar incidencias importantes?",
    opciones: ["Acta oficial del partido", "Hoja de control del partido", "Control de licencias", "Informe médico obligatorio"], respuestaCorrecta: 3, explicacion: null },

  { id: "D300-222", origen: "300 preguntas nº 222", nivel: "dificil",
    pregunta: "En el acta oficial debe registrarse:",
    opciones: ["Solo el resultado final", "Lugar, fecha y horas de inicio y finalización", "Solo los goles", "Únicamente las tarjetas"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-223", origen: "300 preguntas nº 223", nivel: "dificil",
    pregunta: "Además del resultado final, ¿qué información sobre los goles debe aparecer?",
    opciones: ["Solo el máximo goleador", "Los goles marcados por cada equipo en cada periodo", "Solo los goles del ganador", "El minuto de todos los goles exclusivamente"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-224", origen: "300 preguntas nº 224", nivel: "dificil",
    pregunta: "En la relación de jugadores debe aparecer:",
    opciones: ["Nombre y dorsal únicamente", "Licencia/documento de identificación, dorsal y función", "Solo licencia", "Solo dorsal y posición"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-225", origen: "300 preguntas nº 225", nivel: "dificil",
    pregunta: "¿Qué jugadores deben identificarse específicamente por su función?",
    opciones: ["Solo los delanteros", "Porteros y capitán, incluyendo capitán sustituto", "Solo el capitán", "Todos los jugadores por posición táctica"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-226", origen: "300 preguntas nº 226", nivel: "dificil",
    pregunta: "Además del resultado y de la relación de jugadores, el acta oficial del partido debe registrar también:",
    opciones: ["Los jugadores que marcaron los goles", "Solo el primer goleador", "Solo los goles del segundo periodo", "Los asistentes de cada gol obligatoriamente"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-227", origen: "300 preguntas nº 227", nivel: "dificil",
    pregunta: "Respecto a los representantes del equipo, el acta debe incluir:",
    opciones: ["Solo sus nombres", "Identificación y función", "Solo el entrenador", "Solo el delegado"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-228", origen: "300 preguntas nº 228", nivel: "dificil",
    pregunta: "¿Deben registrarse las medidas disciplinarias aplicadas?",
    opciones: ["No", "Sí, especificando las tarjetas exhibidas", "Solo las rojas", "Solo las azules"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-229", origen: "300 preguntas nº 229", nivel: "dificil",
    pregunta: "¿Debe registrarse el número de faltas de equipo cometidas por cada equipo?",
    opciones: ["Sí", "No", "Solo a partir de 10", "Solo si existe libre directo"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-230", origen: "300 preguntas nº 230", nivel: "dificil",
    pregunta: "¿Deben registrarse los tiempos muertos?",
    opciones: ["No", "Sí, los solicitados por cada equipo en cada periodo", "Solo los utilizados en el segundo periodo", "Solo los de la prórroga"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-231", origen: "300 preguntas nº 231", nivel: "dificil",
    pregunta: "Un equipo considera que un jugador rival no es elegible. ¿Qué tipo de protesto corresponde?",
    opciones: ["Técnico", "Administrativo", "Disciplinario", "Arbitral"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-232", origen: "300 preguntas nº 232", nivel: "dificil",
    pregunta: "Un equipo considera irregular el equipamiento utilizado por un rival antes del partido. ¿Qué tipo de protesto puede plantearse?",
    opciones: ["Administrativo", "Técnico", "Disciplinario", "Ninguno"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-233", origen: "300 preguntas nº 233", nivel: "dificil",
    pregunta: "Un equipo considera que las condiciones de la pista son deficientes antes de empezar. ¿Qué tipo de protesto sería?",
    opciones: ["Técnico", "Administrativo", "Disciplinario", "Ninguno"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-234", origen: "300 preguntas nº 234", nivel: "dificil",
    pregunta: "Para que un protesto administrativo sea válido, debe notificarse:",
    opciones: ["Durante el descanso", "Antes de comenzar el partido", "Después del partido", "En las 24 horas siguientes"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-235", origen: "300 preguntas nº 235", nivel: "dificil",
    pregunta: "¿Quién debe notificar el protesto administrativo a los árbitros?",
    opciones: ["Solo el entrenador", "Delegado y capitán", "Solo el capitán", "Delegado y entrenador"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-236", origen: "300 preguntas nº 236", nivel: "dificil",
    pregunta: "Una vez recibido un protesto administrativo, ¿a quién deben informar los árbitros principales?",
    opciones: ["Solo al árbitro auxiliar", "Al delegado y capitán del equipo adversario", "Solo al entrenador rival", "A la organización exclusivamente"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-237", origen: "300 preguntas nº 237", nivel: "dificil",
    pregunta: "Una vez presentado a los árbitros principales, el protesto administrativo debe:",
    opciones: ["Destruirse una vez solucionado", "Reflejarse en el acta", "Mantenerse exclusivamente verbal", "Presentarse solo al final"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-238", origen: "300 preguntas nº 238", nivel: "dificil",
    pregunta: "Además del acta, los árbitros deben elaborar:",
    opciones: ["Un informe público", "Un informe confidencial sobre diligencias y decisiones tomadas", "Un informe médico", "Un informe económico"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-239", origen: "300 preguntas nº 239", nivel: "dificil",
    pregunta: "Si el protesto administrativo se refiere a una deficiencia de la pista, los árbitros:",
    opciones: ["Deben suspender automáticamente el partido", "Deben realizar diligencias para poder iniciar el partido", "Deben conceder un libre directo", "Deben expulsar al delegado local"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-240", origen: "300 preguntas nº 240", nivel: "dificil",
    pregunta: "Un equipo protesta porque el árbitro cometió un error de interpretación durante el partido. ¿Qué protesto corresponde?",
    opciones: ["Administrativo", "Técnico", "De equipamiento", "Disciplinario"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-241", origen: "300 preguntas nº 241", nivel: "dificil",
    pregunta: "Un protesto técnico puede basarse en:",
    opciones: ["Solo errores de marcador", "Errores de derecho o errores técnicos/juicios erróneos de los árbitros", "Únicamente problemas de pista", "Solo problemas de equipamiento"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-242", origen: "300 preguntas nº 242", nivel: "dificil",
    pregunta: "Para que un protesto técnico sea relevante según el reglamento, el error debe:",
    opciones: ["Haber ocurrido en el calentamiento", "Poder haber influido directamente en el resultado final", "Ser cometido por un jugador", "Haber sido señalado por el público"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-243", origen: "300 preguntas nº 243", nivel: "dificil",
    pregunta: "¿Quién debe notificar el protesto técnico?",
    opciones: ["El delegado", "El capitán", "El entrenador", "El presidente del club"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-244", origen: "300 preguntas nº 244", nivel: "dificil",
    pregunta: "¿Dónde debe notificarse un protesto técnico?",
    opciones: ["Fuera del recinto", "Dentro de la pista a los árbitros principales", "En la mesa antes del partido", "En los vestuarios"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-245", origen: "300 preguntas nº 245", nivel: "dificil",
    pregunta: "¿Cuándo puede notificarse un protesto técnico?",
    opciones: ["Solo durante el descanso", "Durante cualquier interrupción del juego", "Solo antes del partido", "Solo después de 24 horas"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-246", origen: "300 preguntas nº 246", nivel: "dificil",
    pregunta: "Además de durante cualquier interrupción del juego, ¿existe otra posibilidad para notificar un protesto técnico?",
    opciones: ["Sí, inmediatamente después de señalar el final", "Solo al día siguiente", "Durante el calentamiento", "Antes del sorteo"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-247", origen: "300 preguntas nº 247", nivel: "dificil",
    pregunta: "Una vez declarado un protesto técnico, los árbitros deben informar:",
    opciones: ["Al público", "Inmediatamente al capitán rival", "Solo al árbitro auxiliar", "Al entrenador rival exclusivamente"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-248", origen: "300 preguntas nº 248", nivel: "dificil",
    pregunta: "Después de la declaración de protesto técnico, ¿qué debe asegurarse inmediatamente?",
    opciones: ["El pago de la tasa", "La firma obligatoria del acta por delegados y capitanes", "Una nueva identificación de jugadores", "Un nuevo sorteo"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-249", origen: "300 preguntas nº 249", nivel: "dificil",
    pregunta: "Un capitán recuerda el error arbitral cinco minutos después de abandonar el recinto. ¿Puede cumplir con el procedimiento de notificación del protesto técnico en ese momento?",
    opciones: ["Sí", "No, el reglamento establece el momento durante una interrupción o inmediatamente después del final", "Sí, siempre que firme el árbitro", "Solo si gana el partido"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-250", origen: "300 preguntas nº 250", nivel: "dificil",
    pregunta: "Un delegado pretende presentar un protesto técnico en nombre del capitán durante una interrupción. Según el procedimiento indicado:",
    opciones: ["Es suficiente", "El protesto debe ser notificado por el capitán", "Solo puede hacerlo el entrenador", "Deben hacerlo árbitro y delegado"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-251", origen: "300 preguntas nº 251", nivel: "dificil",
    pregunta: "¿Todos los protestos deben confirmarse posteriormente?",
    opciones: ["No", "Sí", "Solo los administrativos", "Solo los técnicos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-252", origen: "300 preguntas nº 252", nivel: "dificil",
    pregunta: "¿Quién debe realizar posteriormente la confirmación de un protesto?",
    opciones: ["El árbitro principal", "La entidad responsable del equipo", "El capitán personalmente", "El árbitro auxiliar"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-253", origen: "300 preguntas nº 253", nivel: "dificil",
    pregunta: "La confirmación posterior de un protesto debe realizarse:",
    opciones: ["Verbalmente", "Mediante carta oficial", "Mediante llamada telefónica", "En el acta exclusivamente"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-254", origen: "300 preguntas nº 254", nivel: "dificil",
    pregunta: "La carta oficial con la que se confirma un protesto debe ir acompañada de:",
    opciones: ["Una copia del DNI", "Los medios de pago de la tasa correspondiente", "Fotografías de la pista obligatoriamente", "El vídeo completo del partido"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-255", origen: "300 preguntas nº 255", nivel: "dificil",
    pregunta: "En una competición internacional, el protesto debe remitirse a:",
    opciones: ["Solo la federación nacional", "Entidad organizadora y entidad con jurisdicción sobre el evento", "Solo el club rival", "Solo los árbitros"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-256", origen: "300 preguntas nº 256", nivel: "dificil",
    pregunta: "En una competición nacional, la entidad con jurisdicción corresponde a:",
    opciones: ["World Skate exclusivamente", "La federación de afiliación", "El árbitro principal", "El Ayuntamiento"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-257", origen: "300 preguntas nº 257", nivel: "dificil",
    pregunta: "Un equipo presenta un protesto administrativo antes del partido pero nunca lo confirma posteriormente. Según el reglamento:",
    opciones: ["El procedimiento de confirmación sigue siendo obligatorio", "Se convierte automáticamente en técnico", "Se valida automáticamente", "Lo confirma el árbitro"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-258", origen: "300 preguntas nº 258", nivel: "dificil",
    pregunta: "¿Qué acompaña obligatoriamente a la carta oficial de confirmación de un protesto?",
    opciones: ["El acta original", "Los medios de pago de la tasa correspondiente", "Una carta del árbitro", "Una declaración del entrenador"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-259", origen: "300 preguntas nº 259", nivel: "dificil",
    pregunta: "En una competición internacional, ¿qué organismo aparece expresamente como posible entidad con jurisdicción?",
    opciones: ["FIFA", "WORLD SKATE-RHTC", "UEFA", "Comité Olímpico"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-260", origen: "300 preguntas nº 260", nivel: "dificil",
    pregunta: "En una competición nacional, ¿qué entidad aparece expresamente mencionada como destinataria de la confirmación de un protesto?",
    opciones: ["La federación de afiliación", "El Ayuntamiento", "El club local", "El comité olímpico autonómico"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-261", origen: "300 preguntas nº 261", nivel: "dificil",
    pregunta: "Respecto a la hora oficial de inicio, ¿qué margen tiene un equipo para presentarse en pista?",
    opciones: ["5 minutos", "10 minutos", "15 minutos", "20 minutos"], respuestaCorrecta: 2, explicacion: null },

  { id: "D300-262", origen: "300 preguntas nº 262", nivel: "dificil",
    pregunta: "El margen de quince minutos respecto a la hora oficial de inicio se aplica para que el equipo se encuentre:",
    opciones: ["En el vestuario", "En la pista y en condiciones de disputar el partido", "En el pabellón", "En la mesa"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-263", origen: "300 preguntas nº 263", nivel: "dificil",
    pregunta: "Un equipo aparece a los 14 minutos, pero no presenta el número mínimo exigido de jugadores. ¿Qué sucede?",
    opciones: ["Se inicia obligatoriamente", "Se aplican los procedimientos de incomparecencia", "Se concede automáticamente otro cuarto de hora", "Se realiza un saque neutral"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-264", origen: "300 preguntas nº 264", nivel: "dificil",
    pregunta: "Transcurridos los 15 minutos, el equipo sí está presente, pero no reúne el mínimo necesario. ¿Es equivalente a no presentarse?",
    opciones: ["No", "Sí, a efectos del procedimiento de inicio", "Solo si lo solicita el rival", "Solo en competición internacional"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-265", origen: "300 preguntas nº 265", nivel: "dificil",
    pregunta: "Transcurrido el margen de quince minutos sin que uno de los equipos pueda disputar el partido, ¿qué deben hacer los árbitros respecto al equipo presente?",
    opciones: ["Ignorarlo", "Identificar a sus jugadores", "Dar por terminado el partido sin comprobar nada", "Consultar al público"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-266", origen: "300 preguntas nº 266", nivel: "dificil",
    pregunta: "Al identificar al equipo presente, los árbitros deben confirmar:",
    opciones: ["El color de las camisetas", "La presencia del número mínimo exigido", "El número de espectadores", "El número de entrenadores"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-267", origen: "300 preguntas nº 267", nivel: "dificil",
    pregunta: "Si un equipo no puede disputar el partido por no disponer del mínimo reglamentario, ¿qué procedimiento debe aplicar el arbitraje?",
    opciones: ["Los procedimientos previstos para incomparecencia/abandono", "Saque neutral", "Libre directo", "Tiempo muerto"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-268", origen: "300 preguntas nº 268", nivel: "dificil",
    pregunta: "Un equipo llega dentro de los 15 minutos, pero sus jugadores no están preparados para disputar el partido. ¿El margen se considera cumplido automáticamente?",
    opciones: ["Sí", "El reglamento habla de presentarse en pista en condiciones de disputar el partido", "Sí, siempre", "Solo depende del capitán"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-269", origen: "300 preguntas nº 269", nivel: "dificil",
    pregunta: "¿Quién debe realizar los procedimientos correspondientes cuando transcurre el margen de quince minutos para presentarse en pista?",
    opciones: ["La mesa", "Los árbitros principales", "El delegado técnico", "El entrenador local"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-270", origen: "300 preguntas nº 270", nivel: "dificil",
    pregunta: "¿Qué elemento debe confirmarse al identificar al equipo presente?",
    opciones: ["Número mínimo exigido para poder comenzar", "Número de espectadores", "Número de entrenadores", "Número de patrocinadores"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-271", origen: "300 preguntas nº 271", nivel: "dificil",
    pregunta: "Tres equipos terminan empatados a puntos. ¿Qué partidos se consideran inicialmente para desempatar?",
    opciones: ["Todos los partidos del campeonato", "Solo los partidos entre los equipos implicados", "Solo los partidos contra el último clasificado", "Solo la última jornada"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-272", origen: "300 preguntas nº 272", nivel: "dificil",
    pregunta: "En el desempate entre tres o más equipos, considerando solo los partidos disputados entre ellos, el primer criterio es:",
    opciones: ["Diferencia de goles general", "Mayor número de puntos obtenidos entre los equipos implicados", "Ratio general", "Goles marcados"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-273", origen: "300 preguntas nº 273", nivel: "dificil",
    pregunta: "En el desempate entre tres o más equipos, si el empate se mantiene tras los puntos obtenidos entre ellos, se analiza:",
    opciones: ["Número de tarjetas", "Diferencia entre goles marcados y sufridos entre los equipos implicados", "Goles fuera de casa", "Posesión"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-274", origen: "300 preguntas nº 274", nivel: "dificil",
    pregunta: "En el desempate entre tres o más equipos, si el empate se mantiene tras la diferencia de goles entre ellos, se utiliza:",
    opciones: ["Ratio de goles marcados entre goles encajados", "Número de victorias generales", "Tarjetas azules", "Faltas de equipo"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-275", origen: "300 preguntas nº 275", nivel: "dificil",
    pregunta: "La ratio de goles que se utiliza como criterio de desempate en la clasificación es:",
    opciones: ["Goles encajados / goles marcados", "Goles marcados / goles encajados", "Victorias / goles", "Goles / partidos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-276", origen: "300 preguntas nº 276", nivel: "dificil",
    pregunta: "Si tras aplicar los criterios referidos a los partidos entre los equipos implicados continúa el empate, se pasa a considerar:",
    opciones: ["Solo el último partido", "Todos los partidos de la fase correspondiente", "Solo los enfrentamientos directos", "El sorteo inmediatamente"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-277", origen: "300 preguntas nº 277", nivel: "dificil",
    pregunta: "Cuando el desempate pasa a considerar todos los partidos de la fase correspondiente, el primer criterio será:",
    opciones: ["Mayor diferencia entre goles marcados y sufridos", "Mayor número de tarjetas", "Mayor número de goles encajados", "Mayor posesión"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-278", origen: "300 preguntas nº 278", nivel: "dificil",
    pregunta: "Si continúa el empate después de la diferencia general de goles, se utiliza:",
    opciones: ["Ratio general de goles marcados/goles encajados", "Número de victorias", "Goles marcados en el último partido", "Sorteo"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-279", origen: "300 preguntas nº 279", nivel: "dificil",
    pregunta: "En una competición a dos rondas, si tres equipos están empatados, inicialmente se consideran:",
    opciones: ["Todos los partidos de ambas rondas", "Solo los partidos entre los equipos implicados", "Solo los partidos de la segunda ronda", "Solo los partidos como local"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-280", origen: "300 preguntas nº 280", nivel: "dificil",
    pregunta: "En una competición a dos rondas, si persiste el empate después de los criterios entre los equipos implicados, se consideran:",
    opciones: ["Todos los partidos de todas las fases del evento", "Solo la segunda ronda", "Solo los partidos de casa", "Solo los partidos entre ellos"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-281", origen: "300 preguntas nº 281", nivel: "dificil",
    pregunta: "Tres equipos empatados tienen los mismos puntos en sus enfrentamientos directos. También tienen la misma diferencia de goles. ¿Qué criterio se utiliza después?",
    opciones: ["Ratio de goles marcados/goles encajados", "Tarjetas", "Goles marcados en el último partido", "Sorteo"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-282", origen: "300 preguntas nº 282", nivel: "dificil",
    pregunta: "Tres equipos presentan la misma ratio en los partidos entre ellos. ¿Qué debe analizarse a continuación?",
    opciones: ["Todos los partidos de la fase correspondiente", "Solo el último partido", "Solo los goles marcados entre ellos", "Sorteo inmediato"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-283", origen: "300 preguntas nº 283", nivel: "dificil",
    pregunta: "Si en todos los criterios previstos continúa el empate, ¿quién decidirá el criterio de desempate?",
    opciones: ["El árbitro principal", "World Skate-RHTC", "El capitán más antiguo", "El equipo local"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-284", origen: "300 preguntas nº 284", nivel: "dificil",
    pregunta: "Antes de decidir un criterio de desempate extraordinario, World Skate-RHTC consultará:",
    opciones: ["Solo a los árbitros", "A los equipos que intervienen o están afectados", "Al público", "A los patrocinadores"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-285", origen: "300 preguntas nº 285", nivel: "dificil",
    pregunta: "En una clasificación de tres equipos, ¿puede utilizarse directamente la diferencia de goles de todos los partidos antes de analizar los enfrentamientos entre ellos?",
    opciones: ["Sí", "No", "Solo si son tres equipos", "Solo en dos rondas"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-286", origen: "300 preguntas nº 286", nivel: "dificil",
    pregunta: "En la primera fase del desempate entre tres equipos, ¿qué población de partidos se utiliza para calcular la ratio?",
    opciones: ["Todos los partidos del evento", "Los partidos entre los equipos afectados", "Solo los partidos contra otros equipos", "Solo los partidos de la segunda ronda"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-287", origen: "300 preguntas nº 287", nivel: "dificil",
    pregunta: "Una vez agotados los criterios específicos entre los equipos implicados, ¿qué información pasa a considerarse?",
    opciones: ["Los partidos disputados durante toda la fase correspondiente", "Solo el primer partido", "Solo los partidos entre los dos primeros", "El número de tarjetas"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-288", origen: "300 preguntas nº 288", nivel: "dificil",
    pregunta: "En el criterio general de diferencia de goles, se compara:",
    opciones: ["Solo goles marcados", "Goles marcados menos goles sufridos", "Goles sufridos menos goles marcados", "Goles del último partido"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-289", origen: "300 preguntas nº 289", nivel: "dificil",
    pregunta: "En el criterio de ratio, una ratio mayor significa:",
    opciones: ["Menor cantidad de goles marcados", "Mayor relación entre goles marcados y goles encajados", "Mayor número de tarjetas", "Mayor diferencia de puntos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-290", origen: "300 preguntas nº 290", nivel: "dificil",
    pregunta: "Si no existe ningún criterio previsto capaz de romper el empate:",
    opciones: ["Siempre se sortea", "World Skate-RHTC establece el criterio previa consulta", "El árbitro decide", "Gana el equipo con menos tarjetas"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-291", origen: "300 preguntas nº 291", nivel: "dificil",
    pregunta: "Al señalar un gol, el árbitro debe hacer sonar el silbato:",
    opciones: ["Una vez larga", "Dos veces de forma corta e intensa", "Tres veces", "Dos veces largas"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-292", origen: "300 preguntas nº 292", nivel: "dificil",
    pregunta: "Después de señalar un gol haciendo sonar su silbato, el árbitro debe:",
    opciones: ["Quedarse junto a la portería", "Dirigirse al centro de pista", "Ir a la mesa", "Ir al banquillo"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-293", origen: "300 preguntas nº 293", nivel: "dificil",
    pregunta: "Tras señalar un gol y dirigirse al centro de la pista, el árbitro debe indicar a la mesa oficial de juego:",
    opciones: ["El minuto del gol exclusivamente", "El número de dorsal del jugador que marcó", "El nombre del entrenador", "La asistencia"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-294", origen: "300 preguntas nº 294", nivel: "dificil",
    pregunta: "Para señalar un penalti o libre directo, el árbitro:",
    opciones: ["Se queda en el centro", "Se dirige a la marca correspondiente", "Se dirige al banquillo", "Levanta ambos brazos"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-295", origen: "300 preguntas nº 295", nivel: "dificil",
    pregunta: "En un penalti o libre directo, excepto el lanzador y el portero infractor, los demás jugadores deben situarse:",
    opciones: ["Fuera de la pista", "Dentro del área de penalti del equipo encargado de ejecutarlo", "En la zona defensiva", "En el centro"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-296", origen: "300 preguntas nº 296", nivel: "dificil",
    pregunta: "En un penalti o libre directo, ¿quién controla la posición de los jugadores que no intervienen directamente durante la preparación del lanzamiento?",
    opciones: ["El entrenador", "Uno de los árbitros", "El árbitro auxiliar exclusivamente", "El delegado"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-297", origen: "300 preguntas nº 297", nivel: "dificil",
    pregunta: "En un penalti o libre directo, el árbitro que controla la colocación de los jugadores debe comunicar al otro árbitro:",
    opciones: ["Que puede iniciarse la ejecución", "El dorsal del lanzador", "El resultado del partido", "La duración del ataque"], respuestaCorrecta: 0, explicacion: null },

  { id: "D300-298", origen: "300 preguntas nº 298", nivel: "dificil",
    pregunta: "En un libre directo o penalti, ¿qué dos personas son las excepciones respecto a la colocación de los demás jugadores?",
    opciones: ["Capitán y delegado", "Lanzador y portero del equipo infractor", "Dos capitanes", "Portero y entrenador"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-299", origen: "300 preguntas nº 299", nivel: "dificil",
    pregunta: "Un jugador de un equipo distinto al lanzador permanece fuera del área de penalti durante la preparación del libre directo. Según el procedimiento descrito:",
    opciones: ["Su posición es la reglamentaria", "No está en la posición establecida para los demás jugadores", "Debe colocarse junto al portero", "Debe salir del pabellón"], respuestaCorrecta: 1, explicacion: null },

  { id: "D300-300", origen: "300 preguntas nº 300", nivel: "dificil",
    pregunta: "Un árbitro muestra una tarjeta roja, registra la infracción y debe elaborar el informe correspondiente. ¿Qué conjunto de actuaciones se ajusta al reglamento?",
    opciones: ["Solo registrar la tarjeta en el acta", "Registrar la medida disciplinaria y elaborar informe confidencial detallando infracción, circunstancias y motivos", "No registrar nada si el jugador abandona la pista", "Registrar únicamente el dorsal"], respuestaCorrecta: 1, explicacion: null }
];
