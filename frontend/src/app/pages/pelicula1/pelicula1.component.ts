import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasService } from '../../core/service/peliculas.service';
import { Pelicula } from '../../model';

@Component({
  selector: 'app-pelicula1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pelicula1.component.html',
  styleUrls: ['./pelicula1.component.css']
})
export class Pelicula1Component implements OnInit {
  // Propiedad para almacenar los datos de la película
  pelicula: Pelicula | undefined;

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    // Obtener los datos de "El Caballero Oscuro" (ID: 1) al inicializar el componente
    this.peliculasService.getPelicula(1).subscribe(
      (pelicula: Pelicula) => {
        // Asignar los datos de la película obtenida a la propiedad del componente
        this.pelicula = pelicula;
      },
      error => {
        // Manejar cualquier error que ocurra durante la obtención de datos
        console.error('Error al cargar la película:', error);
      }
    );
  }
}
