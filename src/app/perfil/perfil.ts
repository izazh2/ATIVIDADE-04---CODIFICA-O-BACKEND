import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  imports: [FormsModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class PerfilComponent {

  cliente = {
    nome: '',
    cpf: '',
    email: '',
    telefone: ''
  };

  salvarAlteracoes() {
    console.log('Dados atualizados:', this.cliente);
    alert('Dados atualizados com sucesso!');
  }

}