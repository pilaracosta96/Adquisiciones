import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-infra',
  templateUrl: './form-infra.component.html',
  styleUrl: './form-infra.component.css'
})
export class FormInfraComponent {


  
  formularioInfra: FormGroup;

  private _apiService = inject(ApiService);

  constructor( private form: FormBuilder){
    this.formularioInfra = this.form.group({
      tipo_equipo: ['', Validators.required],
      fecha_incorporacion: ['', Validators.required],
      descripcion: ['', Validators.required],
      numero_serie: ['', Validators.required],
      monto: ['', Validators.required],
      cantidad: ['', Validators.required],
      precio_unitario: ['', Validators.required]
    })
  }
  
  


  enviar(){
   
    this._apiService.postGuardarEquipo(JSON.stringify(this.formularioInfra.value)).subscribe(response => {
      alert('Respuesta del backend:'+ JSON.stringify(response) );
  },
  error => {
      console.error('Error al enviar datos:', error);
  }
  );
  this.limpiar();
  }

  hasErrors(controlName:string) {
    return this.formularioInfra.get(controlName)?.hasError('required') && this.formularioInfra.get(controlName)?.touched;
  }

  limpiar(){
    this.formularioInfra.reset();
  }

}

