import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliografiaComponent } from './paginas/bibliografia/bibliografia.component';
import { LicenciasComponent } from './paginas/licencias/licencias.component';
import { InfraComponent } from './paginas/infra/infra.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';

const routes: Routes = [
  { path: "bibliografias", component:BibliografiaComponent},
  { path: "licencias", component:LicenciasComponent},
  { path: "infra", component:InfraComponent},
  { path: "servicios", component:ServiciosComponent},
  { path: "**", redirectTo: "bibliografias", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
