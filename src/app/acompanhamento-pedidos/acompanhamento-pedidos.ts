
import { Component } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { Pedido } from '../service/pedido';

@Component({
  selector: 'app-acompanhamento-pedidos',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './acompanhamento-pedidos.html',
  styleUrl: './acompanhamento-pedidos.css'
})
export class AcompanhamentoPedidosComponent {

  pedidos: any[] = [];

  constructor(private pedidoService: Pedido) {
    this.pedidos = this.pedidoService.listarPedidos();
  }

}
