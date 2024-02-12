import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';

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
      Swal.fire({
        title: "Guardado!",
        text: response.mensaje,
        icon: "success"
      });
  },
  error => {
      console.error('Error al enviar datos:', error);
  }
  );

  console.log(this.formularioLicencia.value);
  this.limpiar();
  }

  hasErrors(controlName:string) {
    return this.formularioLicencia.get(controlName)?.hasError('required') && this.formularioLicencia.get(controlName)?.touched;
  }

  limpiar(){
    this.formularioLicencia.reset();
  }

}
