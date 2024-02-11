import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-form-servicio',
  templateUrl: './form-servicio.component.html',
  styleUrl: './form-servicio.component.css'
})
export class FormServicioComponent {
  
  
  
  formularioServicio: FormGroup;
  
  private _apiService = inject(ApiService);


  constructor( private form: FormBuilder){
    this.formularioServicio = this.form.group({
      fecha: ['', Validators.required],
      monto: ['', Validators.required],
      tipo_servicio: ['', Validators.required]
    });
  }
 
  enviar(){
   
    this._apiService.postGuardarServicio(JSON.stringify(this.formularioServicio.value)).subscribe(response => {
      alert('Respuesta del backend:'+ JSON.stringify(response) );
  },
  error => {
      console.error('Error al enviar datos:', error);
  }
  );
  this.limpiar();
  }

  hasErrors(controlName:string) {
    return this.formularioServicio.get(controlName)?.hasError('required') && this.formularioServicio.get(controlName)?.touched;
  }
   
  limpiar(){
    this.formularioServicio.reset();
  }
}
