import { Component } from '@angular/core';
import { AuthGoogleService } from '../../services/auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(
    private authGoogleService: AuthGoogleService,
    private router: Router
  ) { }

  showData() {
    const data = JSON.stringify(this.authGoogleService.getProfile())

    console.log(data);
  }

  logOut() {
    this.authGoogleService.logout();
    this.router.navigate(['login']);
  }

}
