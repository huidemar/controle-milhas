import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit{

  @Input() usuarioNome: string = 'Mévio';

  isHidePanel = false;
  ngOnInit(): void {
        
  }
}
