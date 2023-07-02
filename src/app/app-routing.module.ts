import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandPageComponent } from './land-page/land-page.component';
import { CadastroEmpresaAereaComponent } from './cadastro-empresa-aerea/cadastro-empresa-aerea.component';
import { SaldoMilhasComponent } from './saldo-milhas/saldo-milhas.component';
import { CadastroEmpresaParceiraComponent } from './cadastro-empresa-parceira/cadastro-empresa-parceira.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { PainelSaldoDetalhesComponent } from './painel-saldo-detalhes/painel-saldo-detalhes.component';

const routes: Routes = [
                        {path: '', component:LandPageComponent},
                        {path: 'cadastro-empresa-aerea', component:CadastroEmpresaAereaComponent},
                        {path: 'saldo-milhas', component:SaldoMilhasComponent},
                        {path: 'cadastro-empresa-parceira', component:CadastroEmpresaParceiraComponent},
                        {path: 'movimentacao', component:MovimentacaoComponent},
                        {path: 'saldo-milhas-detalhes/:id', component:PainelSaldoDetalhesComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
