import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pelicula2Component } from './pelicula2.component';

describe('Pelicula2Component', () => {
  let component: Pelicula2Component;
  let fixture: ComponentFixture<Pelicula2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pelicula2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pelicula2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
