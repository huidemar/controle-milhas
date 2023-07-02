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


  public listar(): Array<EmpresaParceira> {
    const keys = Object.keys(localStorage);
    let listEmpresaParceira: EmpresaParceira[] = [];
    for (let indice = 0; indice < keys.length; indice++) {
      const key = keys[indice];
      const item = localStorage.getItem(key);
      if (item) {
        listEmpresaParceira.push(JSON.parse(item));
      }
    }
    return listEmpresaParceira;
  }
  

}
