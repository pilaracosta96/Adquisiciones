import { Component, OnInit, inject } from '@angular/core';
import { IInfra } from '../../models/infra.model';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-infra',
  templateUrl: './infra.component.html',
  styleUrl: './infra.component.css',
})
export class InfraComponent implements OnInit {
  nombre = 'Equipos de Infraestructura';

  private _apiService = inject(ApiService);

  equipos?: IInfra[];
  item: any;

  ngOnInit(): void {
    this._apiService.getEquipos().subscribe((data: IInfra[]) => {
      this.equipos = data;
    });
  }

  seleccion(item: any) {
    this.item = item;
  }

  cerrar($event: boolean) {
    this.item.isSelected = $event;
  }

  eliminar(id: number) {
    // alert

    Swal.fire({
      title: '¿Está seguro de eliminar este elemento?',
      text: 'Se eliminará : ' + this.item.tipoEquipo.nombreTipoEquipo,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this._apiService.delEliminarEquipoPorId(id).subscribe((response) => {
          Swal.fire({
            title: 'Elimiado!',
            text: response.mensaje,
            icon: 'success',
          });
          // loading
          setTimeout(() => {
            this.ngOnInit();
          }, 150);
        });
      }
    });
  }
}
