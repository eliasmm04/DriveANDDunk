# DriveANDDunk
## **Resumen de la Aplicación**

🚗 **DriveANDDunk** es una aplicación que combina lo mejor del **baloncesto** y la **Fórmula 1**, proporcionando:

- 🛍️ **Tienda Online** con un **carrito funcional** para realizar compras.
- 🏀 Información detallada sobre **jugadores de baloncesto** y **equipos**.
- 🏎️ **Pilotos de Fórmula 1** y sus estadísticas.
- 📅 **Calendario de eventos** con las fechas clave de cada deporte.
- 📰 **Noticias deportivas** actualizadas para mantenerte informado.
- 👤 **Sistema de usuarios** para gestionar tus cuentas y preferencias.

Disfruta de una experiencia única fusionando dos de los deportes más emocionantes del mundo, todo en una sola plataforma.

# 🖥️ **Frontend - React**
![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue) ![Version](https://img.shields.io/badge/version-1.0.0-blue)  ![Issues](https://img.shields.io/github/issues/usuario/repositorio)![React](https://img.shields.io/badge/React-16.13.1-61dafb) ![Axios](https://img.shields.io/badge/Axios-0.27.2-5A29E3) ![useReducer](https://img.shields.io/badge/Hook-useReducer-green) ![Carrito Funcional](https://img.shields.io/badge/Carrito-Funcional-brightgreen) ![useContext](https://img.shields.io/badge/Hook-useContext-yellow) ![React Magic Motion](https://img.shields.io/badge/React_Magic_Motion-2.0.0-ff69b4)

Creado dentro del Readme de la carpeta front
# 🧑‍💻 **Backend - Django (Python)**

![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue) ![Version](https://img.shields.io/badge/version-1.0.0-blue) ![Python](https://img.shields.io/badge/Python-3.8-blue) ![Django](https://img.shields.io/badge/Django-3.2-green) ![Database](https://img.shields.io/badge/Database-SQLite-lightgray)

**Descripción:**  
Este es el backend de la aplicación, desarrollado con **Django** y **Python**. El proyecto utiliza **SQLite** como base de datos predeterminada y el comando `python manage.py` para ejecutar las operaciones en el servidor.

## 📋 Requisitos mínimos

- **Python:** Versión 3.8 o superior.
- **pip:** Instalado junto con Python (gestor de paquetes de Python).

## 🚀 Instrucciones de instalación y uso

1. Clona este repositorio en tu máquina local:
    ```bash
    git clone https://github.com/usuario/mi-proyecto-backend.git
    ```
2. Entra en el directorio del proyecto:
    ```bash
    cd mi-proyecto-backend
    ```
3. Crea un entorno virtual:
    ```bash
    python -m venv venv
    ```
4. Activa el entorno virtual:
    - En Windows:
        ```bash
        .\venv\Scripts\activate
        ```
    - En macOS/Linux:
        ```bash
        source venv/bin/activate
        ```
5. Instala las dependencias del proyecto:
    ```bash
    pip install -r requirements.txt
    ```
6. Realiza las migraciones para configurar la base de datos:
    ```bash
    python manage.py migrate
    ```
7. Crea un superusuario para acceder al panel de administración de Django:
    ```bash
    python manage.py createsuperuser
    ```
8. Ejecuta el servidor de desarrollo:
    ```bash
    python manage.py runserver
    ```
9. La API estará disponible en:  
   [http://localhost:8000](http://localhost:8000).

---

## 🛠️ Comandos disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

- **`python manage.py runserver`**  
  Ejecuta el servidor de desarrollo de Django.  
  La aplicación estará disponible en [http://localhost:8000](http://localhost:8000).

- **`python manage.py migrate`**  
  Aplica las migraciones para crear las tablas de la base de datos.

- **`python manage.py createsuperuser`**  
  Crea un superusuario para poder acceder al panel de administración de Django.

- **`python manage.py test`**  
  Ejecuta las pruebas de Django para verificar que todo funcione correctamente.

---

## 🔧 Configuración de la base de datos

El proyecto usa **SQLite** como base de datos predeterminada. Si prefieres utilizar otra base de datos como **PostgreSQL** o **MySQL**, tendrás que configurar el archivo `settings.py` en el directorio correspondiente y agregar las credenciales correspondientes.

---

## ✅ **Resumen para Iniciar la Aplicación**

Para iniciar el backend, asegúrate de tener lo siguiente instalado:

- **Python** (Versión 3.8 o superior).
- **pip** (gestor de paquetes de Python).

Sigue estos pasos:

1. Dirígete a la carpeta del proyecto donde se encuentra `manage.py`.
2. Usa el siguiente comando para iniciar el servidor de desarrollo:
   ```bash
   py manage.py runserver
