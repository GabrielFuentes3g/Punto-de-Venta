import { db } from './firebaseConfig';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  Timestamp
} from 'firebase/firestore';
import { Producto } from '@/features/productos/productoModel';

const productosRef = collection(db, 'productos');

export async function obtenerProductos(): Promise<Producto[]> {
  const snapshot = await getDocs(productosRef);
  const productos = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Producto[];
  console.log('Productos desde Firebase:', productos);
  return productos;
}

export async function agregarProducto(producto: Producto) {
  return await addDoc(productosRef, {
    ...producto,
    creadoEn: Timestamp.now(),
  });
}

export async function editarProducto(id: string, producto: Partial<Producto>) {
  const docRef = doc(db, 'productos', id);
  return await updateDoc(docRef, producto);
}

export async function eliminarProducto(id: string) {
  const docRef = doc(db, 'productos', id);
  return await deleteDoc(docRef);
}
