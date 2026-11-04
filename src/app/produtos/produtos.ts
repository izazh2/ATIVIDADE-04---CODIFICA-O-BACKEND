import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Carrinho } from '../service/carrinho';

@Component({
  selector: 'app-produtos',
  imports: [CurrencyPipe],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css'
})
export class ProdutosComponent {

  mensagem = '';

  constructor(private carrinho: Carrinho) {}

  produtos = [
    {
      id: 1,
      nome: 'Creme Hidratante',
      descricao: 'Hidratação e cuidado para sua pele.',
      preco: 49.90
    },
    {
      id: 2,
      nome: 'Sérum Facial',
      descricao: 'Ajuda a manter a pele saudável.',
      preco: 59.90
    },
    {
      id: 3,
      nome: 'Sabonete Facial',
      descricao: 'Limpeza suave para o rosto.',
      preco: 29.90
    }
  ];

  adicionarAoCarrinho(produto: any) {
    this.carrinho.adicionarProduto(produto);
    this.mensagem = produto.nome + ' foi adicionado ao carrinho!';
  }

}