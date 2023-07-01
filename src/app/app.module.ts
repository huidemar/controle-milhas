import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AloMundoComponent } from './components/alo-mundo/alo-mundo.component';
import { TchauMundoComponent } from './components/tchau-mundo/tchau-mundo.component';

@NgModule({
  declarations: [
    AppComponent,
    AloMundoComponent,
    TchauMundoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
