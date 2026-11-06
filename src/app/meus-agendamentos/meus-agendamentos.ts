
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Agendamento } from '../service/agendamento';

@Component({
  selector: 'app-meus-agendamentos',
  imports: [DatePipe],
  templateUrl: './meus-agendamentos.html',
  styleUrl: './meus-agendamentos.css'
})
export class MeusAgendamentosComponent {

  agendamentos: any[] = [];

  constructor(private agendamentoService: Agendamento) {
    this.agendamentos = this.agendamentoService.listarAgendamentos();
  }

}
