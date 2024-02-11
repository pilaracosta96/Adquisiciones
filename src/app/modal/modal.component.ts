import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { IBibliografia } from '../models/bibliografia.model';
import { IInfra } from '../models/infra.model';
import { ILicencia } from '../models/licencia.model';
import { IServicio } from '../models/servicio.model';
import { bootstrapApplication } from '@angular/platform-browser';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() titulo: string ="";
  @Input() objeto?: any
  @Output() cerrar = new EventEmitter<boolean>();

  biblio?: IBibliografia;
  infra?: IInfra;
  licencia?: ILicencia;
  servicio?: IServicio;
  
  
  
  seleccionar(): void {
    if(this.titulo == 'Bibliografía'){
      this.biblio = this.objeto;
    }else{
      if(this.titulo == "Licencias de Software"){
        this.licencia = this.objeto;
      }else{
        if(this.titulo == "Equipos de Infraestructura"){
          this.infra = this.objeto;
        }else{
          if( this.titulo == "Servicios"){
            this.servicio = this.objeto;
          }
        }
      }
    }
  }


  limpiarCheck(){
    
    this.cerrar.emit(false);

  }
  

  }


