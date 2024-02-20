import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliografiaComponent } from './paginas/bibliografia/bibliografia.component';
import { LicenciasComponent } from './paginas/licencias/licencias.component';
import { InfraComponent } from './paginas/infra/infra.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { FormBiblioComponent } from './form-biblio/form-biblio.component';
import { FormLicenciaComponent } from './form-licencia/form-licencia.component';
import { FormInfraComponent } from './form-infra/form-infra.component';
import { FormServicioComponent } from './form-servicio/form-servicio.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "inicio", component:InicioComponent},
  { path: "login", component:LoginComponent},
  { path: "", component:LoginComponent},
  { path: "bibliografias", component:BibliografiaComponent},
  { path: "bibliografias/nuevo", component:FormBiblioComponent},
  { path: "licencias", component:LicenciasComponent},
  { path: "licencias/nuevo", component:FormLicenciaComponent},
  { path: "infra", component:InfraComponent},
  { path: "infra/nuevo", component:FormInfraComponent},
  { path: "servicios", component:ServiciosComponent},
  { path: "servicios/nuevo", component:FormServicioComponent},
  { path: "**", redirectTo: "login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
