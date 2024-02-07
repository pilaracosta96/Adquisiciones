import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IBibliografia } from '../../models/bibliografia.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-bibliografia',
  templateUrl: './bibliografia.component.html',
  styleUrl: './bibliografia.component.css'
})
export class BibliografiaComponent  implements OnInit{
  
  bibliografias: IBibliografia[] =[]
  
  private _apiService = inject(ApiService);

  
  nombre: string ="Bibliografía"
  private _router = inject(Router)
  item: any;
  si?: boolean;
 
  
  ngOnInit(): void {
    this._apiService.getBibliografias().subscribe((data:IBibliografia[]) =>{
      this.bibliografias = data;
      
    })
  }
  
  seleccion(item: any){
    this.item = item;
    
  }
  
  cerrar(){
    this.si=false;
  }

  
 
}
