import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-servicos',
  imports: [CurrencyPipe],
  templateUrl: './servicos.html',
  styleUrl: './servicos.css'
})
export class ServicosComponent {

  servicos = [
    {
      id: 1,
      nome: 'Limpeza de Pele',
      descricao: 'Tratamento para limpeza e cuidado facial.',
      preco: 100.00
    },
    {
      id: 2,
      nome: 'Massagem Relaxante',
      descricao: 'Massagem para relaxamento e bem-estar.',
      preco: 120.00
    },
    {
      id: 3,
      nome: 'Hidratação Facial',
      descricao: 'Tratamento para hidratar e cuidar da pele.',
      preco: 80.00
    }
  ];

}