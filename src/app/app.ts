import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { MenuComponent } from './menu/menu';
import { ProdutosComponent } from './produtos/produtos';
import { CarrinhoComponent } from './carrinho/carrinho';
import { ServicosComponent } from './servicos/servicos';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro';
import { LoginComponent } from './login/login';
import { PerfilComponent } from './perfil/perfil';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, MenuComponent, ProdutosComponent, CarrinhoComponent, ServicosComponent, PessoaCadastroComponent, LoginComponent, PerfilComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('estetica-bem-estar');
}
