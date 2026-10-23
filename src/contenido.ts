// =====================================================================
//  CONTENIDO DE LA APP · CINECLUB CABEZUELA
// =====================================================================
//
//  Este es el ÚNICO archivo que hay que tocar para cambiar los textos.
//
//  La app no lleva fechas ni lugares de sesiones concretas: vale para
//  toda la temporada sin tocar nada. Lo único que se puede ir cambiando
//  (si queréis) son las PISTAS de la peli del mes.
//
//  Reglas para no romper nada:
//    · Los textos van entre comillas simples: 'así'.
//    · Si el texto lleva un apóstrofo, usad comillas dobles: "así".
//    · Algunos textos van entre `acentos graves` porque llevan el precio
//      dentro, así: ${PRECIO_SOCIO}. No toquéis lo que va entre ${ }.
//    · No borréis las comas del final de cada línea.
//    · Para poner algo en negrita, rodeadlo de dos asteriscos: '**así**'.
//    · NUNCA escribáis el título de la peli. Solo pistas.
//
//  Las líneas que empiezan por // son comentarios: la app no las muestra.
// =====================================================================


// ---------------------------------------------------------------------
//  0. PRECIOS  (se escriben solos en todos los textos de la app)
// ---------------------------------------------------------------------
export const PRECIO_SOCIO = 10;    // euros por sesión
export const PRECIO_INVITADO = 15; // euros por sesión


// ---------------------------------------------------------------------
//  1. PORTADA  (la primera pantalla de la app)
// ---------------------------------------------------------------------
//  Palabras que pasan en la cinta de abajo de la portada.
export const MARQUESINA = [
  'Una peli al mes',
  'Charla',
  'Algo para picar',
  'Pistas',
  'Pasaporte de cine',
  'Regalos sorpresa',
  'Sesiones especiales',
];


// ---------------------------------------------------------------------
//  2. PISTAS DE LA PELI  (opcional, cada mes)
// ---------------------------------------------------------------------
//  Una línea por pista, entre comillas y con coma al final.
//  Salen en la pestaña «Guía». Poned la MÁS NUEVA AL FINAL: es la que
//  sale en grande. Las anteriores se ven debajo, más pequeñas.
//  Al empezar un mes nuevo, borrad las pistas del mes anterior.
//  Si la lista está vacía, la app pone «Aún no hay pista este mes».
//
//  Ejemplo (quitad las dos barras // para que se vea):
//    'Primera pista',
//    'Segunda pista',
export const PISTAS: string[] = [
];


// ---------------------------------------------------------------------
//  3. TEMPORADA  (cambiar solo al empezar temporada nueva)
// ---------------------------------------------------------------------
export const TEMPORADA = {
  // Como se escribe en el carné.
  nombre: '2026–27',
  // Año en que empieza la temporada (el de noviembre).
  anioInicio: 2026,
};

// Las 10 casillas del pasaporte, en orden. No hace falta tocarlas.
export const MESES = [
  { corto: 'NOV', largo: 'noviembre' },
  { corto: 'DIC', largo: 'diciembre' },
  { corto: 'ENE', largo: 'enero' },
  { corto: 'FEB', largo: 'febrero' },
  { corto: 'MAR', largo: 'marzo' },
  { corto: 'ABR', largo: 'abril' },
  { corto: 'MAY', largo: 'mayo' },
  { corto: 'JUN', largo: 'junio' },
  { corto: 'JUL', largo: 'julio' },
  { corto: 'AGO', largo: 'agosto' },
];

// Meses seguidos que dan regalo sorpresa.
export const REGALOS = [6, 8, 10];


// ---------------------------------------------------------------------
//  4. CARNÉ DE EJEMPLO  (el que se ve girando en la app)
// ---------------------------------------------------------------------
export const CARNE_EJEMPLO = {
  numero: '0001',
  nombre: 'Tu nombre aquí',
  socioDesde: 'NOV 2026',
  // Casillas que salen selladas en la trasera (0 = NOV, 1 = DIC, 2 = ENE...).
  sellos: [0, 1, 2],
};


// ---------------------------------------------------------------------
//  5. TEXTOS GENERALES
// ---------------------------------------------------------------------
export const LEMA = '1 vez al mes · 1 película';
export const INTRO = 'Nos juntamos a hablar de la peli del mes, en buena compañía y con algo para picar.';

export const CLUB = {
  titular: 'Un club, no un cine',
};

// Frase de la cabecera de «Tu carné».
export const CARNE_INTRO = 'Por delante, vuestro nombre. Por detrás, vuestro pasaporte de cine.';
export const CARNE_HACERSE = '**Cómo hacerse socio:** en la puerta, el día de cualquier sesión. Mejor avisar antes.';


// ---------------------------------------------------------------------
//  6. PASAPORTE DE CINE  (la sección grande de «Carné»)
// ---------------------------------------------------------------------
export const PASAPORTE = {
  // El titular sale en dos líneas; la segunda, destacada en rojo.
  titular: 'Cada mes,',
  destacado: 'un sello',
  entradilla: '10 casillas, una por cada mes de la temporada: de noviembre a agosto.',
  racha: 'Meses seguidos hacen **racha**: a los **6, 8 y 10**, regalo sorpresa.',
  ejemplo: 'Ejemplo: temporada completa',
};


// ---------------------------------------------------------------------
//  6 bis. QUÉ INCLUYE EL CARNÉ
// ---------------------------------------------------------------------
//  icono: carne · euro · prioridad · canales · pasaporte · regalo ·
//         estrella · lupa · sorpresa · guia
export const INCLUYE = [
  { icono: 'carne',     titulo: 'Personal y con tu nombre',   detalle: 'Para mayores de 16 años.' },
  { icono: 'euro',      titulo: 'Precio de socio',            detalle: `${PRECIO_SOCIO} € por sesión, en vez de ${PRECIO_INVITADO} €.` },
  { icono: 'prioridad', titulo: 'Prioridad de plaza',         detalle: 'Si se llena, los socios van primero.' },
  { icono: 'canales',   titulo: 'Canales del club',           detalle: 'Avisos, pistas y confirmación de asistencia.' },
  { icono: 'regalo',    titulo: 'Regalos sorpresa',           detalle: 'Por las rachas del pasaporte.' },
  { icono: 'estrella',  titulo: 'Sesiones especiales',        detalle: 'Los extras que vayamos organizando.' },
  { icono: 'lupa',      titulo: '¿Adivináis la peli?',        detalle: 'Si acertáis, salís en la guía del visionado y entráis en el ranking.' },
  { icono: 'sorpresa',  titulo: 'Sorpresas entre socios',     detalle: 'De vez en cuando se sortean detalles.' },
];


// ---------------------------------------------------------------------
//  7. CÓMO SE PAGA Y SE SELLA  (va dentro de la sección del pasaporte)
// ---------------------------------------------------------------------
//  icono: club · euro · sello · calendarioNo
export const PASOS = [
  { icono: 'club',         texto: 'Venís a la sesión del mes.' },
  { icono: 'euro',         texto: `Pagáis **${PRECIO_SOCIO} € en efectivo** en la puerta.`, nota: 'Mejor justo: no siempre hay cambio.' },
  { icono: 'sello',        texto: 'Os sellamos la casilla de ese mes.' },
  { icono: 'calendarioNo', texto: '¿Un mes no podéis venir? **Ese mes no se paga.**', nota: 'Eso sí, la racha vuelve a cero.' },
];

export const SIN = ['Sin cuota fija', 'Sin pagar por adelantado', 'Sin deudas'];


// ---------------------------------------------------------------------
//  8. LETRA PEQUEÑA DEL PASAPORTE  (sale en «Carné» y también en «Dudas»)
// ---------------------------------------------------------------------
export const LETRA_PEQUENA = [
  {
    p: '¿Cuándo me dan el carné?',
    r: 'En la sesión siguiente a apuntarte, con la primera casilla ya sellada: **la racha cuenta desde el primer día**.',
  },
  {
    p: '¿Y si pierdo el carné?',
    r: '**No pierdes tus sellos:** el club apunta en una hoja quién viene cada mes.',
  },
  {
    p: '¿Las sesiones especiales cuentan?',
    r: 'No: son un extra. **Ni se sellan ni rompen la racha.**',
  },
  {
    p: '¿La racha pasa a la temporada siguiente?',
    r: 'No. Cada temporada hay **pasaporte nuevo** y todos empiezan de cero.',
  },
];


// ---------------------------------------------------------------------
//  9. CONFIRMAR ASISTENCIA  (sale en «El club»)
// ---------------------------------------------------------------------
export const CONFIRMAR = {
  entradilla: 'Fecha, hora y lugar de cada sesión os los contamos por los canales del club.',
  pasos: [
    'La semana de la sesión os preguntamos **quién viene**.',
    'El local tiene un **aforo máximo**.',
    'Las plazas van por orden de apuntarse: **primero socios**, luego invitados.',
  ],
  aviso: '¡No lo dejéis para el último día!',
};


// ---------------------------------------------------------------------
//  9 bis. GUÍA DEL VISIONADO  (pestaña «Guía»)
// ---------------------------------------------------------------------
//  icono: lupa · sorpresa · guia · canales · club · ojo · estrella
export const GUIA = {
  titular: 'Cada peli, con su guía',
  entradilla: 'En cada sesión os damos una guía con información de la peli. Así no hace falta saber de cine.',

  // Cómo funciona, paso a paso.
  pasos: [
    { icono: 'lupa',    titulo: 'Los días previos', texto: 'Damos pistas sobre cuál será la peli.' },
    { icono: 'guia',    titulo: 'En la sesión',     texto: 'Os damos la guía, para tenerla a mano.' },
    { icono: 'canales', titulo: 'Y charla',         texto: 'Con algo para picar.' },
  ],

  // El juego de las pistas.
  adivina: {
    entradilla: 'Si la acertáis antes de la sesión, tiene premio:',
    premios: [
      { icono: 'guia',     titulo: 'Mención en la guía', texto: 'Quien acierte sale con su nombre en la guía de esa sesión.' },
      { icono: 'estrella', titulo: 'Ranking',            texto: 'Cada acierto suma en el ranking para las sorpresas.' },
    ],
  },

  // Consejos para la charla.
  charla: [
    { icono: 'ojo',     titulo: 'Fijaos en lo que os llame', texto: 'Un personaje, una escena, la música… Todo sirve.' },
    { icono: 'canales', titulo: 'Vale cualquier opinión',    texto: 'También si no os ha gustado.' },
    { icono: 'club',    titulo: 'Escuchar también vale',     texto: 'Nadie tiene que hablar si no quiere.' },
  ],
};


// ---------------------------------------------------------------------
//  10. SESIONES ESPECIALES
// ---------------------------------------------------------------------
//  Son IDEAS, no un calendario cerrado: la app las presenta así.
export const SESIONES_INTRO = 'Son ideas, no un calendario: iremos viendo cuáles salen y os avisaremos.';

export const SESIONES_ESPECIALES = [
  { nombre: 'El socio elige',      linea: 'Un socio propone la peli y la presenta.' },
  { nombre: 'Sesión de Navidad',   linea: 'Chocolate, roscón e intercambio de detalles.' },
  { nombre: 'Cine en familia',     linea: 'Una peli para peques, y charla en familia.' },
  { nombre: 'Abuelos y nietos',    linea: 'Una peli de las de antes, y los mayores cuentan cómo era ir al cine en el pueblo.' },
  { nombre: 'Cine con sabor',      linea: 'El picoteo va a juego con la peli, con productos y recetas de aquí.' },
  { nombre: 'Sesión de verano',    linea: 'Al fresco, para cerrar la temporada.' },
  { nombre: 'Sesión con invitado', linea: 'Alguien que sepa del tema de la peli viene a charlar.' },
];


// ---------------------------------------------------------------------
//  11. INVITADOS (NO SOCIOS)
// ---------------------------------------------------------------------
export const INVITADOS = {
  puntos: [
    'Vienen **invitados por un socio**.',
    'Solo **si queda sitio**.',
    '**Sin pasaporte** ni sellos.',
  ],
};


// ---------------------------------------------------------------------
//  12. NORMAS DEL CLUB
// ---------------------------------------------------------------------
export const NORMAS = [
  'El carné es para **mayores de 16 años**.',
  `Socios, **${PRECIO_SOCIO} €** en efectivo por sesión. Invitados, **${PRECIO_INVITADO} €**.`,
  'La racha solo cuenta **meses seguidos** y se reinicia cada temporada.',
  '**Plazas limitadas**: hay que confirmar asistencia.',
  'Las sesiones especiales son **un extra**: no sustituyen a la peli del mes ni cuentan para la racha.',
  'De la peli **solo se dan pistas**: el título no se anuncia en público.',
];


// ---------------------------------------------------------------------
//  13. DUDAS (preguntas frecuentes)
// ---------------------------------------------------------------------
//  Cada grupo tiene un título y sus preguntas (p) con respuesta (r).
//  Las de la letra pequeña del pasaporte se añaden solas (ver apartado 8).
const [cuandoCarne, pierdoCarne, especialesCuentan, rachaSiguiente] = LETRA_PEQUENA;

export const DUDAS = [
  {
    grupo: 'Carné y pago',
    preguntas: [
      { p: '¿Cómo me hago socio?', r: 'En la puerta, el día de cualquier sesión (mejor avisar antes). Es para **mayores de 16 años** y lleva tu nombre.' },
      { p: '¿Cuánto cuesta ser socio?', r: `No hay cuota: pagas **${PRECIO_SOCIO} € cada mes que vienes**. Sin carné, ${PRECIO_INVITADO} €.` },
      { p: '¿Pago meses por adelantado?', r: 'No. Se paga en efectivo al entrar, **sesión a sesión**.' },
      { p: '¿Y si un mes no puedo ir?', r: '**No pagas ni debes nada**, pero la racha vuelve a cero.' },
      { p: '¿Llevo el dinero justo?', r: 'Mejor sí: **no siempre hay cambio**.' },
      cuandoCarne,
      pierdoCarne,
    ],
  },
  {
    grupo: 'Pasaporte y racha',
    preguntas: [
      { p: '¿Cómo funciona la racha?', r: 'Cada vez que vienes se sella la casilla de ese mes. Solo cuentan los **meses seguidos**: si fallas uno, vuelta a empezar.' },
      { p: '¿Qué regalos hay?', r: '**Regalos sorpresa** a los **6, 8 y 10 meses seguidos**, y se suman: con 10, te llevas los tres.' },
      { p: '¿Pierdo un regalo si luego falto?', r: 'No. **Lo que ya has ganado es tuyo**; solo se reinicia la cuenta.' },
      { p: 'Si empiezo más tarde, ¿tengo regalo?', r: 'Empezando en **noviembre** llegas a 10; en **enero** o antes, a 8; en **marzo** o antes, a 6.' },
      especialesCuentan,
      rachaSiguiente,
    ],
  },
  {
    grupo: 'Sesiones',
    preguntas: [
      { p: '¿Cuándo y dónde son las sesiones?', r: 'Una vez al mes. **Fecha, hora y lugar** se avisan por los canales del club.' },
      { p: '¿Cómo confirmo que voy?', r: 'Respondiendo al aviso de la semana de la sesión. Plazas por orden, primero socios, **hasta llenar**.' },
      { p: '¿Se sabe antes qué peli es?', r: 'No: los días previos solo damos **pistas**. Quien acierte sale mencionado en la guía y entra en el ranking.' },
      { p: '¿Qué es la guía del visionado?', r: 'Lo que os damos en cada sesión: **información de la peli** y los nombres de quienes acertaron las pistas.' },
      { p: '¿Hace falta saber de cine?', r: '**No.** Para eso está la guía, y en la charla vale cualquier opinión.' },
    ],
  },
  {
    grupo: 'Invitados',
    preguntas: [
      { p: '¿Puedo ir sin ser socio?', r: `Sí, si te invita un socio y queda sitio. Son **${PRECIO_INVITADO} € por sesión** y no lleva pasaporte.` },
    ],
  },
];
