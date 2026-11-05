import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { Carrinho } from '../service/carrinho';

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

  constructor(private carrinho: Carrinho) {
    this.itens = this.carrinho.listarProdutos();
  }

  calcularTotal() {
    return this.itens.reduce((total, produto) => {
      return total + produto.preco;
    }, 0);
  }

  finalizarCompra() {
    console.log('Produtos:', this.itens);
    console.log('Endereço:', this.endereco);
    console.log('Pagamento:', this.formaPagamento);

    alert('Pedido enviado com sucesso!');
  }

}