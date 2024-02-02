import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BibliografiaComponent } from './bibliografia/bibliografia.component';
import { LicenciasComponent } from './licencias/licencias.component';
import { InfraComponent } from './infra/infra.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [
    AppComponent,
    BibliografiaComponent,
    LicenciasComponent,
    InfraComponent,
    ServiciosComponent,
    ListaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
