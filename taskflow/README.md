# TaskFlow

Aplicación móvil desarrollada con **React Native + Expo + TypeScript** como parte del curso **Desarrollo de Aplicaciones** de Coderhouse.

## Tecnologías utilizadas

- React Native
- Expo
- TypeScript
- StyleSheet
- Expo Go

## Estructura del proyecto

taskflow-app/
├── src/
│   ├── components/
│   │   └── ProfileCard.tsx
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── constants/
│   │   └── theme.ts
│   └── assets/
├── assets/
├── App.tsx
├── app.json
├── package.json
└── README.md

## Pantallas implementadas

### ProfileScreen

Pantalla que muestra diferentes perfiles de usuarios utilizando el componente reutilizable `ProfileCard`.

Cada tarjeta contiene:

- Nombre
- Rol
- Imagen de perfil
- Estado del usuario

### HomeScreen

Pantalla inicial de TaskFlow con una presentación básica de la aplicación.

## Componentes

### ProfileCard

Componente reutilizable desarrollado para representar la información de un usuario.

Recibe las siguientes propiedades:

- `name`: nombre del usuario
- `role`: rol del usuario
- `image`: URL de la imagen de perfil
- `isActive`: estado del usuario

El componente utiliza `StyleSheet` para mantener los estilos organizados y permitir su reutilización con diferentes datos.

## Estilos

Los colores principales de la aplicación se encuentran centralizados en:

`src/constants/theme.ts`

Esto permite mantener una identidad visual consistente y facilita futuras modificaciones del diseño.

## Ejecución del proyecto

Primero instalar las dependencias:

    npm install

Luego iniciar el proyecto:

    npx expo start

El proyecto puede ejecutarse utilizando **Expo Go**, un emulador de Android o un simulador compatible.