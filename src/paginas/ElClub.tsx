import {
  CLUB,
  CONFIRMAR,
  INVITADOS,
  NORMAS,
  PRECIO_INVITADO,
  SESIONES_ESPECIALES,
  SESIONES_INTRO,
} from '../contenido';
import { Icono } from '../componentes/Icono';
import { Texto } from '../componentes/Texto';

const ICONOS_CONFIRMAR = ['canales', 'aforo', 'orden'];

export function ElClub() {
  return (
    <>
      <section className="seccion tema-negro cabecera-pagina">
        <div className="contenedor">
          <p className="etiqueta">El club</p>
          <h1 className="titular titular-xl">{CLUB.titular}</h1>
        </div>
      </section>

      <section className="seccion tema-crema" id="confirmar" aria-labelledby="confirmar-titulo">
        <div className="contenedor">
          <header className="seccion-cabecera">
            <p className="etiqueta">Para guardaros sitio</p>
            <h2 className="titular titular-l" id="confirmar-titulo">
              Confirmad que venís
            </h2>
            <p className="entradilla">{CONFIRMAR.entradilla}</p>
          </header>
          <ol className="confirmar">
            {CONFIRMAR.pasos.map((p, i) => (
              <li key={i} className="confirmar-paso">
                <span className="confirmar-icono">
                  <Icono nombre={ICONOS_CONFIRMAR[i] ?? 'flecha'} />
                </span>
                <p>
                  <Texto>{p}</Texto>
                </p>
              </li>
            ))}
          </ol>
          <p className="aviso titular">{CONFIRMAR.aviso}</p>
        </div>
      </section>

      <section className="seccion tema-rojo" id="especiales" aria-labelledby="especiales-titulo">
        <div className="contenedor">
          <header className="seccion-cabecera">
            <p className="etiqueta">Además de la peli del mes</p>
            <h2 className="titular titular-l" id="especiales-titulo">
              Sesiones especiales
            </h2>
            <p className="entradilla">{SESIONES_INTRO}</p>
          </header>
          <ul className="especiales">
            {SESIONES_ESPECIALES.map((s, i) => (
              <li key={s.nombre} className="especial">
                <span className="especial-idea">Idea {String(i + 1).padStart(2, '0')}</span>
                <h3 className="titular titular-s">{s.nombre}</h3>
                <p>{s.linea}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="seccion tema-negro" id="invitados" aria-labelledby="invitados-titulo">
        <div className="contenedor invitados-grid">
          <header className="seccion-cabecera">
            <p className="etiqueta">Invitados</p>
            <h2 className="titular titular-l" id="invitados-titulo">
              ¿No sois socios?
            </h2>
          </header>
          <div className="invitados-precio">
            <span className="cifra-gigante">{PRECIO_INVITADO} €</span>
            <span className="etiqueta">invitados, por sesión</span>
          </div>
          <ul className="invitados-puntos">
            {INVITADOS.puntos.map((p) => (
              <li key={p}>
                <Icono nombre="flecha" />
                <span>
                  <Texto>{p}</Texto>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="seccion tema-crema" id="normas" aria-labelledby="normas-titulo">
        <div className="contenedor contenedor-estrecho">
          <header className="seccion-cabecera">
            <p className="etiqueta">Lo básico</p>
            <h2 className="titular titular-l" id="normas-titulo">
              Normas del club
            </h2>
          </header>
          <ol className="normas">
            {NORMAS.map((n, i) => (
              <li key={i}>
                <span className="normas-numero" aria-hidden="true">
                  {i + 1}
                </span>
                <p>
                  <Texto>{n}</Texto>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
