import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthGoogleService } from './auth-google.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGoogleGuard implements CanActivate {
  constructor(private authGoogleService: AuthGoogleService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authGoogleService.isAuthenticated()) {
      return true;
    } else {
      // Redirige al usuario a la página de inicio de sesión si no está autenticado
      this.router.navigate(['/login']); // Ajusta la ruta de redirección según tus necesidades
      return false;
    }
  }
}
