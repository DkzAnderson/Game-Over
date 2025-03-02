E-commerce realizada 
con la API: Fake Store API

1. App para usuarios finales (E-Commerce)
    Funcionalidades:

    - Registro/Login.
    - Vista de productos.
    - Carrito de compras.
    - Gestión de datos personales (perfil, dirección, historial de pedidos).
    - Tecnologías sugeridas:
    - Frontend: React + Vite.
    - Backend: Firebase (Authentication, Firestore, Storage).
    - Seguridad: Reglas de Firestore limitando la lectura/escritura a los datos del usuario autenticado.

2. Dashboard para administradores
Funcionalidades:

    - Autenticación únicamente para admins.
    - CRUD de productos (crear, editar, eliminar, listar).
    - Gestión de pedidos de usuarios (opcional).
    - Visualización de estadísticas (opcional).
    - Tecnologías sugeridas:
    - Frontend: React + Vite.
    - Backend: Firebase (Firestore para productos/pedidos, Authentication para roles).
    - Seguridad:
    - Usa Custom Claims o una colección en Firestore para verificar roles de administrador.
    - Configura reglas de Firestore para que solo los administradores tengan permisos de escritura sobre 
    la base de datos de productos.
