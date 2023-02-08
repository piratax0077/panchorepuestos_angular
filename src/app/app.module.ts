import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductosComponent } from './shared/components/productos/productos.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './shared/components/login/login.component';
import { CarrouselComponent } from './layout/carrousel/carrousel.component';
import { AboutMeComponent } from './shared/components/about-me/about-me.component';
import { CommentsComponent } from './layout/comments/comments.component';
import { ProductoComponent } from './shared/components/producto/producto.component';
import { OffersComponent } from './layout/offers/offers.component';
import { BuscadorComponent } from './layout/buscador/buscador.component';
import { MarcasComponent } from './shared/components/marcas/marcas.component';
import { ModelosMarcaComponent } from './shared/components/modelos-marca/modelos-marca.component'; // <-- import the module

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SkeletonComponent,
    HomeComponent,
    ProductosComponent,
    LoginComponent,
    CarrouselComponent,
    AboutMeComponent,
    CommentsComponent,
    ProductoComponent,
    OffersComponent,
    BuscadorComponent,
    MarcasComponent,
    ModelosMarcaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
