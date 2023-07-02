import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AloMundoComponent } from './components/alo-mundo/alo-mundo.component';
import { TchauMundoComponent } from './components/tchau-mundo/tchau-mundo.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LandPageComponent } from './land-page/land-page.component';
import { CadastroEmpresaAereaComponent } from './cadastro-empresa-aerea/cadastro-empresa-aerea.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SaldoMilhasComponent } from './saldo-milhas/saldo-milhas.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { CadastroEmpresaParceiraComponent } from './cadastro-empresa-parceira/cadastro-empresa-parceira.component';
import { PainelSaldoComponent } from './painel-saldo/painel-saldo.component';
import { PainelSaldoDetalhesComponent } from './painel-saldo-detalhes/painel-saldo-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    AloMundoComponent,
    TchauMundoComponent,
    MenuComponent,
    RodapeComponent,
    LandPageComponent,
    CadastroEmpresaAereaComponent,
    SaldoMilhasComponent,
    MovimentacaoComponent,
    CadastroEmpresaParceiraComponent,
    PainelSaldoComponent,
    PainelSaldoDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
