
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { Agendamento } from '../service/agendamento';

@Component({
  selector: 'app-agendamento',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './agendamento.html',
  styleUrl: './agendamento.css'
})
export class AgendamentoComponent {

  hoje = new Date().toISOString().split('T')[0];

  servicos = [
    { id: 1, nome: 'Limpeza de Pele', preco: 100 },
    { id: 2, nome: 'Massagem Relaxante', preco: 120 },
    { id: 3, nome: 'Hidratação Facial', preco: 80 }
  ];

  agendamento = {
    servico: '',
    data: '',
    horario: '',
    observacoes: ''
  };

  horarios = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00'
  ];

  constructor(private agendamentoService: Agendamento) {}

  confirmarAgendamento() {

    const novoAgendamento = {
      id: Date.now(),
      servico: this.agendamento.servico,
      data: this.agendamento.data,
      horario: this.agendamento.horario,
      observacoes: this.agendamento.observacoes,
      status: 'Aguardando confirmação'
    };

    this.agendamentoService.cadastrarAgendamento(novoAgendamento);

    alert('Agendamento solicitado com sucesso!');

    console.log('Agendamento registrado:', novoAgendamento);

    this.agendamento = {
      servico: '',
      data: '',
      horario: '',
      observacoes: ''
    };

  }

}
