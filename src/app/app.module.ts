import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BibliografiasComponent } from './bibliografias/bibliografias.component';
import { BibliografiaComponent } from './bibliografia/bibliografia.component';

@NgModule({
  declarations: [
    AppComponent,
    BibliografiasComponent,
    BibliografiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
