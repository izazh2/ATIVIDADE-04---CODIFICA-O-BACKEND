import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizacaoCompra } from './finalizacao-compra';

describe('FinalizacaoCompra', () => {
  let component: FinalizacaoCompra;
  let fixture: ComponentFixture<FinalizacaoCompra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalizacaoCompra],
    }).compileComponents();

    fixture = TestBed.createComponent(FinalizacaoCompra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
