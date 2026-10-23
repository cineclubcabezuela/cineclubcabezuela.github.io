import { Icono } from './Icono';
import { Simbolo } from './Simbolo';

export const RUTAS = [
  { id: 'inicio', texto: 'Inicio', icono: 'inicio', titulo: 'Cineclub Cabezuela' },
  { id: 'carne', texto: 'Carné', icono: 'carne', titulo: 'Tu carné' },
  { id: 'guia', texto: 'Guía', icono: 'guia', titulo: 'Guía del visionado' },
  { id: 'club', texto: 'El club', icono: 'club', titulo: 'El club' },
  { id: 'dudas', texto: 'Dudas', icono: 'dudas', titulo: 'Dudas' },
] as const;

export type Ruta = (typeof RUTAS)[number]['id'];

export const enlace = (ruta: Ruta, seccion?: string) => `#/${ruta === 'inicio' ? '' : ruta}${seccion ? `/${seccion}` : ''}`;

/** En móvil, barra fija abajo con iconos. En PC, barra arriba con el logo. */
export function Navegacion({ activa }: { activa: Ruta }) {
  return (
    <header className="barra">
      <a className="barra-marca" href={enlace('inicio')} aria-label="Cineclub Cabezuela: inicio">
        <Simbolo className="barra-simbolo" pantalla="var(--rojo)" />
        <span className="barra-nombre" aria-hidden="true">
          <span className="barra-cineclub">CINECLUB</span>
          <span className="barra-cabezuela">CABEZUELA</span>
        </span>
      </a>
      <nav aria-label="Principal">
        <ul className="barra-lista">
          {RUTAS.map((r) => (
            <li key={r.id}>
              <a className="barra-enlace" href={enlace(r.id)} aria-current={r.id === activa ? 'page' : undefined}>
                <Icono nombre={r.icono} />
                <span>{r.texto}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
