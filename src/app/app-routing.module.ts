import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliografiaComponent } from './bibliografia/bibliografia.component';
import { LicenciasComponent } from './licencias/licencias.component';
import { InfraComponent } from './infra/infra.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  { path: "bibliografia", component:BibliografiaComponent},
  { path: "licencias", component:LicenciasComponent},
  { path: "infra", component:InfraComponent},
  { path: "servicios", component:ServiciosComponent},
  { path: "**", redirectTo: "bibliografia", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
