import { Component, OnInit, inject } from '@angular/core';
import { ILicencia } from '../../models/licencia.model';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-licencias',
  templateUrl: './licencias.component.html',
  styleUrl: './licencias.component.css'
})
export class LicenciasComponent implements OnInit{
  licencias?: ILicencia[];
  private _apiService = inject(ApiService);
  private _ruta = inject(ActivatedRoute);
  nombre="Licencias de Software"
  item: any;
  
  ngOnInit(): void {
    this._apiService.getLicencias().subscribe((data:ILicencia[]) => {
      this.licencias = data;
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
      text: "Se eliminará : " + this.item.nombre,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        this._apiService.delEliminarLicenciaPorId(id).subscribe(response => {

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
