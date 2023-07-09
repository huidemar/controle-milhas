import { Component, ViewChild  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { EmpresaAereaService } from 'src/app/cadastro-empresa-aerea/service/empresa-aerea.service';
import { EmpresaAerea } from './empresaaerea.module';

@Component({
  selector: 'app-cadastro-empresa-aerea',
  templateUrl: './cadastro-empresa-aerea.component.html',
  styleUrls: ['./cadastro-empresa-aerea.component.css']
})
export class CadastroEmpresaAereaComponent {
  
  empresaForm!: FormGroup;
  listEmpresas: any[] = []; 
  @ViewChild(EmpresaAereaService) empresaAereaService!: EmpresaAereaService;

  constructor(private formBuilder: FormBuilder ) {   
    
  }

  ngOnInit() {
    this.empresaForm = this.formBuilder.group({
      nomeEmpresa: ['', [Validators.required, Validators.pattern(/^[^-\#!@%*()+_<>,ºª§]+$/)], this.validaNomeEmpresa],
      saldoMilhas: new FormControl('', [Validators.required]),
      valorPagoMilhas: new FormControl('', [Validators.required])
    });
  }

  get nomeEmpresa(){
    return this.empresaForm.get('nomeEmpresa')!;
  }
  get saldoMilhas(){
    return this.empresaForm.get('saldoMilhas')!;
  }
  get valorPagoMilhas(){
    return this.empresaForm.get('valorPagoMilhas')!;
  }      

  submit() {
    if (this.empresaForm.invalid){
      return;
    }
    const novaEmpresaAerea = {
      nomeEmpresa: this.nomeEmpresa,
      saldoMilhas: this.saldoMilhas,
      valorPago: this.valorPagoMilhas
    };
    alert('aqui = '+novaEmpresaAerea.nomeEmpresa);
    this.empresaAereaService.salvar(novaEmpresaAerea)
      .then(response => {
        console.log('Empresa aérea cadastrada');
      })
      .catch(error => {
        console.log('Erro ao cadastrar empresa aérea');
      });
  }

  editarEmpresa(id: number) {
    const empresa = this.listEmpresas.find(e => e.id === id);
    if (empresa) {
      this.empresaForm.patchValue(empresa);
    }
  }

  resetForm() {
    this.empresaForm.reset();
    const idControl = this.empresaForm.get('id');
    if (idControl) {
      idControl.setValue('');
    }
  }
  
  validaNomeEmpresa(control: AbstractControl) {
    const invalidoNomeRegex = /[-\#!@%*()+_<>,ºª§]/;
    if (invalidoNomeRegex.test(control.value)) {
      return true 
    }
    return null;
  }
  hasInvalidPattern() {
    return this.nomeEmpresa.hasError('pattern');
  }  

  isFormInvalid(): boolean {
    const { nomeEmpresa, saldoMilhas, valorPagoMilhas } = this.empresaForm.controls;
    return nomeEmpresa.invalid || saldoMilhas.invalid || valorPagoMilhas.invalid || this.empresaForm.pristine;
  }
}