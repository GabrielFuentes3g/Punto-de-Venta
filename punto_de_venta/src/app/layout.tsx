// src/app/layout.tsx
import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Punto de Venta',
  description: 'Sistema POS con Next.js y Firebase',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen flex">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-800 text-white p-4 hidden md:block">
            <h1 className="text-xl font-bold mb-4">POS</h1>
            <nav className="flex flex-col gap-2">
              <a href="/" className="hover:bg-gray-700 p-2 rounded">Inicio</a>
              <a href="/inventario" className="hover:bg-gray-700 p-2 rounded">Inventario</a>
              <a href="/ventas" className="hover:bg-gray-700 p-2 rounded">Ventas</a>
              <a href="/configuracion" className="hover:bg-gray-700 p-2 rounded">Configuración</a>
            </nav>
          </aside>

          {/* Contenido principal */}
          <main className="flex-1 bg-gray-100 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
