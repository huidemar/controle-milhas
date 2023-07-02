import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpresaAerea } from 'src/app/cadastro-empresa-aerea/empresaaerea.module';

@Injectable({
  providedIn: 'root'
})
export class EmpresaAereaService {

  private apiUrl = 'http://localhost:3000/empresa-aerea';
  
  constructor(private http: HttpClient) { }

  public salvar(empresaaerea: any): Promise<any>{
    alert("chegou aqui");
    return this.http.post(this.apiUrl, empresaaerea).toPromise();    
  } 

}
