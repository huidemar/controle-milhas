import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-painel-saldo',
  templateUrl: './painel-saldo.component.html',
  styleUrls: ['./painel-saldo.component.css']
})
export class PainelSaldoComponent {
  @Input() saldo: number = 0;
  constructor(){}
  ngOnInit(): void{}
}
