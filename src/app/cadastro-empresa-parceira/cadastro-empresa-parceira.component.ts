import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-empresa-parceira',
  templateUrl: './cadastro-empresa-parceira.component.html',
  styleUrls: ['./cadastro-empresa-parceira.component.css']
})
export class CadastroEmpresaParceiraComponent {

  nomeUsuario: string = '';
  nomeParceiro: string = '';
  saldoMilhas: number = 0;
  valorPago: number = 0;

  constructor(){}

  ngOnInit(): void{}

}
