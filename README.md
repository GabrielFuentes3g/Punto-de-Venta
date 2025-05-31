# Punto-de-Venta
Punto de Venta personal, creado con Next, usando typescritp y firebase


/punto_de_venta
├── public/                      # Archivos estáticos (imágenes, logos, etc.)
├── src/
│   ├── app/                     # Rutas y páginas (con App Router de Next.js)
│   │   ├── layout.tsx          # Layout general
│   │   ├── page.tsx            # Página principal (dashboard o login)
│   │   └── ventas/             # Página de ventas
│   │   └── inventario/         # Página de inventario
│   ├── components/             # Componentes reutilizables (Botón, Modal, etc.)
│   ├── features/               # Lógica por módulo (ventas, productos, usuarios)
│   │   ├── ventas/
│   │   ├── productos/
│   │   └── usuarios/
│   ├── firebase/               # Configuración de Firebase
│   │   ├── firebaseConfig.ts   # Inicialización de Firebase
│   │   ├── auth.ts             # Funciones de autenticación
│   │   └── db.ts               # Acceso a Firestore (CRUD, etc.)
│   ├── lib/                    # Funciones utilitarias, helpers generales
│   ├── styles/                 # Archivos CSS/SCSS o Tailwind config
├── .env.local                  # Variables de entorno (Firebase keys)
├── next.config.js              # Configuración de Next.js
├── tailwind.config.ts          # Configuración de Tailwind CSS (si aplica)
├── tsconfig.json               # Configuración de TypeScript
├── package.json
└── README.md
