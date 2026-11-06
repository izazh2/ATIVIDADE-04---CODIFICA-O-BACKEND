
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { Carrinho } from '../service/carrinho';
import { Pedido } from '../service/pedido';

@Component({
  selector: 'app-finalizacao-compra',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './finalizacao-compra.html',
  styleUrl: './finalizacao-compra.css'
})
export class FinalizacaoCompraComponent {

  itens: any[] = [];

  endereco = {
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: ''
  };

  formaPagamento = '';

  constructor(
    private carrinho: Carrinho,
    private pedidoService: Pedido
  ) {
    this.itens = this.carrinho.listarProdutos();
  }

  calcularTotal() {
    return this.itens.reduce((total, produto) => {
      return total + produto.preco;
    }, 0);
  }

  finalizarCompra() {

    const novoPedido = {
      id: Date.now(),
      data: new Date(),
      produtos: [...this.itens],
      endereco: { ...this.endereco },
      formaPagamento: this.formaPagamento,
      total: this.calcularTotal(),
      status: 'Aguardando confirmação'
    };

    this.pedidoService.cadastrarPedido(novoPedido);

    this.carrinho.limparCarrinho();

    alert('Pedido realizado com sucesso!');

    console.log('Pedido registrado:', novoPedido);
  }

}
