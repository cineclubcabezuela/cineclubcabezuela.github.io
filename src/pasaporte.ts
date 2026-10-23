// Cálculos del pasaporte de cine: rachas, regalos y "¿cuándo empiezo?".
// Funciones puras, sin dependencias, para poder probarlas con `npm test`.

export interface Racha {
  inicio: number; // índice de la primera casilla (0 = NOV)
  fin: number;    // índice de la última casilla
  largo: number;
}

export interface Analisis {
  sellados: number;
  rachas: Racha[];
  /** Meses seguidos de la racha que termina en la última casilla sellada. */
  rachaActual: number;
  mejorRacha: number;
  /** Umbrales de regalo conseguidos (se acumulan y no se pierden). */
  regalos: number[];
  /** Casillas sin sellar entre la primera y la última sellada. */
  huecos: number[];
  /** El hueco que reinició la racha actual, si lo hay. */
  ultimoHueco: number | null;
  /** Próximo regalo que aún se puede alcanzar con la racha actual. */
  siguiente: { umbral: number; faltan: number } | null;
}

export function analizar(sellos: readonly boolean[], umbrales: readonly number[]): Analisis {
  const rachas: Racha[] = [];
  let inicio = -1;
  sellos.forEach((sellado, i) => {
    if (sellado && inicio < 0) inicio = i;
    const terminaAqui = sellado && (i === sellos.length - 1 || !sellos[i + 1]);
    if (terminaAqui) {
      rachas.push({ inicio, fin: i, largo: i - inicio + 1 });
      inicio = -1;
    }
  });

  const sellados = sellos.filter(Boolean).length;
  const actual = rachas.at(-1);
  const rachaActual = actual?.largo ?? 0;
  const mejorRacha = Math.max(0, ...rachas.map((r) => r.largo));
  const regalos = umbrales.filter((u) => mejorRacha >= u);

  const huecos: number[] = [];
  for (let k = 1; k < rachas.length; k++) {
    for (let i = rachas[k - 1].fin + 1; i < rachas[k].inicio; i++) huecos.push(i);
  }
  const ultimoHueco = actual && actual.inicio > 0 && rachas.length > 1 ? actual.inicio - 1 : null;

  const restantes = sellos.length - 1 - (actual?.fin ?? -1);
  const posible = rachaActual + restantes;
  const umbral = umbrales.find((u) => !regalos.includes(u) && u > rachaActual && u <= posible);
  const siguiente = umbral === undefined ? null : { umbral, faltan: umbral - rachaActual };

  return { sellados, rachas, rachaActual, mejorRacha, regalos, huecos, ultimoHueco, siguiente };
}

export interface Plan {
  maxSeguidos: number;
  /** Cada regalo alcanzable y el índice del mes en que se consigue. */
  regalos: { umbral: number; mes: number }[];
}

/** Empezando en la casilla `mesInicio` y sin faltar ningún mes. */
export function cuandoEmpiezo(mesInicio: number, totalCasillas: number, umbrales: readonly number[]): Plan {
  const maxSeguidos = totalCasillas - mesInicio;
  const regalos = umbrales
    .filter((u) => u <= maxSeguidos)
    .map((umbral) => ({ umbral, mes: mesInicio + umbral - 1 }));
  return { maxSeguidos, regalos };
}

/** Casillas selladas desde `desde` hasta el final, saltando las de `excepto`. */
export function patron(total: number, desde = 0, excepto: number[] = []): boolean[] {
  return Array.from({ length: total }, (_, i) => i >= desde && !excepto.includes(i));
}
