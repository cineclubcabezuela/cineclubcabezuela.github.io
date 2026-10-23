import { useEffect, useRef, useState } from 'react';
import { MESES, REGALOS, TEMPORADA } from '../contenido';
import { Casilla } from './Casilla';

/**
 * El pasaporte en grande. Cuando aparece en pantalla se va sellando mes a
 * mes (una temporada completa) y se encienden los regalos de 6, 8 y 10.
 */
export function PasaporteGrande({ pie }: { pie: string }) {
  const ref = useRef<HTMLElement>(null);
  const [visto, setVisto] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setVisto(true);
      return;
    }
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisto(true);
          observador.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  return (
    <figure className="pasaporte-grande" ref={ref}>
      <div className="pasaporte-grande-cabecera">
        <span className="pasaporte-grande-titulo">Pasaporte de cine</span>
        <span className="pasaporte-grande-temporada">Temporada {TEMPORADA.nombre}</span>
      </div>
      <div className="casillas casillas-grandes">
        {MESES.map((m, i) => (
          <Casilla
            key={m.corto}
            indice={i}
            mes={m.corto}
            mesLargo={m.largo}
            estado={visto ? 'sellada' : 'vacia'}
            retraso={i * 230}
            regalo={REGALOS.includes(i + 1) ? i + 1 : undefined}
          />
        ))}
      </div>
      <figcaption className="pasaporte-grande-pie">{pie}</figcaption>
    </figure>
  );
}
