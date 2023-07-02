import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})
export class MovimentacaoComponent {
  usuarioNome: string = '';
  empresaOrigem: string;
  empresaDestino: string;
  tipoOperacao: string;
  dataOperacao: string;
  quantidadeMilhas: number;
  valorMilha: number;
  constructor(){
    this.empresaOrigem = '';
    this.empresaDestino = '';
    this.tipoOperacao = '';
    this.dataOperacao = '';
    this.quantidadeMilhas = 0;
    this.valorMilha = 0;
  }  
  ngOnInit(): void{}
  cadastrarOperacao() {}
}
