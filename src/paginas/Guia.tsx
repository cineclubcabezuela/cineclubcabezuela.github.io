import { GUIA } from '../contenido';
import { Icono } from '../componentes/Icono';
import { Pista } from '../componentes/Pista';

export function Guia() {
  return (
    <>
      <section className="seccion tema-negro cabecera-pagina">
        <div className="contenedor">
          <p className="etiqueta">Guía del visionado</p>
          <h1 className="titular titular-xl">{GUIA.titular}</h1>
          <p className="entradilla">{GUIA.entradilla}</p>
        </div>
      </section>

      <section className="seccion tema-rojo" id="como" aria-labelledby="como-titulo">
        <div className="contenedor">
          <header className="seccion-cabecera">
            <p className="etiqueta">Paso a paso</p>
            <h2 className="titular titular-l" id="como-titulo">
              Cómo funciona
            </h2>
          </header>
          <ol className="pasos pasos-3">
            {GUIA.pasos.map((p, i) => (
              <li key={p.titulo} className="paso">
                <span className="paso-numero" aria-hidden="true">
                  {i + 1}
                </span>
                <Icono nombre={p.icono} className="paso-icono" />
                <h3 className="paso-titulo">{p.titulo}</h3>
                <p className="paso-nota">{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="seccion tema-crema" id="adivina" aria-labelledby="adivina-titulo">
        <div className="contenedor">
          <header className="seccion-cabecera">
            <p className="etiqueta">El juego de las pistas</p>
            <h2 className="titular titular-l" id="adivina-titulo">
              ¿Adivináis la peli?
            </h2>
            <p className="entradilla">{GUIA.adivina.entradilla}</p>
          </header>
          <div className="adivina-grid">
            <ul className="premios">
              {GUIA.adivina.premios.map((p) => (
                <li key={p.titulo} className="premio">
                  <span className="incluye-icono">
                    <Icono nombre={p.icono} />
                  </span>
                  <div>
                    <h3 className="incluye-titulo">{p.titulo}</h3>
                    <p className="incluye-detalle">{p.texto}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Pista />
          </div>
        </div>
      </section>

      <section className="seccion tema-negro" id="charla" aria-labelledby="charla-titulo">
        <div className="contenedor">
          <header className="seccion-cabecera">
            <p className="etiqueta">En la sesión</p>
            <h2 className="titular titular-l" id="charla-titulo">
              Para la charla
            </h2>
          </header>
          <ul className="guia-puntos guia-puntos-3">
            {GUIA.charla.map((p) => (
              <li key={p.titulo} className="guia-punto">
                <span className="guia-icono">
                  <Icono nombre={p.icono} />
                </span>
                <div>
                  <h3 className="guia-titulo">{p.titulo}</h3>
                  <p className="guia-texto">{p.texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
