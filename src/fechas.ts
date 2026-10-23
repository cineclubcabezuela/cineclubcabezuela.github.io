import { TEMPORADA } from './contenido';

/** Casilla del pasaporte que corresponde a una fecha (0 = NOV … 9 = AGO), o null si cae fuera de la temporada. */
export function casillaDeFecha(fecha: Date): number | null {
  const m = fecha.getMonth(); // 0 = enero
  const a = fecha.getFullYear();
  if (a === TEMPORADA.anioInicio && m >= 10) return m - 10;
  if (a === TEMPORADA.anioInicio + 1 && m <= 7) return m + 2;
  return null;
}
