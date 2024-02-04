import { Component, OnInit, inject } from '@angular/core';
import { IInfra } from '../../models/infre.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-infra',
  templateUrl: './infra.component.html',
  styleUrl: './infra.component.css'
})
export class InfraComponent implements OnInit{
  nombre="Equipos de Infraestructura";
  
  private _apiService = inject(ApiService);
  
  equipos?: IInfra[];
  
  ngOnInit(): void {
    this._apiService.getEquipos().subscribe((data:IInfra[]) => {
      this.equipos = data;
    })
  }
}
