import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
// Fuentes incluidas en la app (funcionan sin conexión):
// Archivo con eje de anchura (para la versión condensada) e IBM Plex Mono.
import '@fontsource-variable/archivo/wdth.css';
import '@fontsource/ibm-plex-mono/latin-400.css';
import '@fontsource/ibm-plex-mono/latin-500.css';
import './estilos/base.css';
import './estilos/carne.css';
import './estilos/paginas.css';
import { App } from './App';

// Funcionamiento sin conexión. Cuando se publica una versión nueva, la app
// la descarga y se recarga sola con ella (sin esperar a la siguiente visita).
// Además lo comprueba al volver a la app y cada hora si se queda abierta.
registerSW({
  immediate: true,
  onRegisteredSW(_url, registro) {
    if (!registro) return;
    const comprobar = () => registro.update().catch(() => {});
    setInterval(comprobar, 60 * 60 * 1000);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') comprobar();
    });
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
