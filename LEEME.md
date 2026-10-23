# App del Cineclub Cabezuela

Web para los socios (y para quien se lo esté pensando): el carné, el pasaporte de cine, la guía del visionado y las normas. Se puede instalar en el móvil como una app y funciona sin conexión.

- **Web publicada:** https://cineclubcabezuela.github.io/
- **Código (cuenta del club):** https://github.com/cineclubcabezuela/cineclubcabezuela.github.io
- **Para cambiar algún texto:** en el código, abrid `src/contenido.ts` → lápiz → cambiad → *Commit changes*. Se publica sola en 1–2 minutos.

---

## 1. Cambiar el contenido

**Todo el texto está en un solo archivo: `src/contenido.ts`.** No hay que tocar nada más.

La app no lleva fechas ni lugares de sesiones concretas, así que vale para toda la temporada sin tocar nada. Fecha, hora y lugar de cada sesión se cuentan por el grupo de WhatsApp del club.

**Los precios** están al principio del archivo (`PRECIO_SOCIO` y `PRECIO_INVITADO`). Si cambiáis uno, se actualiza solo en toda la app.

Si queréis, podéis ir poniendo **las pistas de la peli** (es opcional): una línea por pista, la más nueva al final. Salen en la pestaña «Guía». Si la lista está vacía, la app pone «Aún no hay pista este mes».

```ts
export const PISTAS: string[] = [
  'Primera pista',
  'Segunda pista',
];
```

Reglas para no romper nada:

- Los textos van entre comillas simples: `'así'`.
- No borréis las comas del final de las líneas.
- Para poner algo en **negrita**: `'**así**'`.
- **Nunca escribáis el título de la peli.** Solo pistas.

El archivo tiene comentarios (las líneas que empiezan por `//`) que explican cada apartado: sesiones especiales, guía del visionado, normas, preguntas frecuentes…

---

## 2. Publicarla (gratis)

Ya está publicada en GitHub Pages con la cuenta del club. Estos pasos solo hacen falta si algún día hay que montarla de nuevo en otra cuenta.

### En GitHub Pages, desde la web (sin instalar nada)

1. Entrad en [github.com](https://github.com) (cread una cuenta si no tenéis).
2. Arriba a la derecha, **+ → New repository**. Nombre: `cineclub-cabezuela`. Marcad **Public**: GitHub Pages gratis solo funciona con repositorios públicos. El código no lleva nada privado. No marquéis "Add a README". Pulsad **Create repository**.
3. En la página del repositorio vacío, pulsad el enlace **uploading an existing file**.
4. Abrid esta carpeta en el Explorador de Windows y seleccionad **solo** estos 12 elementos (Ctrl + clic en cada uno):
   `.github`, `public`, `scripts`, `src`, `.gitignore`, `index.html`, `LEEME.md`, `netlify.toml`, `package.json`, `package-lock.json`, `tsconfig.json`, `vite.config.ts`.
   **No subáis** `node_modules` ni `dist`: se generan solos.
5. Arrastradlos a la página de GitHub, esperad a que terminen de subir y pulsad **Commit changes**.
6. Pestaña **Settings → Pages** (menú de la izquierda). En *Source*, elegid **GitHub Actions**.
7. Pestaña **Actions → Publicar en GitHub Pages → Run workflow**. Si ya había una ejecución en rojo es normal: se lanzó antes de activar Pages. Tarda 1–2 minutos.
8. Cuando salga el ✓ verde, la dirección aparece en **Settings → Pages**. Será algo como `https://vuestro-usuario.github.io/cineclub-cabezuela/`. Esa es la que compartís con los socios.

**Para cambiar algo cada mes:** en GitHub abrid `src/contenido.ts` → icono del lápiz → cambiad el texto → **Commit changes**. En 1–2 minutos se publica sola. Si algo sale mal, en la pestaña *Actions* aparece en rojo y la web sigue con la versión anterior.

### Alternativa: GitHub + Netlify (permite repositorio privado)

1. Subid el proyecto a GitHub como en los pasos 1–5 de arriba (aquí el repositorio puede ser **privado**).
2. Cread una cuenta en [netlify.com](https://www.netlify.com) con la cuenta de GitHub.
3. En Netlify: *Add new site → Import an existing project → GitHub*, y elegid el repositorio. La configuración ya está en `netlify.toml`, así que solo hay que pulsar *Deploy*.
4. Netlify os da una dirección (podéis cambiarla en *Site settings*). Cada mes se edita `src/contenido.ts` en GitHub igual que arriba, y Netlify publica la nueva versión sola.

### Otras opciones

- **Vercel** ([vercel.com](https://vercel.com)): igual que Netlify. Importad el repositorio de GitHub y ya está; detecta la configuración solo.
- **Sin GitHub**: generad la web en vuestro ordenador (apartado 3, `npm run build`) y arrastrad la carpeta `dist` a [app.netlify.com/drop](https://app.netlify.com/drop).

La app instalada en los móviles se actualiza sola. Si alguien no ve el cambio, que cierre la app y la vuelva a abrir.

---

## 3. Verla en vuestro ordenador (opcional)

Solo hace falta para probar cambios antes de publicarlos.

1. Instalad **Node.js** (versión LTS) desde [nodejs.org](https://nodejs.org).
2. Abrid una terminal en esta carpeta y escribid, solo la primera vez:
   ```
   npm install
   ```
3. Para verla:
   ```
   npm run dev
   ```
   y abrid en el navegador la dirección que aparece (normalmente http://localhost:5173). Los cambios en `contenido.ts` se ven al momento.
4. Para generar la versión publicable (carpeta `dist`):
   ```
   npm run build
   ```

---

## Notas técnicas

- Hecha con Vite, React y TypeScript. Los estilos están en `src/estilos/` y los colores, en variables al principio de `base.css`.
- Los colores y tipografías salen del pptx de identidad. El texto pequeño sobre rojo va en blanco (como en el pptx), porque el crema sobre rojo no llega al contraste mínimo de accesibilidad.
- `npm test` comprueba los cálculos del simulador (rachas, regalos y "¿Cuándo empiezo?").
- `npm run iconos` vuelve a generar el favicon y los iconos de la app a partir del símbolo.
- En `package.json` hay un `overrides` que usa la versión WebAssembly de `rollup`, porque Windows bloqueaba su versión nativa al generar la app.
- La app no se deja indexar en buscadores (`noindex`).
