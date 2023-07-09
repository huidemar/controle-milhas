import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpresaAerea } from 'src/app/cadastro-empresa-aerea/empresaaerea.module';

@Injectable({
  providedIn: 'root'
})
export class EmpresaAereaService {
  private apiUrl = 'http://localhost:3000/aerea/';

  constructor() { }
  salvar(empresaAerea: any): Promise<any> {
    alert('aqui 2');
    return fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(empresaAerea)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Erro ao cadastrar a empresa aérea.');
      }
    });
  }

}
