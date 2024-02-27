import { Injectable, NgZone } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc'

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

  constructor(private oauthService: OAuthService,  private zone: NgZone) {
    this.initLogin();
  }

  initLogin() {
    this.zone.runOutsideAngular(() => {
      
      if (typeof window !== 'undefined') {
      const config: AuthConfig = {
        issuer: 'https://accounts.google.com',
        strictDiscoveryDocumentValidation: false,
        clientId: '225950019994-i06h4pbhg8g3kpp9535npg3k0e72qku1.apps.googleusercontent.com',
        redirectUri: window.location.origin + '/inicio',
        scope: 'openid profile email',
      };
      this.oauthService.configure(config);
      this.oauthService.setupAutomaticSilentRefresh();
      this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }
    });
  }

  login() {
    console.log('Initiating login flow...');
    this.oauthService.initLoginFlow();
  }

  logout() {
    console.log('Initiating login flow...');
    this.oauthService.logOut();
  }

  getProfile() {
    return this.oauthService.getIdentityClaims();
  }
  isAuthenticated(): boolean {
    console.log(this.oauthService.hasValidAccessToken());
    // Implementa la lógica para verificar la autenticación, por ejemplo, verificando si el token está presente
    return this.oauthService.hasValidAccessToken();
  }

}