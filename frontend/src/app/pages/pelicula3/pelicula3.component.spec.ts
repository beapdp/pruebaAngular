import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pelicula3Component } from './pelicula3.component';

describe('Pelicula3Component', () => {
  let component: Pelicula3Component;
  let fixture: ComponentFixture<Pelicula3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pelicula3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pelicula3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
