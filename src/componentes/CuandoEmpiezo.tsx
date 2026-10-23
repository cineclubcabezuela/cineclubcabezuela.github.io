import { useState } from 'react';
import { MESES, REGALOS } from '../contenido';
import { cuandoEmpiezo } from '../pasaporte';
import { casillaDeFecha } from '../fechas';
import { Icono } from './Icono';

// Por defecto, el mes actual (o noviembre si estamos fuera de la temporada).
const mesInicial = () => casillaDeFecha(new Date()) ?? 0;

/** Eliges el mes en que te haces socio y te dice hasta qué regalo puedes llegar. */
export function CuandoEmpiezo() {
  const [inicio, setInicio] = useState(mesInicial);
  const plan = cuandoEmpiezo(inicio, MESES.length, REGALOS);
  const maximo = plan.regalos.at(-1)?.umbral;
  const n = plan.regalos.length;

  return (
    <div className="cuando">
      <fieldset className="cuando-meses">
        <legend className="etiqueta">Mi primer mes</legend>
        <div className="cuando-opciones">
          {MESES.map((m, i) => (
            <label key={m.corto} className="cuando-opcion">
              <input type="radio" name="mes-inicio" value={i} checked={inicio === i} onChange={() => setInicio(i)} />
              <span aria-hidden="true">{m.corto}</span>
              <span className="sr-only">{m.largo}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="cuando-resultado" aria-live="polite">
        {maximo ? (
          <>
            <p className="cuando-frase">Empiezas en {MESES[inicio].largo} → puedes llegar a los</p>
            <p className="cuando-maximo">
              <span className="titular">{maximo}</span>
              <span className="etiqueta">
                meses seguidos · {n} regalo{n === 1 ? '' : 's'} sorpresa
              </span>
            </p>
            <ol className="cuando-linea">
              {plan.regalos.map((r) => (
                <li key={r.umbral}>
                  <Icono nombre="regalo" />
                  <span>
                    <strong>{r.umbral} meses</strong> en {MESES[r.mes].largo}
                  </span>
                </li>
              ))}
            </ol>
            <p className="cuando-nota">Siempre que no falles ningún mes.</p>
          </>
        ) : (
          <>
            <p className="cuando-frase">Empiezas en {MESES[inicio].largo} →</p>
            <p className="titular titular-m cuando-sin">Esta temporada no llegas a regalo</p>
            <p className="cuando-nota">Pero la siguiente empiezas de cero, como todos.</p>
          </>
        )}
      </div>
    </div>
  );
}
