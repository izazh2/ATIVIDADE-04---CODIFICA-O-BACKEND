import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoPerfil } from './acesso-perfil';

describe('AcessoPerfil', () => {
  let component: AcessoPerfil;
  let fixture: ComponentFixture<AcessoPerfil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcessoPerfil],
    }).compileComponents();

    fixture = TestBed.createComponent(AcessoPerfil);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
