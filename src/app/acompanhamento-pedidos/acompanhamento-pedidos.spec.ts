import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentoPedidos } from './acompanhamento-pedidos';

describe('AcompanhamentoPedidos', () => {
  let component: AcompanhamentoPedidos;
  let fixture: ComponentFixture<AcompanhamentoPedidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcompanhamentoPedidos],
    }).compileComponents();

    fixture = TestBed.createComponent(AcompanhamentoPedidos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
