import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarruselComponent } from './Carrusel/carrusel/carrusel.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
