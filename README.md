# Aplicación Integral de Gestión de Estado - UTN BA (Trabajo Final)

## Descripción del Proyecto
Este desarrollo representa el Trabajo Final Integrador del curso "Desarrollo en Angular" de la UTN BA. Consiste en una SPA dedicada a la administración de catálogos de productos y control de estados de usuarios en un entorno modularizado de alto rendimiento utilizando Lazy Loading, Rutas Dinámicas y Formularios Reactivos bajo la arquitectura moderna de Componentes Standalone.

## Características del Desarrollo
- **Estructura Arquitectónica:** Distribución fija mediante Sidebar de navegación interactiva (`routerLink`) y área de inyección dinámica (`router-outlet`).
- **Módulo Productos:** Despliegue de fichas comerciales parametrizadas (Título, Precio, Descripción, Descuentos) con acciones de eliminación y ruteo dinámico hacia el perfil exclusivo del producto (`/productos/:id`).
- **Módulo Usuarios:** Tabulación interactiva de perfiles que incluye control de roles y alternancia dinámica de estados de operación (Activo/Inactivo), complementado con formulario de alta controlado con validaciones asincrónicas en la ruta `/crear`.

---

## Acceso al Proyecto Publicado
- **Enlace de la Aplicación Desplegada:** https://app-gestion-woad-five.vercel.app/
- **Plataforma de Hosting:** Vercel (Ecosistema oficial de despliegue continuo).

---

## Instrucciones de Instalación y Ejecución

Para clonar, instalar las dependencias y ejecutar este proyecto de forma local, siga estos pasos en su terminal:

### 1. Clonar el repositorio
Descargue una copia local del proyecto ejecutando:
```bash
git clone git@github.com:mazypincha/app-formularios.git
```

### 2. Instalar dependencias
```bash
cd app-formularios
npm install
```

### 3. Ejecutar la aplicación
```bash
ng serve
```

### 4. Acceso en el navegador
http://localhost:4200/