from pydantic import BaseModel

class Pelicula(BaseModel):
    id: int
    titulo: str
    descripcion: str
    director: str
    imagen: str
