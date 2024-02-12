import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IServicio } from '../../models/servicio.model';
import Swal from 'sweetalert2';

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

    // alert
    
    Swal.fire({
      title: "¿Está seguro de eliminar este elemento?",
      text: "Se eliminará : " + this.item.tipoServicio.nombreTipoServicio,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        this._apiService.delEliminarServicioPorId(id).subscribe(response => {

          Swal.fire({
            title: "Elimiado!",
            text: response.mensaje,
            icon: "success"
          });
          // loading
          setTimeout(() => {
            this.ngOnInit();
          }, 150);
        })
      }
    });



  }
}
