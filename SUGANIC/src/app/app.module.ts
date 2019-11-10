import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarruselComponent } from './Carrusel/carrusel/carrusel.component';
import { RegistroComponent } from './Registro/registro/registro.component';
import { LoginComponent } from './Login/login/login.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { CuerpoComponent } from './Cuerpo/cuerpo/cuerpo.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    RegistroComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    CuerpoComponent,
    MatInputModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
