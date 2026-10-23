import type { CSSProperties } from 'react';
import { Icono } from './Icono';
import { Sello } from './Sello';

export type EstadoCasilla = 'vacia' | 'sellada' | 'hueco';

interface Props {
  indice: number;
  mes: string;
  mesLargo: string;
  estado: EstadoCasilla;
  /** Clave que cambia para volver a animar el sello (al rellenar varias de golpe). */
  tanda?: number;
  retraso?: number;
  /** Si en esta casilla se llega a un regalo (6, 8 o 10), se marca. */
  regalo?: number;
  onClick?: () => void;
}

const DESCRIPCION: Record<EstadoCasilla, string> = {
  vacia: 'sin sellar',
  sellada: 'sellada',
  hueco: 'sin sellar: aquí se rompe la racha',
};

/** Una casilla del pasaporte. Con onClick es un botón (simulador); sin él, solo dibujo. */
export function Casilla({ indice, mes, mesLargo, estado, tanda = 0, retraso, regalo, onClick }: Props) {
  const sellada = estado === 'sellada';
  const contenido = (
    <>
      <span className="casilla-mes">{mes}</span>
      {sellada && <Sello key={tanda} indice={indice} retraso={retraso} />}
      {estado === 'hueco' && <span className="casilla-tachon" aria-hidden="true" />}
      {regalo && (
        <span
          className={`casilla-regalo${sellada ? ' casilla-regalo-si' : ''}`}
          style={sellada ? ({ animationDelay: `${(retraso ?? 0) + 280}ms` } as CSSProperties) : undefined}
          aria-hidden="true"
        >
          <Icono nombre="regalo" />
          {regalo}
        </span>
      )}
    </>
  );
  const clase = `casilla casilla-${estado}`;
  if (!onClick) return <span className={clase}>{contenido}</span>;
  return (
    <button
      type="button"
      className={clase}
      aria-pressed={sellada}
      aria-label={`${mesLargo}: ${DESCRIPCION[estado]}`}
      onClick={onClick}
    >
      {contenido}
    </button>
  );
}
