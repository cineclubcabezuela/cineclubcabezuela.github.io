import { INTRO, LEMA, MARQUESINA } from '../contenido';
import { Icono } from '../componentes/Icono';
import { Simbolo } from '../componentes/Simbolo';
import { enlace } from '../componentes/Navegacion';

// Las tres cabezas del símbolo, por separado para animarlas una a una.
const CABEZAS = ['M70 324A75 75 0 0 1 220 324Z', 'M230 324A85 85 0 0 1 400 324Z', 'M430 324A50 50 0 0 1 530 324Z'];

/** El símbolo animado: sala a oscuras, se enciende la pantalla y llega el público. */
function Sala() {
  return (
    <svg className="sala" viewBox="0 0 600 390" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="sala-marco">
          <rect width="600" height="390" />
        </clipPath>
        <clipPath id="sala-pantalla">
          <rect width="600" height="324" />
        </clipPath>
      </defs>
      {/* Pantalla apagada, y encima la pantalla que se enciende */}
      <rect width="600" height="324" fill="#2a201d" />
      <rect className="sala-pantalla" width="600" height="324" fill="var(--rojo)" />
      {/* Barrido de luz del proyector */}
      <g clipPath="url(#sala-pantalla)">
        <g className="sala-luz">
          <rect x="-260" y="-40" width="140" height="420" fill="#fff" transform="skewX(-14)" />
        </g>
      </g>
      {/* El público se sienta: cada cabeza sube desde detrás de la fila */}
      <g clipPath="url(#sala-marco)">
        {CABEZAS.map((d, i) => (
          <path key={d} className={`sala-cabeza sala-cabeza-${i + 1}`} d={d} fill="var(--negro)" />
        ))}
      </g>
      <rect y="324" width="600" height="66" fill="var(--negro)" />
    </svg>
  );
}

export function Inicio() {
  const cinta = [...MARQUESINA, ...MARQUESINA];
  return (
    <>
      <section className="portada tema-negro">
        <div className="portada-contenido">
          <div className="portada-logo">
            <Sala />
            <h1 className="portada-marca" aria-label="Cineclub Cabezuela">
              <span className="portada-cineclub" aria-hidden="true">
                {'CINECLUB'.split('').map((letra, i) => (
                  <span key={i} style={{ animationDelay: `${1.3 + i * 0.06}s` }}>
                    {letra}
                  </span>
                ))}
              </span>
              <span className="portada-cabezuela" aria-hidden="true">
                <span>CABEZUELA</span>
              </span>
            </h1>
          </div>
          <div className="portada-texto">
            <p className="portada-lema aparece">{LEMA}</p>
            <p className="portada-intro aparece">{INTRO}</p>
            <div className="portada-botones aparece">
              <a className="boton boton-rojo boton-grande" href={enlace('carne')}>
                Ver el carné <Icono nombre="flecha" />
              </a>
              <a className="boton boton-borde boton-grande" href={enlace('guia')}>
                Cómo es cada sesión
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="marquesina" aria-hidden="true">
        <div className="marquesina-pista">
          {cinta.map((t, i) => (
            <span key={i} className="marquesina-item">
              {t}
              <Simbolo className="marquesina-simbolo" />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
