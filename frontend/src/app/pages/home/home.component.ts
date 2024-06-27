import { Component, OnInit, OnDestroy } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { PeliculasService } from '../../core/service/peliculas.service';
import { Pelicula } from '../../model'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [GalleriaModule]
})
export class HomeComponent implements OnInit, OnDestroy {
  // Propiedades del componente
  peliculas: Pelicula[] = [];
  images: any[] = [];
  responsiveOptions: any[] | undefined;
  selectedPelicula: Pelicula | null = null;
  subscription: Subscription | undefined;

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit() {
    // Cargar las películas y configurar las imágenes para el carousel
    this.peliculasService.getPeliculas().subscribe(data => {
      this.peliculas = data;
      // Mapear las películas a un formato compatible con el carousel
      this.images = this.peliculas.map(pelicula => ({
        itemImageSrc: pelicula.imagen,
        thumbnailImageSrc: pelicula.imagen,
        alt: pelicula.titulo,
        title: pelicula.titulo
      }));
      // Seleccionar la primera película por defecto
      this.peliculasService.setSelectedPelicula(this.peliculas[0]);
    });

    // Configurar las opciones responsivas para el carousel
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];

    // Suscribirse a los cambios de la película seleccionada
    this.subscription = this.peliculasService.selectedPelicula$.subscribe(pelicula => {
      this.selectedPelicula = pelicula;
    });
  }

  // Método llamado cuando cambia la imagen activa en el carousel
  onImageChange(index: number) {
    if (this.peliculas[index]) {
      this.peliculasService.setSelectedPelicula(this.peliculas[index]);
    }
  }

  // Limpieza al destruir el componente
  ngOnDestroy() {
    // Importante: cancelar la suscripción para evitar memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
