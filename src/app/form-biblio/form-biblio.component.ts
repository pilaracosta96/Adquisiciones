import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-form-biblio',
  templateUrl: './form-biblio.component.html',
  styleUrl: './form-biblio.component.css'
})
export class FormBiblioComponent {
  
  
  formularioBiblio: FormGroup;
  private ruta = inject(Router);
  private _apiService = inject(ApiService);


  constructor( private form: FormBuilder){
    this.formularioBiblio = this.form.group({
      titulo: ['', Validators.required],
      nombre_autor: ['', Validators.required],
      apellido_autor: ['', Validators.required],
      isbn: ['', [Validators.required, Validators.minLength(1),Validators.maxLength(13)]],
      issn: ['', Validators.required],
      editorial: ['', Validators.required],
      anio_publicacion: ['', Validators.required],
      tipo_material: ['', Validators.required],
      monto: ['', Validators.required],

    });
  }
 
  enviar(){
   
    this._apiService.postGuardarBibliografia(JSON.stringify(this.formularioBiblio.value)).subscribe(response => {
      
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

  hasErrors(controlName:string , tipoError: string) {
    return this.formularioBiblio.get(controlName)?.hasError(tipoError) && this.formularioBiblio.get(controlName)?.touched;
  }

  limpiar(){
    this.formularioBiblio.reset();
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
        
      } else if (result.isDenied) {
        this.ruta.navigate(['/bibliografias'])
      }
    });
  }
}
