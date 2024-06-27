import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasService } from '../../core/service/peliculas.service';
import { Pelicula } from '../../model';

@Component({
  selector: 'app-pelicula3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pelicula3.component.html',
  styleUrls: ['./pelicula3.component.css']
})
export class Pelicula3Component implements OnInit {
  pelicula: Pelicula | undefined;

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    // Utilizamos el método getPelicula con el ID 3 para obtener "Malditos Bastardos"
    this.peliculasService.getPelicula(3).subscribe(
      (pelicula: Pelicula) => {
        this.pelicula = pelicula;
      },
      error => {
        console.error('Error al cargar la película:', error);
      }
    );
  }
}
