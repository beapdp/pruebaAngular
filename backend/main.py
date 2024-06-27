from fastapi import FastAPI, HTTPException
from models import Pelicula
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

#http://127.0.0.1:8000

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

peliculas = []

@app.get("/")
def index():
    return "Hola"

@app.get("/peliculas/{id}")
def mostrar_pelicula(id: int):
    for pelicula in peliculas:
        if pelicula.id == id:
            return pelicula
    raise HTTPException(status_code=404, detail="Película no encontrada")

@app.get("/peliculas")
def listar_peliculas():
    return peliculas

@app.post("/peliculas")
def insertar_pelicula(pelicula: Pelicula):
    peliculas.append(pelicula)
    return {"message": f"Película {pelicula.titulo} insertada"}
