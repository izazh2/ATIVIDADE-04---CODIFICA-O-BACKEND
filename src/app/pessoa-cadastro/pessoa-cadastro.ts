import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-cadastro',
  imports: [FormsModule],
  templateUrl: './pessoa-cadastro.html',
  styleUrl: './pessoa-cadastro.css'
})
export class PessoaCadastroComponent {

  constructor(private router: Router) {}

  cliente = {
    nome: '',
    cpf: '',
    email: '',
    telefone: ''
  };

  cadastrarCliente() {
    console.log('Dados do cliente:', this.cliente);
    alert('Cadastro realizado com sucesso!');

    this.router.navigate(['/area-cliente']);
  }

}