'use client';

import { useEffect, useState } from 'react';
import { obtenerProductos, agregarProducto, eliminarProducto } from '@/firebase/db';
import { Producto } from '@/features/productos/productoModel';

export default function InventarioPage() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);

  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    precio: '',
    stock: '',
    descripcion: '',
  });

  useEffect(() => {
    const cargarDatos = async () => {
      const datos = await obtenerProductos();
      setProductos(datos);
      setLoading(false);
    };

    cargarDatos();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoProducto({ ...nuevoProducto, [e.target.name]: e.target.value });
  };

  const handleAgregar = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nuevoProducto.nombre || !nuevoProducto.precio || !nuevoProducto.stock) {
      alert('Nombre, precio y stock son obligatorios');
      return;
    }

    const producto: Producto = {
      nombre: nuevoProducto.nombre,
      precio: parseFloat(nuevoProducto.precio),
      stock: parseInt(nuevoProducto.stock),
      descripcion: nuevoProducto.descripcion,
    };

    await agregarProducto(producto);
    const datos = await obtenerProductos();
    setProductos(datos);
    setNuevoProducto({ nombre: '', precio: '', stock: '', descripcion: '' });
  };

  const handleEliminar = async (id: string) => {
    await eliminarProducto(id);
    setProductos(productos.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inventario</h1>

      {/* Formulario */}
      <form onSubmit={handleAgregar} className="mb-6 space-y-2 bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold">Agregar nuevo producto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={nuevoProducto.nombre}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            name="precio"
            placeholder="Precio"
            value={nuevoProducto.precio}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={nuevoProducto.stock}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="descripcion"
            placeholder="Descripción (opcional)"
            value={nuevoProducto.descripcion}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
          Agregar Producto
        </button>
      </form>

      {/* Tabla */}
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <table className="w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Nombre</th>
              <th className="p-2">Precio</th>
              <th className="p-2">Stock</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id} className="border-t">
                <td className="p-2">{producto.nombre}</td>
                <td className="p-2">${producto.precio}</td>
                <td className="p-2">{producto.stock}</td>
                <td className="p-2 space-x-2">
                  <button className="text-blue-500">Editar</button>
                  <button
                    onClick={() => handleEliminar(producto.id!)}
                    className="text-red-500"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
