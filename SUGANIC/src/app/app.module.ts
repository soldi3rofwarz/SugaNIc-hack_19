
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RegistroComponent } from './Registro/registro/registro.component';
import { LoginComponent } from './Login/login/login.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { CuerpoComponent } from './Cuerpo/cuerpo/cuerpo.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CarruselComponent } from './Carrusel/carrusel/carrusel.component';
import { from } from 'rxjs';
import { SubastaComponent } from './subasta/subasta/subasta.component';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';


 const rutas: Routes=[
   {
    path:'cuerpo',
    component: CuerpoComponent
   },
   {
    path:'subasta',
    component: SubastaComponent
   }
   
 ]
@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    RegistroComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    CuerpoComponent,
    SubastaComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
