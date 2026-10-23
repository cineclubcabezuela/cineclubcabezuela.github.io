// El símbolo del club: una pantalla de cine con tres cabezas de público
// recortadas delante. Medidas sacadas del logo original (600 × 390).

/** Franja de público con las tres cabezas (de izquierda a derecha). */
export const PUBLICO = 'M0 324H70A75 75 0 0 1 220 324H230A85 85 0 0 1 400 324H430A50 50 0 0 1 530 324H600V390H0Z';
/** La pantalla con las cabezas recortadas (para el sello, de una sola tinta). */
export const PANTALLA_RECORTADA = 'M0 0H600V324H530A50 50 0 0 0 430 324H400A85 85 0 0 0 230 324H220A75 75 0 0 0 70 324H0Z';

interface Props {
  pantalla?: string;
  publico?: string;
  className?: string;
  /** Si se da, el símbolo se anuncia a lectores de pantalla con este texto. */
  titulo?: string;
}

export function Simbolo({ pantalla = 'var(--crema)', publico = 'var(--negro)', className, titulo }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 390"
      role={titulo ? 'img' : undefined}
      aria-label={titulo}
      aria-hidden={titulo ? undefined : true}
      focusable="false"
    >
      <rect width="600" height="324" fill={pantalla} />
      <path d={PUBLICO} fill={publico} />
    </svg>
  );
}
