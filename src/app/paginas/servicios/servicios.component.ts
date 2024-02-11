import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IServicio } from '../../models/servicio.model';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent implements OnInit {

servicios?: IServicio[];

private _apiService = inject(ApiService)

  nombre="Servicios";
  item: any;


  ngOnInit(): void {
    this._apiService.getServicios().subscribe((data:IServicio[]) =>{
      this.servicios = data;
    })
  }

  seleccion(item: any){
    this.item = item;

  }

  cerrar($event: boolean){
    this.item.isSelected = $event;
  }
  
  eliminar(id: number){
    
    this._apiService.delEliminarServicioPorId(id).subscribe(response => {alert(JSON.stringify(response))});
    this.ngOnInit();
  }
}
