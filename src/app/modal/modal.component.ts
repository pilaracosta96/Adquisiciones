import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() titulo: string ="";
  @Input() objeto?: any

  

  
  @Output() cerrar = new EventEmitter<boolean>;

  limpiarCheck(){
    
    this.cerrar.emit(false);

  }
  

  }


