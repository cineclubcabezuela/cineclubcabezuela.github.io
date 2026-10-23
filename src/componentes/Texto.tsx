// Muestra un texto de contenido.ts convirtiendo **así** en negrita.
export function Texto({ children }: { children: string }) {
  const partes = children.split(/\*\*(.+?)\*\*/g);
  return <>{partes.map((p, i) => (i % 2 ? <strong key={i}>{p}</strong> : p))}</>;
}
