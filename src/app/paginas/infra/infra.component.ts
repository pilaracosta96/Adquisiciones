import { Component, OnInit, inject } from '@angular/core';
import { IInfra } from '../../models/infra.model';
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
  item: any;
  
  ngOnInit(): void {
    this._apiService.getEquipos().subscribe((data:IInfra[]) => {
      this.equipos = data;
    })
  }

  seleccion(item: any){
    this.item = item;

  }

  cerrar($event: boolean){
    this.item.isSelected = $event;
  }
  
  eliminar(id: number){
    
    this._apiService.delEliminarEquipoPorId(id).subscribe(response => {alert(JSON.stringify(response))});
    setTimeout(() => {
      this.ngOnInit();
    }, 150);
  }
}
