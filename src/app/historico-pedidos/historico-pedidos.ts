import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Pedido } from '../service/pedido';

@Component({
  selector: 'app-historico-pedidos',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './historico-pedidos.html',
  styleUrl: './historico-pedidos.css'
})
export class HistoricoPedidosComponent {

  pedidos: any[] = [];

  constructor(private pedidoService: Pedido) {
    this.pedidos = this.pedidoService.listarPedidos();
  }

}