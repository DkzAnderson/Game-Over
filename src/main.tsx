import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { ToastContainer } from 'react-toastify';
import { UserProvider } from './contexts/UserProvider.tsx'
import { CartProvider } from './contexts/CartContext.tsx'
import { RouterProvider, createHashRouter } from 'react-router-dom'; // Cambiado a createHashRouter
import { ErrorPage } from './components/ErrorPage/ErrorPage.tsx'
import { ProductDetail } from './components/ProductDetail/ProductDetail.tsx';
import { Home } from './pages/Home.tsx';
import { Lista } from './pages/Lista.tsx';



/*
  Manejo de rutas

  /App
  /----/products
  /----/details
  /----/payment
  /----/login
  /----/register
  /----/account
  /--------/addres
  /--------/profile
  /--------/auth
  /--------/cards
  /--------/orders
*/

/*
ecommerce/
├── public/                # Archivos públicos (favicon, imágenes estáticas, etc.)
│   ├── favicon.ico
│   ├── index.html
│   ├── assets/
│       ├── images/       # Imágenes generales
│       ├── icons/        # Íconos
├── src/                   # Código fuente de tu aplicación
│   ├── api/              # Llamadas a APIs o configuración de axios/fetch
│   ├── components/       # Componentes reutilizables de la UI
│       ├── Button/
│       ├── Header/
│       ├── ProductCard/
│   ├── contexts/         # Contextos de React para estado global
│   ├── hooks/            # Custom Hooks
│   ├── pages/            # Páginas principales de tu aplicación
│       ├── HomePage/
│       ├── ProductPage/
│       ├── CartPage/
│   ├── routes/           # Configuración de rutas (si usas React Router u otra librería)
│   ├── services/         # Servicios para lógica de negocio (como integración con pagos, autenticación, etc.)
│   ├── styles/           # Archivos CSS o SASS globales
│   ├── utils/            # Utilidades o funciones auxiliares
│   ├── App.tsx           # Componente raíz de la aplicación
│   ├── index.tsx         # Punto de entrada de React
├── tests/                 # Pruebas unitarias e integrales
│   ├── components/       # Pruebas para componentes
│   ├── pages/            # Pruebas para páginas
├── package.json           # Dependencias y scripts del proyecto
├── tsconfig.json          # Configuración de TypeScript
├── README.md              # Documentación inicial del proyecto




*/










const router = createHashRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path:'/products/:category',
        element: <Lista/>,
      },
      {
        path:'/products/:category/:brand',
        element: <Lista/>,
      },
      {
        path: '/details/:category',
        element: <ProductDetail/>,
      },
      {
        path: '/login',
        element: ''
      },
      {
        path: '/register',
        element: ''
      },
      {
        path: '/account',
        element: '',
        children: [
          {
            index: true,
            element: '' //profile
          },
          {
            path: '/account/profile',
            element: '',
          },
          {
            path: '/account/edit-profile',
            element: '',
          },
          {
            path: '/account/addres',
            element: '',
          },
          {
            path: '/account/auth',
            element: '',
          },
          {
            path: '/account/cards',
            element: '',
          },
          {
            path: '/account/orders',
            element: '',
          },
        ]
      },
      {
        path: '/payment',
        element: ''
      }
    ]
  },

])



createRoot(document.getElementById('root')!).render(
  <StrictMode>


      <UserProvider>
        <CartProvider>
          <RouterProvider router={router}/>
          <ToastContainer/>
        </CartProvider>
      </UserProvider>

  </StrictMode>,
)
