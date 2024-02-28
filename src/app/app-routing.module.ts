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
import { AuthGoogleGuard } from './services/auth-guard';

const routes: Routes = [
  { path: "inicio", component:InicioComponent},
  { path: "login", component:LoginComponent},
  { path: "", component:LoginComponent},
  { path: "bibliografias", component:BibliografiaComponent, canActivate:[AuthGoogleGuard]},
  { path: "bibliografias/nuevo", component:FormBiblioComponent, canActivate:[AuthGoogleGuard]},
  { path: "licencias", component:LicenciasComponent, canActivate:[AuthGoogleGuard]},
  { path: "licencias/nuevo", component:FormLicenciaComponent, canActivate:[AuthGoogleGuard]},
  { path: "infra", component:InfraComponent, canActivate:[AuthGoogleGuard]},
  { path: "infra/nuevo", component:FormInfraComponent, canActivate:[AuthGoogleGuard]},
  { path: "servicios", component:ServiciosComponent, canActivate:[AuthGoogleGuard]},
  { path: "servicios/nuevo", component:FormServicioComponent, canActivate:[AuthGoogleGuard]},
  { path: "**", redirectTo: "inicio", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
