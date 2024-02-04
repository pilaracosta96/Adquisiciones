import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IBibliografia } from '../models/bibliografia.model';
import { IServicio } from '../models/servicio.model';
import { ILicencia } from '../models/licencia.model';
import { IInfra } from '../models/infre.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  private _http = inject(HttpClient);
  private _urlBase: string ="http://localhost:8080/api";

  getBibliografias():Observable<IBibliografia[]>{
    return this._http.get<IBibliografia[]>(`${this._urlBase}/bibliografias/listar`);
  }
  getServicios():Observable<IServicio[]>{
    return this._http.get<IServicio[]>(`${this._urlBase}/servicio/listar`)
  }
  
  getLicencias():Observable<ILicencia[]>{
    return this._http.get<ILicencia[]>(`${this._urlBase}/licenciaSoftware/listar`)
  }
  getEquipos():Observable<IInfra[]>{
    return this._http.get<IInfra[]>(`${this._urlBase}/equipoInfraestructura/listar`)
  }
}
