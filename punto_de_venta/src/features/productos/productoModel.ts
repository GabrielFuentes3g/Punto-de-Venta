export interface Producto {
  id?: string; // generado por Firestore
  nombre: string;
  precio: number;
  stock: number;
  descripcion?: string;
  creadoEn?: Date;
}