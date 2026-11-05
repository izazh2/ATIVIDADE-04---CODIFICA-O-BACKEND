import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Carrinho } from '../service/carrinho';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})
export class CarrinhoComponent {

  itens: any[] = [];

  constructor(private carrinho: Carrinho) {
    this.itens = this.carrinho.listarProdutos();
  }

  calcularTotal() {
    return this.itens.reduce((total, produto) => {
      return total + produto.preco;
    }, 0);
  }

}