export class EmpresaParceira {
    id: number;
    nomeParceiro: string;
    saldoMilhas: number;
    valorPago: number;
  
    constructor(id:number, nomeParceiro: string, saldoMilhas: number, valorPago: number) {
      this.id = id;
      this.nomeParceiro = nomeParceiro;
      this.saldoMilhas = saldoMilhas;
      this.valorPago = valorPago;
    }
    
  }