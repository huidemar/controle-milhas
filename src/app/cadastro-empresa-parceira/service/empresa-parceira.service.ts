import { Injectable } from '@angular/core';
import { EmpresaParceira} from 'src/app/cadastro-empresa-parceira/empresaparceira.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaParceiraService {
  private apiUrl = 'http://localhost:3000/parceira/';  

  constructor(private http: HttpClient) { }

  // public salvar(data: EmpresaParceira){
  //   localStorage.setItem(data.id.toString(),JSON.stringify(data));
  // } 


  public salvar(empresaAerea: any): Promise<any> {
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

  public getEmpresaParceira(): Observable<EmpresaParceira[]> {
    return this.http.get<EmpresaParceira[]>(this.apiUrl)
      .pipe(
        catchError(error => {
          console.error('Erro ao carregar empresas parceiras:', error);
          throw error;
        })
      );
  }
  
}
