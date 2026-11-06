
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Agendamento {

  agendamentos: any[] = [];

  cadastrarAgendamento(agendamento: any) {
    this.agendamentos.push(agendamento);
  }

  listarAgendamentos() {
    return this.agendamentos;
  }

}
