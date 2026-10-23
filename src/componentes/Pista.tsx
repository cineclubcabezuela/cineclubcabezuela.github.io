import { PISTAS } from '../contenido';
import { Icono } from './Icono';

/** La pista del mes (pestaña «Guía»). Nunca muestra el título de la peli. */
export function Pista() {
  const pistas = PISTAS.map((p) => p.trim()).filter(Boolean);
  const actual = pistas.at(-1);
  const anteriores = pistas.slice(0, -1);

  return (
    <div className="pista">
      <span className="pista-interrogacion" aria-hidden="true">?</span>
      <p className="etiqueta pista-etiqueta">
        <Icono nombre="lupa" /> {actual ? `Pista ${pistas.length}` : 'Pista del mes'}
      </p>
      {actual ? (
        <p className="pista-texto">{actual}</p>
      ) : (
        <p className="pista-texto pista-pronto">Aún no hay pista este mes. ¡Atentos!</p>
      )}
      {anteriores.length > 0 && (
        <ol className="pista-anteriores">
          {anteriores.map((p, i) => (
            <li key={i}>
              <span className="etiqueta">Pista {i + 1}</span> {p}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
