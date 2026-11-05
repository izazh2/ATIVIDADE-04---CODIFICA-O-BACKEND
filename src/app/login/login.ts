import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  email = '';
  senha = '';

  entrar() {
    console.log('E-mail:', this.email);
    console.log('Senha:', this.senha);

    alert('Formulário enviado!');
  }

}