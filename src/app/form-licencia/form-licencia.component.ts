import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-licencia',
  templateUrl: './form-licencia.component.html',
  styleUrl: './form-licencia.component.css'
})
export class FormLicenciaComponent {
  formularioLicencia: FormGroup;
  private ruta = inject (Router);
  private _apiService = inject(ApiService);
  anios: any[] = [];


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
    this.generarAnios();
  }

  generarAnios() {
    const anioActual = new Date().getFullYear();
    for (let i = anioActual; i >= 1900; i--) {
      this.anios.push(i);
    }
  }
 
  enviar(){
   
    this._apiService.postGuardarLicencia(JSON.stringify(this.formularioLicencia.value)).subscribe(response => {
      Swal.fire({
        title: "Guardado!",
        text: response.mensaje,
        icon: "success"
      });
      this.limpiar();
  },
  error => {
    Swal.fire({
      icon: "error",
      title: "Error al enviar datos"+ error.mensaje,
      text: "Algo salió mal",
      footer: '<a >Verifique los campos por favor</a>'
    });
  }
  );

  console.log(this.formularioLicencia.value);
  }

  hasErrors(controlName:string , typeError: string) {
    return this.formularioLicencia.get(controlName)?.hasError(typeError) && this.formularioLicencia.get(controlName)?.touched;
  }

  limpiar(){
    this.formularioLicencia.reset();
  }

  cancelar(){
    Swal.fire({
      title: "Desea abandonar la página?, se perderán los cambios",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `No guardar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.enviar();
      } else if (result.isDenied) {
        this.ruta.navigate(['/licencias'])
      }
    });
  }

}
