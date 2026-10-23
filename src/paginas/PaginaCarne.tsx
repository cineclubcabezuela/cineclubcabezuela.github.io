import { CARNE_INTRO, INCLUYE, LETRA_PEQUENA, PASAPORTE, PASOS, SIN } from '../contenido';
import { Carne } from '../componentes/Carne';
import { PasaporteGrande } from '../componentes/PasaporteGrande';
import { CuandoEmpiezo } from '../componentes/CuandoEmpiezo';
import { Desplegable } from '../componentes/Desplegable';
import { Icono } from '../componentes/Icono';
import { enlace } from '../componentes/Navegacion';
import { Simulador } from '../componentes/Simulador';
import { Texto } from '../componentes/Texto';

function Cabecera({ etiqueta, titulo, id, entradilla }: { etiqueta: string; titulo: string; id: string; entradilla?: string }) {
  return (
    <header className="seccion-cabecera">
      <p className="etiqueta">{etiqueta}</p>
      <h2 className="titular titular-l" id={id}>
        {titulo}
      </h2>
      {entradilla && <p className="entradilla">{entradilla}</p>}
    </header>
  );
}

export function PaginaCarne() {
  return (
    <>
      <section className="seccion tema-rojo carne-portada">
        <div className="contenedor carne-portada-grid">
          <div className="carne-portada-titulo">
            <p className="etiqueta">Carné de socio</p>
            <h1 className="titular titular-l">Tu carné</h1>
          </div>
          <div className="carne-portada-tarjeta">
            <Carne />
          </div>
          <div className="carne-portada-texto">
            <p className="entradilla">{CARNE_INTRO}</p>
            <a className="enlace-flecha" href={enlace('carne', 'pasaporte')}>
              Ver el pasaporte <Icono nombre="flecha" />
            </a>
          </div>
        </div>
      </section>

      <section className="seccion tema-negro pasaporte-seccion" id="pasaporte" aria-labelledby="pasaporte-titulo">
        <div className="contenedor">
          <header className="seccion-cabecera">
            <p className="etiqueta">El pasaporte</p>
            <h2 className="titular titular-xl" id="pasaporte-titulo">
              {PASAPORTE.titular}
              <br />
              <span className="destacado">{PASAPORTE.destacado}</span>
            </h2>
            <p className="entradilla">{PASAPORTE.entradilla}</p>
          </header>
          <PasaporteGrande pie={PASAPORTE.ejemplo} />
          <p className="pasaporte-racha">
            <Icono nombre="regalo" />
            <span>
              <Texto>{PASAPORTE.racha}</Texto>
            </span>
          </p>
          <h3 className="etiqueta pasaporte-pasos-titulo">Así se sella</h3>
          <ol className="pasos">
            {PASOS.map((p, i) => (
              <li key={i} className="paso">
                <span className="paso-numero" aria-hidden="true">
                  {i + 1}
                </span>
                <Icono nombre={p.icono} className="paso-icono" />
                <p className="paso-texto">
                  <Texto>{p.texto}</Texto>
                </p>
                {p.nota && <p className="paso-nota">{p.nota}</p>}
              </li>
            ))}
          </ol>
          <ul className="sin">
            {SIN.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="seccion tema-crema" id="simulador" aria-labelledby="simulador-titulo">
        <div className="contenedor">
          <Cabecera
            etiqueta="Pasaporte de práctica"
            titulo="Prueba tu racha"
            id="simulador-titulo"
            entradilla="Toca las casillas para sellarlas y mira cuándo llegan los regalos."
          />
          <Simulador />
        </div>
      </section>

      <section className="seccion tema-negro" id="cuando-empiezo" aria-labelledby="cuando-titulo">
        <div className="contenedor">
          <Cabecera
            etiqueta="Con la temporada empezada"
            titulo="¿Cuándo empiezo?"
            id="cuando-titulo"
            entradilla="Elige tu primer mes y mira hasta qué regalo puedes llegar."
          />
          <CuandoEmpiezo />
        </div>
      </section>

      <section className="seccion tema-crema" id="incluye" aria-labelledby="incluye-titulo">
        <div className="contenedor">
          <Cabecera etiqueta="Con tu carné" titulo="Qué incluye" id="incluye-titulo" />
          <ul className="incluye">
            {INCLUYE.map((it) => (
              <li key={it.titulo} className="incluye-item">
                <span className="incluye-icono">
                  <Icono nombre={it.icono} />
                </span>
                <div>
                  <h3 className="incluye-titulo">{it.titulo}</h3>
                  <p className="incluye-detalle">{it.detalle}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="letra-pequena" id="letra-pequena">
            <h3 className="etiqueta letra-pequena-titulo">Letra pequeña</h3>
            <div className="desplegables">
              {LETRA_PEQUENA.map((d) => (
                <Desplegable key={d.p} pregunta={d.p} respuesta={d.r} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
