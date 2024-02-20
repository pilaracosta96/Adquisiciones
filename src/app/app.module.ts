import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BibliografiaComponent } from './paginas/bibliografia/bibliografia.component';
import { LicenciasComponent } from './paginas/licencias/licencias.component';
import { InfraComponent } from './paginas/infra/infra.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import {  HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { FormBiblioComponent } from './form-biblio/form-biblio.component';
import { FormLicenciaComponent } from './form-licencia/form-licencia.component';
import { FormInfraComponent } from './form-infra/form-infra.component';
import { FormServicioComponent } from './form-servicio/form-servicio.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ModalComponent } from './modal/modal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { OAuthModule } from 'angular-oauth2-oidc';





@NgModule({
  declarations: [
    AppComponent,
    BibliografiaComponent,
    LicenciasComponent,
    InfraComponent,
    ServiciosComponent,
    FormBiblioComponent,
    FormLicenciaComponent,
    FormInfraComponent,
    FormServicioComponent,
    InicioComponent,
    ModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [
    provideClientHydration(), provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
