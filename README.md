# Proyecto de Películas 

Este proyecto consiste en una aplicación web de películas desarrollada con Angular para el frontend y FastAPI para el backend.

## Estructura del Proyecto

- `/frontend`: Contiene el código fuente de la aplicación Angular.
- `/backend`: Contiene el código fuente de la API desarrollada con FastAPI.

## Requisitos Previos

- Node.js (versión 14.x o superior)
- Angular CLI
- Python (versión 3.7 o superior)
- pip (gestor de paquetes de Python)

## Configuración y Ejecución

### Frontend (Angular)

1. Navega al directorio del frontend:
cd frontend
   
3. Instala las dependencias:
npm install

4. Inicia el servidor de desarrollo:
ng serve


5. Abre tu navegador y visita `http://localhost:4200`

### Backend (FastAPI)

1. Navega al directorio del backend:
cd backend


2. Crea un entorno virtual (opcional pero recomendado):
python -m venv venv source venv/bin/activate # En Windows usa venv\Scripts\activate


3. Instala las dependencias:
pip install -r requirements.txt


4. Inicia el servidor:
uvicorn main:app --reload

5. La API estará disponible en `http://localhost:8000`
