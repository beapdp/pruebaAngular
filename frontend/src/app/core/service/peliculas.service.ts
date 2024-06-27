import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Pelicula } from '../../model'; 

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  // URL de la API para obtener las películas
  private peliculasUrl = 'http://127.0.0.1:8000/peliculas';

  // BehaviorSubject para manejar la película seleccionada actualmente
  private selectedPeliculaSubject = new BehaviorSubject<Pelicula | null>(null);

  // Observable público para que los componentes se suscriban a los cambios de la película seleccionada
  selectedPelicula$ = this.selectedPeliculaSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Método para obtener todas las películas de la API
  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.peliculasUrl);
  }

  // Método para obtener una película por ID
  getPelicula(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${this.peliculasUrl}/${id}`);
  }
  // Método para actualizar la película seleccionada
  setSelectedPelicula(pelicula: Pelicula) {
    this.selectedPeliculaSubject.next(pelicula);
  }
}
