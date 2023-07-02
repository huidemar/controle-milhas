import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmpresaParceiraService } from './service/empresa-parceira.service';
import { EmpresaParceira } from './empresaparceira.module';


@Component({
  selector: 'app-cadastro-empresa-parceira',
  templateUrl: './cadastro-empresa-parceira.component.html',
  styleUrls: ['./cadastro-empresa-parceira.component.css']
})
export class CadastroEmpresaParceiraComponent {
  formEmpresaParceira!: FormGroup;  
  idParceiro: number = 0;  
  nomeParceiro: string = '';  
  saldoMilhas: number = 0;
  valorPago: number = 0;
  
  constructor(private empresaParceiraService: EmpresaParceiraService){
    
  }
  
  ngOnInit(): void{    
    this.formEmpresaParceira = new FormGroup({
      idParceiro: new FormControl('', [Validators.required]),
      nomeParceiro: new FormControl('', [Validators.required]),
      saldoMilhas: new FormControl('', [Validators.required]),
      valorPago: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.formEmpresaParceira.valid) {
      alert('Formulário válido vou salvar as informações');     
      this.empresaParceiraService.salvar(new EmpresaParceira(this.idParceiro,this.nomeParceiro, this.saldoMilhas, this.valorPago));
      alert('Salvei!');     
    } else {
      alert('Formulário inválido');
      this.validarTodosOsCampos();
    }
  }
  
  validarTodosOsCampos(): boolean {
    if (this.nomeParceiro.trim() == '') {
      window.alert('Por favor, preencha o campo Empresa.');
      return false;
    }
    if (this.saldoMilhas == null || this.saldoMilhas == 0) {
      window.alert('O campo Saldo de Milhas deve ser preenchido.');
      return false;
    }
    const controle = this.formEmpresaParceira.get('valor');
    if (controle && controle.hasError('email')) {
      window.alert('O campo Valor Pago deve ser um e-mail válido.');
      return false;
    }
    return true; 
  }
}
