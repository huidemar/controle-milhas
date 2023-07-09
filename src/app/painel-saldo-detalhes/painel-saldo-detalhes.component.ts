import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-painel-saldo-detalhes',
  templateUrl: './painel-saldo-detalhes.component.html',
  styleUrls: ['./painel-saldo-detalhes.component.css']
})
export class PainelSaldoDetalhesComponent {
  movimentos = [{ codigoEmpresa: '', dataMovimento: '', tipoMovimentacao: '', quantidadeMilhas: 0, valorPago: 0 } ];

  constructor(private route: ActivatedRoute) {
    let codigo = this.route.snapshot.params['id'];
    if (codigo == 1){
      // Gerar 10 registros para a mesma empresa (código "001")
      this.movimentos = [];
      for (let i = 0; i < 5; i++) {
        this.movimentos.push({
          codigoEmpresa: '001',
          dataMovimento: '2023-06-01',
          tipoMovimentacao: 'Crédito',
          quantidadeMilhas: 100,
          valorPago: 50
        });
      }
    }
    if (codigo == 2){
      // Gerar 10 registros para a mesma empresa (código "001")
      this.movimentos = [];
      for (let i = 0; i < 5; i++) {
        this.movimentos.push({
          codigoEmpresa: '002',
          dataMovimento: '2023-06-01',
          tipoMovimentacao: 'Crédito',
          quantidadeMilhas: 100,
          valorPago: 50
        });
      }
    }    
  }
}
