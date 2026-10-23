import { useMemo, useState } from 'react';
import { MESES, PRECIO_SOCIO, REGALOS, TEMPORADA } from '../contenido';
import { analizar, patron, type Analisis } from '../pasaporte';
import { Casilla, type EstadoCasilla } from './Casilla';
import { Icono } from './Icono';

const N = MESES.length;

const EJEMPLOS = [
  { texto: 'Toda la temporada', sellos: patron(N) },
  { texto: 'Empiezo en marzo', sellos: patron(N, 4) },
  { texto: 'Fallo un mes', sellos: patron(N, 0, [2]) },
  { texto: 'Borrar', sellos: patron(N, N) },
];

const meses = (n: number) => (n === 1 ? 'mes' : 'meses');

function mensajes(a: Analisis): string[] {
  if (a.sellados === 0) return ['Empieza por noviembre o prueba un ejemplo.'];
  const lineas: string[] = [];
  if (a.ultimoHueco !== null) {
    lineas.push(`Faltaste en ${MESES[a.ultimoHueco].largo}: la racha vuelve a empezar.`);
    const guardados = a.regalos.filter((u) => u > a.rachaActual);
    if (guardados.length) lineas.push(`El regalo de ${guardados.join(' y ')} ya es tuyo: no se pierde.`);
  }
  if (a.rachaActual === N) lineas.push('¡Temporada completa! Te llevas los tres regalos sorpresa.');
  else if (a.siguiente) {
    const { faltan, umbral } = a.siguiente;
    lineas.push(`Te ${faltan === 1 ? 'falta' : 'faltan'} ${faltan} ${meses(faltan)} más, sin fallar, para el regalo de ${umbral}.`);
  } else if (a.regalos.length) lineas.push('Esta temporada ya no llegas a otro regalo.');
  else lineas.push('Esta temporada ya no llegas a regalo.');
  return lineas;
}

/** Pasaporte de práctica: se tocan las casillas y se ve la racha, los regalos y lo pagado. */
export function Simulador() {
  const [sellos, setSellos] = useState<boolean[]>(() => patron(N, N));
  // "tanda" cambia al usar un ejemplo, para que todos los sellos se estampen de nuevo, uno tras otro.
  const [tanda, setTanda] = useState(0);
  const a = useMemo(() => analizar(sellos, REGALOS), [sellos]);
  const lineas = mensajes(a);
  const pagado = a.sellados * PRECIO_SOCIO;

  const estado = (i: number): EstadoCasilla => (sellos[i] ? 'sellada' : a.huecos.includes(i) ? 'hueco' : 'vacia');
  const alternar = (i: number) => setSellos((s) => s.map((v, k) => (k === i ? !v : v)));
  const ejemplo = (nuevos: boolean[]) => {
    setSellos(nuevos);
    setTanda((t) => t + 1);
  };

  return (
    <div className="simulador">
      <div className="simulador-pasaporte">
        <div className="pasaporte-cabecera">
          <span>Pasaporte de cine</span>
          <span>{TEMPORADA.nombre}</span>
        </div>
        <div className="casillas casillas-simulador" role="group" aria-label="Casillas del pasaporte, de noviembre a agosto">
          {MESES.map((m, i) => {
            const orden = sellos.slice(0, i).filter(Boolean).length;
            return (
              <Casilla
                key={m.corto}
                indice={i}
                mes={m.corto}
                mesLargo={m.largo}
                estado={estado(i)}
                tanda={tanda}
                retraso={tanda ? orden * 90 : 0}
                onClick={() => alternar(i)}
              />
            );
          })}
        </div>
        <div className="simulador-botones">
          {EJEMPLOS.map((e) => (
            <button key={e.texto} type="button" className="boton boton-borde boton-pequeno" onClick={() => ejemplo(e.sellos)}>
              {e.texto}
            </button>
          ))}
        </div>
      </div>

      <div className="marcador">
        <div className="marcador-cifras">
          <div className="marcador-racha">
            <span className="etiqueta">Racha</span>
            <span className="marcador-numero">{a.rachaActual}</span>
            <span className="marcador-unidad">{meses(a.rachaActual)} seguido{a.rachaActual === 1 ? '' : 's'}</span>
          </div>
          <div className="marcador-pagado">
            <span className="etiqueta">Pagarías</span>
            <span className="marcador-numero marcador-numero-m">{pagado} €</span>
            <span className="marcador-unidad">
              {a.sellados} × {PRECIO_SOCIO} €
            </span>
          </div>
        </div>

        <ul className="regalos" aria-label="Regalos sorpresa">
          {REGALOS.map((u) => {
            const si = a.regalos.includes(u);
            return (
              <li key={u} className={`regalo ${si ? 'regalo-si' : 'regalo-no'}`}>
                <Icono nombre="regalo" />
                <span className="regalo-numero">{u}</span>
                <span className="regalo-texto">{si ? '¡Conseguido!' : 'meses seguidos'}</span>
              </li>
            );
          })}
        </ul>

        <div className="marcador-mensaje">
          {lineas.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">
          {a.sellados > 0 &&
            `Racha de ${a.rachaActual} ${meses(a.rachaActual)}. ${
              a.regalos.length ? `Regalos conseguidos: ${a.regalos.join(', ')}.` : 'Sin regalos todavía.'
            } Pagarías ${pagado} euros. ${lineas.join(' ')}`}
        </p>
      </div>
    </div>
  );
}
