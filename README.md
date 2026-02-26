# 📱 Task Manager App – Ionic + Angular

Aplicación de gestión de tareas desarrollada como **prueba técnica**, enfocada en **escalabilidad**, **arquitectura limpia** y **buenas prácticas** usando Ionic y Angular.

---

## 🚀 Objetivo del Proyecto

Diseñar e implementar una aplicación de tareas que permita:

- Crear tareas
- Modificar tareas
- Eliminar tareas
- Cambiar el estado de una tarea
- Listar tareas
- Posponer tareas mediante una fecha límite

Todo esto bajo una arquitectura desacoplada, escalable y preparada para crecimiento futuro.

---

## 🧭 Enfoque y Metodología

El desarrollo del proyecto se realizó siguiendo los siguientes pasos:

### 1️⃣ Análisis del requerimiento
Se extrajeron los puntos clave del documento de prueba técnica, identificando las funcionalidades principales para definir una **estructura inicial de base de datos** y el alcance funcional.

### 2️⃣ Diseño de arquitectura
Se diseñó una arquitectura que:
- No solo resolviera la necesidad actual
- Permitiera escalar fácilmente
- Minimizará el acoplamiento entre capas

### 3️⃣ Organización por features
Se crearon las páginas necesarias basadas en funcionalidades:
- Crear tareas
- Modificar tareas
- Eliminar tareas
- Listar tareas
- Cambiar estado de tareas

### 4️⃣ Consumo de API (Mock)
Se implementó el consumo del endpoint público:
https://jsonplaceholder.typicode.com/todos

Esto permitió cubrir:
- Consumo de API REST
- Uso de `HttpClient`
- Manejo de datos con **Observables**
- Estado local usando **Signals** dentro del componente `task-list`

### 5️⃣ Estado global
Una vez validada la lógica de consumo de datos, se decidió implementar **estado global** para:
- Evitar prop drilling
- Reducir el paso de datos por navegación
- Obtener tareas por `id` desde cualquier parte de la aplicación

### 6️⃣ Roadmap funcional
Funciones planeadas a implementar:
- Selección de una tarea individual
- Edición de una tarea específica
- Creación de nuevas tareas desde estado global
- Eliminación de tareas
- Persistencia local

### 7️⃣ Persistencia local
Las tareas pospuestas se almacenarán usando **Ionic Preferences** como base de datos local.

---

## 🏗️ Arquitectura

Se decidió combinar tres enfoques arquitectónicos:

### 🔷 Arquitectura Hexagonal
- Separación clara de responsabilidades
- Independencia de frameworks
- Facilita escalabilidad y testing

### ⚛️ Atomic Design
Permite una jerarquía clara de componentes:
- **Átomos**: botones, textos, switches
- **Moléculas**: inputs con labels
- **Organismos**: formularios, barras de navegación

### 🧩 MVVM (Infraestructura)
Se utiliza únicamente la infraestructura de MVVM para:
- Desacoplar lógica de presentación
- Usar **DAO** para acceso a datos
- Evitar dependencias concretas

---

## 🗃️ Modelo de Datos

```ts
title: string
description: string
state: enum (Pending, Completed, Posposed, Deleted)
due_date: Date
created_at: Date
updated_at: Date
created_by: string