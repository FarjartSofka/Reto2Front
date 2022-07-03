import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarJuegoComponent } from './iniciar-juego.component';

describe('IniciarJuegoComponent', () => {
  let component: IniciarJuegoComponent;
  let fixture: ComponentFixture<IniciarJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarJuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciarJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
