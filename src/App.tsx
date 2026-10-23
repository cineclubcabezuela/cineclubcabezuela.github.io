import { useEffect, useRef, useState, type JSX } from 'react';
import { TEMPORADA } from './contenido';
import { Navegacion, RUTAS, type Ruta } from './componentes/Navegacion';
import { Simbolo } from './componentes/Simbolo';
import { Inicio } from './paginas/Inicio';
import { PaginaCarne } from './paginas/PaginaCarne';
import { Guia } from './paginas/Guia';
import { ElClub } from './paginas/ElClub';
import { Dudas } from './paginas/Dudas';

const PAGINAS: Record<Ruta, () => JSX.Element> = {
  inicio: Inicio,
  carne: PaginaCarne,
  guia: Guia,
  club: ElClub,
  dudas: Dudas,
};

// Rutas con almohadilla (#/carne, #/club/normas…): funcionan en cualquier
// alojamiento estático sin configurar nada.
function leerRuta(): { ruta: Ruta; seccion?: string } {
  const [r, seccion] = location.hash.replace(/^#\/?/, '').split('/');
  const ruta = RUTAS.find((x) => x.id === r)?.id ?? 'inicio';
  return { ruta, seccion };
}

export function App() {
  const [{ ruta, seccion }, setRuta] = useState(leerRuta);
  const main = useRef<HTMLElement>(null);
  const primeraVez = useRef(true);

  useEffect(() => {
    const cambiar = () => setRuta(leerRuta());
    window.addEventListener('hashchange', cambiar);
    return () => window.removeEventListener('hashchange', cambiar);
  }, []);

  useEffect(() => {
    const titulo = RUTAS.find((r) => r.id === ruta)!.titulo;
    document.title = ruta === 'inicio' ? titulo : `${titulo} · Cineclub Cabezuela`;
    const destino = seccion ? document.getElementById(seccion) : null;
    if (destino) destino.scrollIntoView();
    else window.scrollTo(0, 0);
    // Al cambiar de pantalla, el lector de pantalla empieza por el contenido nuevo.
    if (!primeraVez.current) main.current?.focus({ preventScroll: true });
    primeraVez.current = false;
  }, [ruta, seccion]);

  const Pagina = PAGINAS[ruta];
  return (
    <div className="app">
      <button className="saltar" type="button" onClick={() => main.current?.focus()}>
        Saltar al contenido
      </button>
      <Navegacion activa={ruta} />
      <main id="contenido" ref={main} tabIndex={-1}>
        <Pagina />
      </main>
      <footer className="pie tema-negro">
        <div className="contenedor pie-contenido">
          <Simbolo className="pie-simbolo" pantalla="var(--rojo)" />
          <p className="etiqueta">Cineclub Cabezuela · Temporada {TEMPORADA.nombre}</p>
        </div>
      </footer>
    </div>
  );
}
