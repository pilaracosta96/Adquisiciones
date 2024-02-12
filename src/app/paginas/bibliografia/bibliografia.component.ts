import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IBibliografia } from '../../models/bibliografia.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bibliografia',
  templateUrl: './bibliografia.component.html',
  styleUrl: './bibliografia.component.css',
})
export class BibliografiaComponent implements OnInit {
  bibliografias: IBibliografia[] = [];

  private _apiService = inject(ApiService);

  nombre: string = 'Bibliografía';
  private _router = inject(Router);
  item: any;
  listaCheck: any[] = [];

  ngOnInit(): void {
    this._apiService.getBibliografias().subscribe((data: IBibliografia[]) => {
      this.bibliografias = data;
    });
  }

  cerrar($event: boolean) {
    this.item.isSelected = $event;
  }

  
  seleccion(item: any) {
    this.item = item;
    const index = this.listaCheck.findIndex(
      (selectedItem) => selectedItem.isbn === item.isbn
    );

    if (index === -1) {
      // Si no está en la lista, agrégalo
      this.listaCheck.push(item);
    } else {
      // Si ya está en la lista, quítalo (deselección)
      this.listaCheck.splice(index, 1);
    }
  }


  eliminar(isbn: number) {
    if (this.listaCheck.length === 0) {
      // Si la lista de selección está vacía, muestra un mensaje de alerta
      Swal.fire({
        title: 'Ningún elemento seleccionado',
        text: 'Por favor, seleccione elementos para eliminar',
        icon: 'warning',
      });
      return; // No hay elementos para eliminar, sal del método
    }

    // alert

    // Alerta de confirmación
    Swal.fire({
      title: '¿Está seguro de eliminar estos elementos?',
      text: 'Se eliminarán ' + this.listaCheck.length + ' elementos',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Itera sobre la lista de selección y elimina cada elemento
        for (const selectedItem of this.listaCheck) {
          this._apiService.delEliminarPorISBN(selectedItem.isbn).subscribe((response) => {
            // Puedes manejar la respuesta de la API si es necesario
          });
        }
  
        Swal.fire({
          title: 'Eliminados',
          text: 'Elementos eliminados correctamente',
          icon: 'success',
        });
  
        // Limpia la lista de selección
        this.listaCheck = [];
        setTimeout(() => {
          this.ngOnInit();
        }, 150);
      }
    });
  }
}
