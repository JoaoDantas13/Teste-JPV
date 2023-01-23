import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaGaleriaComponent } from './components/lista-galeria/lista-galeria.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

//PrimeNg
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [AppComponent, ListaGaleriaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GalleriaModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    ImageModule,
    ProgressSpinnerModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
