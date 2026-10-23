import type { CSSProperties } from 'react';
import { PANTALLA_RECORTADA } from './Simbolo';

// Giro de cada sello, para que no parezcan todos iguales (como a mano).
const GIROS = [-8, 5, -3, 7, -6, 4, -9, 6, -4, 8];

interface Props {
  indice: number;
  /** Retraso de la animación en ms (para sellar varias casillas seguidas). */
  retraso?: number;
}

/** El sello del club: el símbolo de una sola tinta dentro de un doble aro. */
export function Sello({ indice, retraso = 0 }: Props) {
  return (
    <svg
      className="sello"
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
      style={{ '--giro': `${GIROS[indice % GIROS.length]}deg`, animationDelay: `${retraso}ms` } as CSSProperties}
    >
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="5" />
      <circle cx="50" cy="50" r="37.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d={PANTALLA_RECORTADA} fill="currentColor" transform="translate(21 31.2) scale(0.0967)" />
    </svg>
  );
}
