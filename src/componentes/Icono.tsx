// Iconos sencillos y geométricos, dibujados para la app (24 × 24).
import type { ReactNode } from 'react';

const RELLENO = { fill: 'currentColor', stroke: 'none' };

const ICONOS: Record<string, ReactNode> = {
  inicio: (
    <>
      <path d="M3.5 11 12 4l8.5 7" />
      <path d="M6 9.5V20h12V9.5" />
    </>
  ),
  carne: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
      <rect x="5.5" y="8" width="6" height="4" {...RELLENO} />
      <path d="M14 9h4.5M14 12.5h4.5M5.5 15.5h13" />
    </>
  ),
  club: (
    <>
      <rect x="2.5" y="5" width="19" height="11" />
      <path d="M2 16h2.3a2.6 2.6 0 0 1 5.2 0h.5a2.9 2.9 0 0 1 5.8 0h1a1.8 1.8 0 0 1 3.6 0H22v3H2z" {...RELLENO} />
    </>
  ),
  dudas: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M9.2 9.6a2.9 2.9 0 1 1 4.1 2.6c-.8.4-1.3.9-1.3 1.8v.4" />
      <circle cx="12" cy="17.2" r="1.25" {...RELLENO} />
    </>
  ),
  euro: (
    <>
      <path d="M18 6.4a7.2 7.2 0 1 0 0 11.2" />
      <path d="M3.5 10.3h9M3.5 13.7h9" />
    </>
  ),
  prioridad: (
    <>
      <path d="M3 6.5h18v3.2a2.3 2.3 0 0 0 0 4.6v3.2H3v-3.2a2.3 2.3 0 0 0 0-4.6z" />
      <path d="M10.6 10 12.6 8.6v6.8" />
    </>
  ),
  canales: (
    <>
      <path d="M3.5 4.5h17v12h-10l-5 4v-4h-2z" />
      <circle cx="8.3" cy="10.5" r="1.2" {...RELLENO} />
      <circle cx="12" cy="10.5" r="1.2" {...RELLENO} />
      <circle cx="15.7" cy="10.5" r="1.2" {...RELLENO} />
    </>
  ),
  pasaporte: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" />
      <path d="M6.3 5.5v13M10.1 5.5v13M13.9 5.5v13M17.7 5.5v13M2.5 12h19" />
      <rect x="2.5" y="5.5" width="3.8" height="6.5" {...RELLENO} />
      <rect x="6.3" y="5.5" width="3.8" height="6.5" {...RELLENO} />
    </>
  ),
  regalo: (
    <>
      <rect x="4" y="11" width="16" height="9.5" />
      <rect x="2.5" y="7.5" width="19" height="3.5" />
      <path d="M12 7.5v13" />
      <path d="M12 7.5C10.8 4.2 7 4.3 7.6 6.4 8 7.6 12 7.5 12 7.5zM12 7.5c1.2-3.3 5-3.2 4.4-1.1-.4 1.2-4.4 1.1-4.4 1.1z" />
    </>
  ),
  guia: (
    <>
      <path d="M12 6.5C10 5 6.5 4.5 3 5v13c3.5-.5 7 0 9 1.5 2-1.5 5.5-2 9-1.5V5c-3.5-.5-7 0-9 1.5z" />
      <path d="M12 6.5v13" />
    </>
  ),
  estrella: <path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z" strokeLinejoin="round" />,
  ojo: (
    <>
      <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" {...RELLENO} />
    </>
  ),
  lupa: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5 21 21" strokeWidth="2.6" />
    </>
  ),
  sorpresa: (
    <>
      <path d="m12 2.5 2 7.5 7.5 2-7.5 2-2 7.5-2-7.5-7.5-2 7.5-2z" {...RELLENO} />
    </>
  ),
  sello: (
    <>
      <path d="M9.5 3.5h5V9l3.5 3v2.5H6V12l3.5-3z" />
      <path d="M4.5 19h15" />
    </>
  ),
  calendarioNo: (
    <>
      <rect x="3" y="5" width="18" height="15.5" />
      <path d="M3 10h18M8 3v4M16 3v4M9.5 12.8l5 5M14.5 12.8l-5 5" />
    </>
  ),
  lugar: (
    <>
      <path d="M12 21s-6.5-6.2-6.5-11.5a6.5 6.5 0 0 1 13 0C18.5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </>
  ),
  hora: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.5l3.5 2" />
    </>
  ),
  apuntarse: (
    <>
      <path d="m4 20 1-4.5L16 4.5 19.5 8 8.5 19z" />
      <path d="m13.5 7 3.5 3.5" />
    </>
  ),
  flecha: <path d="M4 12h15M13 6l6 6-6 6" />,
  girar: (
    <>
      <path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3" />
      <path d="M19.5 3.5v4.5H15" />
    </>
  ),
  aforo: (
    <>
      <path d="M2 18h1.6a3.2 3.2 0 0 1 6.4 0h.6a3.6 3.6 0 0 1 7.2 0h.4a2 2 0 0 1 4 0H22v2.5H2z" {...RELLENO} />
      <path d="M2.5 5.5h19M2.5 5.5v8M21.5 5.5v8" />
    </>
  ),
  orden: (
    <>
      <path d="M4 6.5h16M4 12h11M4 17.5h6" />
    </>
  ),
};

export function Icono({ nombre, className = '' }: { nombre: string; className?: string }) {
  return (
    <svg
      className={`icono ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
    >
      {ICONOS[nombre]}
    </svg>
  );
}
