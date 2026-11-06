
import { Routes } from '@angular/router';

import { HomeComponent } from './home-component/home-component';

import { ProdutosComponent } from './produtos/produtos';

import { CarrinhoComponent } from './carrinho/carrinho';

import { ServicosComponent } from './servicos/servicos';

import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro';

import { LoginComponent } from './login/login';

import { PerfilComponent } from './perfil/perfil';

import { FinalizacaoCompraComponent } from './finalizacao-compra/finalizacao-compra';

import { HistoricoPedidosComponent } from './historico-pedidos/historico-pedidos';

import { AcompanhamentoPedidosComponent } from './acompanhamento-pedidos/acompanhamento-pedidos';

import { AgendamentoComponent } from './agendamento/agendamento';

import { MeusAgendamentosComponent } from './meus-agendamentos/meus-agendamentos';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path:'produtos',
    component : ProdutosComponent
  },

  {
    path: 'carrinho',
    component: CarrinhoComponent
  },

  {
    path: 'servicos',
    component: ServicosComponent
  },

  {
    path: 'cadastro',
    component: PessoaCadastroComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'perfil',
    component: PerfilComponent
  },

  {
    path: 'finalizacao-compra',
    component: FinalizacaoCompraComponent
  },

  {
    path: 'historico-pedidos',
    component: HistoricoPedidosComponent
  }, 

  {
    path: 'acompanhamento-pedidos',
    component: AcompanhamentoPedidosComponent
  },

  {
    path: 'agendamento',
    component: AgendamentoComponent
  },

  {
    path: 'meus-agendamentos',
    component: MeusAgendamentosComponent
  }
];
