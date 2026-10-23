# TaskFlow — Aplicación de gestión de tareas

TaskFlow es una aplicación móvil desarrollada con **React Native, Expo y TypeScript** que permite visualizar tareas, consultar sus detalles y navegar entre diferentes secciones de la aplicación. El proyecto también incorpora un formulario para crear tareas y una sección de perfiles de usuario.

Este proyecto se desarrolla en el marco de la formación en desarrollo de aplicaciones, con el objetivo de aplicar conceptos de componentes reutilizables, manejo de estado, navegación y estilos en React Native.

## Funcionalidades

### Gestión de tareas
- Visualización de tareas en una lista mediante `FlatList`.
- Consulta del detalle de cada tarea.
- Formulario para crear nuevas tareas.
- Validación del título, con un mínimo de 5 caracteres.
- Validación de la descripción, con un mínimo de 10 caracteres.
- Selección de categorías: Trabajo, Estudio y Personal.
- Visualización de un mensaje cuando no hay tareas pendientes.

### Navegación
- Navegación entre pantallas mediante React Navigation.
- Barra de navegación inferior (*Bottom Tab Navigator*).
- Navegación mediante un *Stack Navigator* para las pantallas de tareas.
- Apertura del formulario de creación de tareas en una ventana modal.

### Perfiles de usuario
- Visualización de tarjetas de perfil reutilizables.
- Presentación del nombre, rol e imagen de cada usuario.
- Indicadores visuales de estado activo o inactivo.

## Tecnologías utilizadas

- **React Native:** desarrollo de interfaces móviles.
- **Expo:**         herramientas para ejecutar y desarrollar la aplicación.
- **TypeScript:**   tipado estático para mejorar la organización y la detección de errores.
- **React Navigation:** navegación entre pantallas.
- **React Native Screens:** soporte para navegación nativa, mediante las dependencias de React  Navigation.
- **Expo Vector Icons / Ionicons:** iconos de la interfaz.
- **StyleSheet:** definición de estilos para los componentes.

## Estructura del proyecto

taskflow/
├── src/
│   ├── components/
│   │   ├── EmptyState.tsx
│   │   ├── ProfileCard.tsx
│   │   ├── TaskDetail.tsx
│   │   └── TaskForm.tsx
│   ├── constants/
│   │   ├── theme.ts
│   │   └── types.ts
│   ├── navigation/
│   │   ├── AppNavigator.tsx
│   │   └── TaskStack.tsx
│   └── screens/
│       ├── HomeScreen.tsx
│       ├── ProfileScreen.tsx
│       └── TaskDetailScreen.tsx
├── .gitignore
├── AGENTS.md
├── app.json
├── App.tsx
├── index.ts
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json


## Navegación de la aplicación

La aplicación utiliza dos niveles de navegación:

**Bottom Tab Navigator**
- **Inicio:** permite acceder a la lista de tareas y a las pantallas relacionadas.
- **Perfil:** muestra las tarjetas de los usuarios.

**Native Stack Navigator**
- **TaskList:**     pantalla principal con el listado de tareas.
- **TaskDetail:**   pantalla con la información detallada de una tarea.
- **TaskForm:**     formulario para ingresar los datos de una nueva tarea.

## Componentes principales

| Componente        |     Descripción 
|   ---             |       ---         
| `EmptyState`      | Muestra un mensaje cuando no existen tareas pendientes. 
| `ProfileCard`     | Presenta la información y el estado de un usuario. 
| `TaskDetail`      | Muestra el título, la descripción, la categoría y la fecha de una tarea.
| `TaskForm`        | Permite ingresar y validar los datos de una tarea. 
| `HomeScreen`      | Muestra las tareas y permite acceder al formulario y al detalle. 
| `ProfileScreen`   | Presenta los perfiles de usuario. 
| `TaskDetailScreen`| Obtiene los parámetros de navegación y construye el objeto de la tarea. 
| `AppNavigator`    | Configura la navegación por pestañas. 
| `TasksStack`      | Configura la navegación entre las pantallas de tareas. 

## Organización del código

El proyecto separa la interfaz, las pantallas y la navegación para facilitar el mantenimiento y la reutilización del código.

- `components/`: componentes reutilizables de la interfaz.
- `screens/`: pantallas principales de la aplicación.
- `navigation/`: configuración de los navegadores y las rutas.
- `constants/`: tipos de datos y configuración visual compartida.