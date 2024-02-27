import { Component } from '@angular/core';
import { AuthGoogleService } from './services/auth-google.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    private authGoogleService: AuthGoogleService,
    private router: Router
  ) { }
  
  title = 'Adquisiciones';

  logOut() {
    this.authGoogleService.logout();
    this.router.navigate(['login']);
  }


  

}
