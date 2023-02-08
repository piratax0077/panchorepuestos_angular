import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { AboutMeComponent } from './shared/components/about-me/about-me.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { MarcasComponent } from './shared/components/marcas/marcas.component';
import { ModelosMarcaComponent } from './shared/components/modelos-marca/modelos-marca.component';
import { ProductoComponent } from './shared/components/producto/producto.component';
import { ProductosComponent } from './shared/components/productos/productos.component';

const routes: Routes = [
  {'path':'', component: SkeletonComponent,
  children:[
    {'path':'',component: HomeComponent},
    {'path':'repuestos', component: ProductosComponent},
    {'path':'repuesto/:id', component: ProductoComponent},
    {'path':'login', component: LoginComponent},
    {'path':'about-me', component: AboutMeComponent},
    {'path':'marcas',component: MarcasComponent},
    {'path':'modelos_marca/:id',component: ModelosMarcaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
