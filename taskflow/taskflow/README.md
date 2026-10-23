# TaskFlow – Aplicación de Gestión de Tareas

TaskFlow es una aplicación móvil desarrollada con React Native, Expo y TypeScript, cuyo objetivo es organizar y visualizar tareas de manera sencilla e intuitiva.

El proyecto forma parte de la cursada de Desarrollo de Aplicaciones en Coderhouse.

## Funcionalidades

- **Listado de tareas:** visualización de tareas mediante `FlatList`.
- **Detalle de tareas:** permite consultar la información completa de una tarea seleccionada.
- **Información organizada:** cada tarea incluye título, descripción, categoría, fecha de creación e identificador único.
- **Navegación:** permite alternar entre la lista de tareas y la vista de detalle.
- **Estado vacío:** muestra un mensaje cuando no existen tareas pendientes.
- **Interfaz intuitiva:** utiliza componentes reutilizables y estilos personalizados.

## Tecnologías utilizadas

- **React Native:** desarrollo de interfaces móviles.
- **Expo:** herramientas para ejecutar y desarrollar la aplicación.
- **TypeScript:** tipado estático para mejorar la organización y confiabilidad del código.
- **Git y GitHub:** control de versiones y almacenamiento del proyecto.

## Estructura del proyecto

```text
taskflow/
├── assets/
├── src/
│   ├── components/
│   │   ├── EmptyState.tsx
│   │   └── TaskDetail.tsx
│   ├── constants/
│   │   └── types.ts
│   └── screens/
│       └── HomeScreen.tsx
├── App.tsx
├── app.json
├── package.json
└── tsconfig.json
```

## Modelo de datos

Cada tarea se representa mediante el tipo `Task`, definido en `src/constants/types.ts`, que incluye las siguientes propiedades:

- `id`: identificador único.
- `title`: título de la tarea.
- `description`: descripción.
- `category`: categoría.
- `createdAt`: fecha de creación.
