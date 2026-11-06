import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  email = '';
  senha = '';

  constructor(private router: Router) {}

  entrar() {
    if (!this.email || !this.senha) {
      alert('Preencha o e-mail e a senha!');
      return;
    }

    alert('Login realizado com sucesso!');

    this.router.navigate(['/area-cliente']);
  }
}