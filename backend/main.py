from fastapi import FastAPI, HTTPException
from models import Pelicula
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Datos predefinidos de películas
peliculas = [
    Pelicula(
        id=1,
        titulo="El Caballero Oscuro",
        descripcion="Batman lucha contra el Joker.",
        director="Christopher Nolan",
        imagen="https://pics.filmaffinity.com/the_dark_knight-102763119-large.jpg"
    ),
    Pelicula(
        id=2,
        titulo="Gran Torino",
        descripcion="Un veterano de guerra entabla una amistad con su joven vecino.",
        director="Clint Eastwood",
        imagen="https://pics.filmaffinity.com/gran_torino-278262332-large.jpg"
    ),
    Pelicula(
        id=3,
        titulo="Malditos Bastardos",
        descripcion="Un grupo de soldados judíos planea asesinar a líderes nazis.",
        director="Quentin Tarantino",
        imagen="https://pics.filmaffinity.com/inglourious_basterds-976286054-large.jpg"
    )
]

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
