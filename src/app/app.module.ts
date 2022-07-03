import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { PistaComponent } from './shared/pista/pista.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CrearJuegoComponent } from './pages/crear-juego/crear-juego.component';
import { IniciarJuegoComponent } from './pages/iniciar-juego/iniciar-juego.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AuthService } from './shared/services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CrearJuegoComponent,
    IniciarJuegoComponent,

  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ AuthService,
        { provide: AngularFireModule.initializeApp, useValue: environment.firebaseConfig }],
  bootstrap: [AppComponent]
})
export class AppModule {}
