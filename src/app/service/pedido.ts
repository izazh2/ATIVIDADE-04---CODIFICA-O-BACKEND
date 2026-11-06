
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Pedido {

  pedidos: any[] = [];

  cadastrarPedido(pedido: any) {
    this.pedidos.push(pedido);
  }

  listarPedidos() {
    return this.pedidos;
  }

}
