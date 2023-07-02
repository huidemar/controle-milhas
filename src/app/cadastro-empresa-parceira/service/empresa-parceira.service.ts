import { Injectable } from '@angular/core';
import { EmpresaParceira} from 'src/app/cadastro-empresa-parceira/empresaparceira.module';

@Injectable({
  providedIn: 'root'
})
export class EmpresaParceiraService {

  constructor() { }

  public salvar(data: EmpresaParceira){
    localStorage.setItem(data.id.toString(),JSON.stringify(data));
  } 

}
