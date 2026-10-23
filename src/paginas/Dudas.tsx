import { DUDAS } from '../contenido';
import { Desplegable } from '../componentes/Desplegable';

export function Dudas() {
  return (
    <>
      <section className="seccion tema-rojo cabecera-pagina">
        <div className="contenedor">
          <p className="etiqueta">Preguntas frecuentes</p>
          <h1 className="titular titular-xl">Dudas</h1>
          <p className="entradilla">Toca una pregunta para ver la respuesta.</p>
        </div>
      </section>

      <section className="seccion tema-crema">
        <div className="contenedor dudas-grid">
          {DUDAS.map((g, i) => (
            <section key={g.grupo} className="dudas-grupo" aria-labelledby={`grupo-${i}`}>
              <h2 className="etiqueta dudas-grupo-titulo" id={`grupo-${i}`}>
                {g.grupo}
              </h2>
              <div className="desplegables">
                {g.preguntas.map((d) => (
                  <Desplegable key={d.p} pregunta={d.p} respuesta={d.r} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
