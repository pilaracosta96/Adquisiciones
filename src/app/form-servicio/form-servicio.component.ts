import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-servicio',
  templateUrl: './form-servicio.component.html',
  styleUrl: './form-servicio.component.css'
})
export class FormServicioComponent {
  
  
  
  formularioServicio: FormGroup;
  private ruta = inject(Router);
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
  }

  hasErrors(controlName:string) {
    return this.formularioServicio.get(controlName)?.hasError('required') && this.formularioServicio.get(controlName)?.touched;
  }
   
  limpiar(){
    this.formularioServicio.reset();
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
        this.ruta.navigate(['/servicios'])
      }
    });
  }
}
