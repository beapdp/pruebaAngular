import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasService } from '../../core/service/peliculas.service';
import { Pelicula } from '../../model';

@Component({
  selector: 'app-pelicula2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pelicula2.component.html',
  styleUrls: ['./pelicula2.component.css']
})
export class Pelicula2Component implements OnInit {
  pelicula: Pelicula | undefined;

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    // Utilizamos el método getPelicula con el ID 2 para obtener "Gran Torino"
    this.peliculasService.getPelicula(2).subscribe(
      (pelicula: Pelicula) => {
        this.pelicula = pelicula;
      },
      error => {
        console.error('Error al cargar la película:', error);
      }
    );
  }
}
