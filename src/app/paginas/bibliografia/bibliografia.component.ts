import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IBibliografia } from '../../models/bibliografia.model';


@Component({
  selector: 'app-bibliografia',
  templateUrl: './bibliografia.component.html',
  styleUrl: './bibliografia.component.css'
})
export class BibliografiaComponent  implements OnInit{
  
  bibliografias?: IBibliografia[]
  
  private _apiService = inject(ApiService);
  
  nombre="Bibliografía"
  
  
  ngOnInit(): void {
    this._apiService.getBibliografias().subscribe((data:IBibliografia[]) =>{
      this.bibliografias = data;
    })
  }
}
