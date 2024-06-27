import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/'
    },
      {
          label: 'El caballero Oscuro',
          icon: 'pi pi-star',
          routerLink: '/pelicula1'
      },
      {
          label: 'Gran Torino',
          icon: 'pi pi-star',
          routerLink: 'pelicula2'
      },
      {
          label: 'Malditos Bastardos',
          icon: 'pi pi-star',
          routerLink:'pelicula3'
          
          
      }
  ]
  }

}
