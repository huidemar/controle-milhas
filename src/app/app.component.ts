import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  @ViewChild('mobile') sideNav?: ElementRef;

  title = 'Aplicação para Controle de milhas';
  constructor(private titleService: Title) {}
  ngAfterViewInit(): void {
    if (this.sideNav) {
      M.Sidenav.init(this.sideNav.nativeElement);
    }
  }
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}