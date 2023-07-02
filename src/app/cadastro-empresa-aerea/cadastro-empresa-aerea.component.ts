import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro-empresa-aerea',
  templateUrl: './cadastro-empresa-aerea.component.html',
  styleUrls: ['./cadastro-empresa-aerea.component.css']
})
export class CadastroEmpresaAereaComponent {
  
  empresaForm!: FormGroup;
  listEmpresas: any[] = []; 

  constructor(private formBuilder: FormBuilder) { 

    for (let i = 0; i < 5; i++) {
      this.listEmpresas.push({
        id: i,
        nomeEmpresa: i+' - '+i,
        dataSaldo: '2023-06-01',
        saldoMilhas: 100,
        valorPagoMilhas: 50
      });
    }

  }

  ngOnInit() {
    this.empresaForm = this.formBuilder.group({
      id: new FormControl(''),
      nomeEmpresa: ['', [Validators.required, Validators.pattern(/^[^-\#!@%*()+_<>,ºª§]+$/)], this.validaNomeEmpresa],
      saldoMilhas: new FormControl('', [Validators.required]),
      valorPagoMilhas: new FormControl('', [Validators.required])
    });
  }

  get id(){
    return this.empresaForm.get('id')!;
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
    console.log('Enviou formulário');
    const empresa = this.empresaForm.value;
    // Lógica para salvar a empresa
    this.listEmpresas.push(empresa);
    this.resetForm();    
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