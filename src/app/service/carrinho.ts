import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Carrinho {

  itens: any[] = [];

  adicionarProduto(produto: any) {
    this.itens.push(produto);
  }

  listarProdutos() {
    return this.itens;
  }

  limparCarrinho() {
    this.itens = [];
  }

}