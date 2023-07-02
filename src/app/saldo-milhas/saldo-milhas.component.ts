import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saldo-milhas',
  templateUrl: './saldo-milhas.component.html',
  styleUrls: ['./saldo-milhas.component.css']
})
export class SaldoMilhasComponent {
  constructor(private router: Router){}
  empresas = [
    { codigo: '001', nome: 'Empresa A', saldo: 1000 },
    { codigo: '002', nome: 'Empresa B', saldo: 2000 },
    { codigo: '003', nome: 'Empresa C', saldo: 3000 }
  ];

  mostrarDetalhes(codigo: string) {
    this.router.navigate(['/saldo-milhas-detalhes', codigo]);;
    // Aqui você pode executar ações com base no código, como exibir mais informações ou redirecionar para outra página.
  }
}
