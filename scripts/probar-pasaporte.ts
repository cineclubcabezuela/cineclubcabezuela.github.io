// Comprueba que el simulador calcula bien las rachas y los regalos.
// Uso: npm test
import assert from 'node:assert/strict';
import { analizar, cuandoEmpiezo, patron } from '../src/pasaporte.ts';

const U = [6, 8, 10];
const N = 10;
// Índices: 0 NOV · 1 DIC · 2 ENE · 3 FEB · 4 MAR · 5 ABR · 6 MAY · 7 JUN · 8 JUL · 9 AGO
const casos: [string, () => void][] = [
  ['Pasaporte vacío', () => {
    const a = analizar(patron(N, 0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), U);
    assert.equal(a.rachaActual, 0);
    assert.deepEqual(a.regalos, []);
    assert.equal(a.sellados, 0);
    assert.deepEqual(a.siguiente, { umbral: 6, faltan: 6 });
  }],
  ['10 seguidos → los tres regalos, 100 €', () => {
    const a = analizar(patron(N), U);
    assert.equal(a.rachaActual, 10);
    assert.deepEqual(a.regalos, [6, 8, 10]);
    assert.equal(a.sellados * 10, 100);
    assert.equal(a.ultimoHueco, null);
    assert.equal(a.siguiente, null);
  }],
  ['Empezar en marzo → racha 6, regalo de 6', () => {
    const a = analizar(patron(N, 4), U);
    assert.equal(a.rachaActual, 6);
    assert.deepEqual(a.regalos, [6]);
    assert.equal(a.sellados * 10, 60);
    assert.deepEqual(a.huecos, []); // los meses antes de empezar no son huecos
    assert.equal(a.ultimoHueco, null);
  }],
  ['Fallar enero → racha vuelve a empezar, 7 seguidos después', () => {
    const a = analizar(patron(N, 0, [2]), U);
    assert.equal(a.rachaActual, 7);
    assert.deepEqual(a.regalos, [6]);
    assert.deepEqual(a.huecos, [2]);
    assert.equal(a.ultimoHueco, 2);
    assert.equal(a.sellados * 10, 90);
    assert.equal(a.siguiente, null); // con 7 en agosto ya no llega a 8
  }],
  ['Dos rachas separadas: NOV–ABR y JUN–AGO → conserva el regalo de 6', () => {
    const a = analizar(patron(N, 0, [6]), U);
    assert.deepEqual(a.rachas.map((r) => r.largo), [6, 3]);
    assert.equal(a.rachaActual, 3);
    assert.equal(a.mejorRacha, 6);
    assert.deepEqual(a.regalos, [6]);
    assert.equal(a.ultimoHueco, 6);
    assert.equal(a.sellados * 10, 90);
  }],
  ['Dos rachas cortas: NOV–DIC y FEB–MAR → sin regalo, pero aún puede llegar a 6', () => {
    const a = analizar([true, true, false, true, true, false, false, false, false, false], U);
    assert.equal(a.rachaActual, 2);
    assert.deepEqual(a.regalos, []);
    assert.deepEqual(a.huecos, [2]);
    assert.deepEqual(a.siguiente, { umbral: 6, faltan: 4 });
  }],
  ['Varios huecos: el que cuenta es el último', () => {
    const a = analizar([true, false, true, false, true, true, false, false, false, false], U);
    assert.deepEqual(a.huecos, [1, 3]);
    assert.equal(a.ultimoHueco, 3);
    assert.equal(a.rachaActual, 2);
  }],
  ['8 seguidos desde NOV → regalos de 6 y 8, siguiente el de 10', () => {
    const a = analizar(patron(N, 0, [8, 9]), U);
    assert.deepEqual(a.regalos, [6, 8]);
    assert.deepEqual(a.siguiente, { umbral: 10, faltan: 2 });
  }],
  ['¿Cuándo empiezo? NOV → 10 · ENE → 8 · MAR → 6 · ABR → ninguno', () => {
    const max = (m: number) => cuandoEmpiezo(m, N, U).regalos.at(-1)?.umbral ?? 0;
    assert.equal(max(0), 10);
    assert.equal(max(1), 8);
    assert.equal(max(2), 8);
    assert.equal(max(3), 6);
    assert.equal(max(4), 6);
    assert.equal(max(5), 0);
    assert.equal(max(9), 0);
    // Empezando en NOV: el de 6 en ABR, el de 8 en JUN y el de 10 en AGO
    assert.deepEqual(cuandoEmpiezo(0, N, U).regalos.map((r) => r.mes), [5, 7, 9]);
  }],
];

let fallos = 0;
for (const [nombre, prueba] of casos) {
  try {
    prueba();
    console.log(`  ✓ ${nombre}`);
  } catch (e) {
    fallos++;
    console.log(`  ✗ ${nombre}\n    ${(e as Error).message.split('\n').join('\n    ')}`);
  }
}
console.log(fallos ? `\n${fallos} prueba(s) fallida(s)` : `\nTodo bien: ${casos.length} pruebas`);
process.exit(fallos ? 1 : 0);
