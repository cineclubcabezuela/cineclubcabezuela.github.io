import { Texto } from './Texto';

interface Props {
  pregunta: string;
  respuesta: string;
}

/** Pregunta que se abre al tocarla. Usa <details>, así funciona con teclado y lector de pantalla. */
export function Desplegable({ pregunta, respuesta }: Props) {
  return (
    <details className="desplegable">
      <summary>
        <span>{pregunta}</span>
        <span className="desplegable-signo" aria-hidden="true" />
      </summary>
      <p className="desplegable-cuerpo">
        <Texto>{respuesta}</Texto>
      </p>
    </details>
  );
}
