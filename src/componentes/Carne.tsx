import { useState } from 'react';
import { CARNE_EJEMPLO, MESES, REGALOS, TEMPORADA, PRECIO_SOCIO } from '../contenido';
import { Simbolo } from './Simbolo';
import { Casilla } from './Casilla';
import { Icono } from './Icono';

const regalosTexto = `${REGALOS.slice(0, -1).join(', ')} y ${REGALOS.at(-1)}`;

function Delante() {
  return (
    <div className="carne-cara carne-delante">
      <Simbolo className="carne-simbolo" pantalla="var(--rojo)" />
      <p className="carne-tipo">
        CARNÉ DE SOCIO
        <br />
        Nº {CARNE_EJEMPLO.numero}
      </p>
      <dl className="carne-datos">
        <div>
          <dt>Nombre</dt>
          <dd>{CARNE_EJEMPLO.nombre}</dd>
        </div>
        <div>
          <dt>Socio desde</dt>
          <dd>{CARNE_EJEMPLO.socioDesde}</dd>
        </div>
      </dl>
      <span className="carne-ejemplo">Ejemplo</span>
      <p className="carne-marca">
        <span className="carne-cineclub">CINECLUB</span>
        <span className="carne-cabezuela">CABEZUELA</span>
      </p>
      <p className="carne-temporada">{TEMPORADA.nombre}</p>
    </div>
  );
}

function Detras() {
  return (
    <div className="carne-cara carne-detras">
      <div className="carne-detras-cabecera">
        <p className="carne-pasaporte">Pasaporte de cine</p>
        <p className="carne-detras-temporada">TEMPORADA {TEMPORADA.nombre}</p>
      </div>
      <div className="casillas casillas-carne">
        {MESES.map((m, i) => (
          <Casilla
            key={m.corto}
            indice={i}
            mes={m.corto}
            mesLargo={m.largo}
            estado={CARNE_EJEMPLO.sellos.includes(i) ? 'sellada' : 'vacia'}
          />
        ))}
      </div>
      <p className="carne-detras-pie">
        {PRECIO_SOCIO} € cada mes que vienes, en efectivo, en la puerta
        <br />
        🎁 Regalo sorpresa a los {regalosTexto} meses seguidos
      </p>
    </div>
  );
}

/** El carné de socio dibujado. Se gira al tocarlo: delante los datos, detrás el pasaporte. */
export function Carne() {
  const [girado, setGirado] = useState(false);

  return (
    <figure className="carne-escena">
      <button
        type="button"
        className="carne"
        aria-pressed={girado}
        aria-label={girado ? 'Carné girado: se ve el pasaporte. Tocar para ver la cara de delante' : 'Carné de socio de ejemplo. Tocar para ver el pasaporte de la parte de atrás'}
        onClick={() => setGirado((g) => !g)}
      >
        <div className="carne-giro">
          <Delante />
          <Detras />
        </div>
      </button>
      <figcaption className="carne-pie">
        <Icono nombre="girar" />
        <span>{girado ? 'Tocad para ver la parte de delante' : 'Tocad para ver el pasaporte'}</span>
      </figcaption>
      <p className="sr-only">
        Carné de ejemplo, número {CARNE_EJEMPLO.numero}, temporada {TEMPORADA.nombre}. Detrás lleva el pasaporte de cine con
        10 casillas, de noviembre a agosto: {PRECIO_SOCIO} € cada mes que vienes y regalo sorpresa a los {regalosTexto} meses
        seguidos.
      </p>
    </figure>
  );
}
