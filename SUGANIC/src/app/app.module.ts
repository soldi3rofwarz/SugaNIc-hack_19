import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { RegistroComponent } from './Registro/registro/registro.component';
import { LoginComponent } from './Login/login/login.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { CuerpoComponent } from './Cuerpo/cuerpo/cuerpo.component';
import{NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarruselComponent } from './Carrusel/carrusel/carrusel.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    RegistroComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    CuerpoComponent,
    BrowserAnimationsModule
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
