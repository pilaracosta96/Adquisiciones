import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-form-licencia',
  templateUrl: './form-licencia.component.html',
  styleUrl: './form-licencia.component.css'
})
export class FormLicenciaComponent {
  formularioLicencia: FormGroup;
  
  private _apiService = inject(ApiService);


  constructor( private form: FormBuilder){
    this.formularioLicencia = this.form.group({
      anio: ['', Validators.required],
      fecha_otorgamiento: ['', Validators.required],
      fecha_vencimiento: ['', Validators.required],
      monto: ['', Validators.required],
      nombre: ['', Validators.required],
      numero_release: ['', Validators.required],
      fabricante: ['', Validators.required],
      version: ['', Validators.required]

    });
  }
 
  enviar(){
   
    this._apiService.postGuardarLicencia(JSON.stringify(this.formularioLicencia.value)).subscribe(response => {
      alert('Respuesta del backend:'+ JSON.stringify(response) );
  },
  error => {
      console.error('Error al enviar datos:', error);
  }
  );
  this.limpiar();
  }

  hasErrors(controlName:string) {
    return this.formularioLicencia.get(controlName)?.hasError('required') && this.formularioLicencia.get(controlName)?.touched;
  }

  limpiar(){
    this.formularioLicencia.reset();
  }

}
