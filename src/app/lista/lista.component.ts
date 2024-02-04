import { Component, Input } from '@angular/core';
import { IBibliografia } from '../models/bibliografia.model';
import { IServicio } from '../models/servicio.model';
import { ILicencia } from '../models/licencia.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

 @Input() nombrePagina!: string;
 @Input() listaBibliografias?: IBibliografia[] ;
 @Input() listaServicios?: IServicio[];
 @Input() listaLicencias?: ILicencia[];
 @Input() columnaA?: string 
 @Input() columnaB?: string 
 @Input() columnaC?: string 

}
