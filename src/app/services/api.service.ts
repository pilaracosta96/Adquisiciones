import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IBibliografia } from '../models/bibliografia.model';
import { IServicio } from '../models/servicio.model';
import { ILicencia } from '../models/licencia.model';
import { IInfra } from '../models/infra.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  private _http = inject(HttpClient);
  private _urlBase: string ="http://localhost:8080/api";


  // LISTAR
  getBibliografias():Observable<IBibliografia[]>{
    return this._http.get<IBibliografia[]>(`${this._urlBase}/bibliografias/listar`);
  }
  
  // getBibliografia(titulo:string):Observable<IBibliografia>{
  //   return this._http.get<IBibliografia>(`${this._urlBase}/bibliografias/titulo/:${titulo}`);
  // }
  

  getServicios():Observable<IServicio[]>{
    return this._http.get<IServicio[]>(`${this._urlBase}/servicio/listar`)
  }
  
  getLicencias():Observable<ILicencia[]>{
    return this._http.get<ILicencia[]>(`${this._urlBase}/licenciaSoftware/listar`)
  }
  getEquipos():Observable<IInfra[]>{
    return this._http.get<IInfra[]>(`${this._urlBase}/equipoInfraestructura/listar`)
  }

  // Guardar

  postGuardarBibliografia(data?: string): Observable<string> {
    const headers = { 'Content-Type': 'application/json' };
    return this._http.post<string>(this._urlBase+'/bibliografias/guardar', data, {headers})
    .pipe(
      catchError(this.handleHttpError)
    );
  }

  postGuardarLicencia(data?: string): Observable<string> {
    const headers = { 'Content-Type': 'application/json' };
    return this._http.post<string>(this._urlBase+'/licenciaSoftware/guardar', data, {headers})
    .pipe(
      catchError(this.handleHttpError)
    );
      
  }
  postGuardarServicio(data?: string): Observable<string> {
    const headers = { 'Content-Type': 'application/json' };
    return this._http.post<string>(this._urlBase+'/servicio/guardar', data, {headers})
    .pipe(
      catchError(this.handleHttpError)
    );
      
  }
  postGuardarEquipo(data?: string): Observable<string> {
    const headers = { 'Content-Type': 'application/json' };
    return this._http.post<string>(this._urlBase+'/equipoInfraestructura/guardar', data, {headers})
    .pipe(
      catchError(this.handleHttpError)
    );
      
  }

  // ELIMINAR
  delEliminarPorISBN(data: number): Observable<string> {
    const headers = { 'Content-Type': 'application/json' };
    return this._http.delete<string>(this._urlBase+'/bibliografias/eliminarPorISBN/'+ data, {headers})
    .pipe(
      catchError(this.handleHttpError)
    );
  }
  delEliminarLicenciaPorId(data: number): Observable<string> {
    const headers = { 'Content-Type': 'application/json' };
    return this._http.delete<string>(this._urlBase+'/licenciaSoftware/eliminarPorId/'+ data, {headers})
    .pipe(
      catchError(this.handleHttpError)
    );
  }
  delEliminarServicioPorId(data: number): Observable<string> {
    const headers = { 'Content-Type': 'application/json' };
    return this._http.delete<string>(this._urlBase+'/servicio/eliminarPorId/'+ data, {headers})
    .pipe(
      catchError(this.handleHttpError)
    );
  }
  delEliminarEquipoPorId(data: number): Observable<string> {
    const headers = { 'Content-Type': 'application/json' };
    return this._http.delete<string>(this._urlBase+'/equipoInfraestructura/eliminarPorId/'+ data, {headers})
    .pipe(
      catchError(this.handleHttpError)
    );
  }

  private handleHttpError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ocurrió un error en la solicitud HTTP';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error del lado del cliente: ${error.error.message}`;
    } else {
      // El backend retornó un código de estado fallido
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  } 

}
