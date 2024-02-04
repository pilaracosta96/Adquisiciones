import { Component, OnInit, inject } from '@angular/core';
import { ILicencia } from '../../models/licencia.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-licencias',
  templateUrl: './licencias.component.html',
  styleUrl: './licencias.component.css'
})
export class LicenciasComponent implements OnInit{
  licencias?: ILicencia[];
  private _apiService = inject(ApiService);
  nombre="Licencias de Software"
  
  ngOnInit(): void {
    this._apiService.getLicencias().subscribe((data:ILicencia[]) => {
      this.licencias = data;
    })
  }


  
  
  

}
