// Genera el favicon y los iconos de la PWA a partir del símbolo del club.
// Uso: npm run iconos   (solo hace falta si cambia el símbolo)
import fs from 'node:fs';
import path from 'node:path';
import { Resvg } from '@resvg/resvg-js';

const ROJO = '#D8261B';
const NEGRO = '#170D0B';
const CREMA = '#EFE6D6';

// Símbolo (mismas medidas que src/componentes/Simbolo.tsx): pantalla 600×324,
// franja de público de 66 y tres cabezas en semicírculo sobre la franja.
const PUBLICO = 'M0 324H70A75 75 0 0 1 220 324H230A85 85 0 0 1 400 324H430A50 50 0 0 1 530 324H600V390H0Z';

function icono(tam, anchoSimbolo, radio = 0) {
  const s = anchoSimbolo / 600;
  const x = (tam - anchoSimbolo) / 2;
  const y = (tam - 390 * s) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${tam} ${tam}" width="${tam}" height="${tam}">
  <rect width="${tam}" height="${tam}" rx="${radio}" fill="${ROJO}"/>
  <g transform="translate(${x} ${y}) scale(${s})">
    <rect width="600" height="324" fill="${CREMA}"/>
    <path d="${PUBLICO}" fill="${NEGRO}"/>
  </g>
</svg>
`;
}

const publico = path.resolve(import.meta.dirname, '..', 'public');
fs.mkdirSync(publico, { recursive: true });

const png = (nombre, svg) => {
  const datos = new Resvg(svg).render().asPng();
  fs.writeFileSync(path.join(publico, nombre), datos);
  console.log(`  ${nombre}`);
};

fs.writeFileSync(path.join(publico, 'favicon.svg'), icono(512, 440, 80));
console.log('  favicon.svg');
png('pwa-192.png', icono(192, 140));
png('pwa-512.png', icono(512, 370));
// Maskable: el sistema recorta en círculo, así que el símbolo va más pequeño.
png('pwa-maskable-512.png', icono(512, 300));
png('apple-touch-icon.png', icono(180, 130));
