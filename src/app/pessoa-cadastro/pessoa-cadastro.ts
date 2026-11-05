import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pessoa-cadastro',
  imports: [FormsModule],
  templateUrl: './pessoa-cadastro.html',
  styleUrl: './pessoa-cadastro.css'
})
export class PessoaCadastroComponent {

  cliente = {
    nome: '',
    cpf: '',
    email: '',
    telefone: ''
  };

  cadastrarCliente() {
    console.log('Dados do cliente:', this.cliente);
    alert('Cadastro realizado com sucesso!');
  }

}