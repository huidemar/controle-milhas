import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChild('mobile') sideNav?: ElementRef;
  ngAfterViewInit(): void {
    if (this.sideNav) {
      M.Sidenav.init(this.sideNav.nativeElement);
    }
  }
}
