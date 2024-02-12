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

  ngOnInit(): void {
    this._apiService.getBibliografias().subscribe((data: IBibliografia[]) => {
      this.bibliografias = data;
    });
  }

  seleccion(item: any) {
    this.item = item;
  }

  cerrar($event: boolean) {
    this.item.isSelected = $event;
  }

  eliminar(isbn: number) {
    // alert

    Swal.fire({
      title: '¿Está seguro de eliminar este elemento?',
      text: 'Se eliminará : ' + this.item.titulo,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this._apiService.delEliminarPorISBN(isbn).subscribe((response) => {
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
