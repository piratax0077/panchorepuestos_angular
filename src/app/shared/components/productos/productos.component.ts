import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PanchorepuestosService } from 'src/app/services/panchorepuestos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  constructor(private repuestosService: PanchorepuestosService, private router: Router ){ }

  repuestos:any[] = [];
  repuesto: any;
  fotos_repuesto:any[] = [];
  mostrar_repuesto: boolean = false;
  loading: boolean = true;
  loading_modal: boolean = true;
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  p = 1;
  ngOnInit(): void {
    this.getRepuestos();
    
  }

  getRepuestos(): void {
    //this.repuestos = this.repuestosService.getRepuestos();
    let token = localStorage.getItem('token');
  
    if(token){
      this.repuestosService.token = token;
      this.repuestosService.getRepuestos()
        .subscribe(m => {
        
            if(m.status == "Token is Expired"){
              alert('Debe registrarse o volver a ingresar');
              this.router.navigate(['/login']);
            }else{
              this.repuestos = m[0];
              this.loading = false;
            
            }
            
          
          
        });
    }else{
      alert('Debe registrarse o volver a ingresar');
      this.router.navigate(['/']);
    }


    
  }

  ordenar(){

  }

  filtrar_rango_precio(){

  }

  vista_rapida(idrep: any){
    let token = localStorage.getItem('token');
    if(token){
      this.repuestosService.idRepuesto = idrep;
      this.repuestosService.token = token;
      this.repuestosService.getRepuesto().subscribe(rep => {
       
        this.repuesto = rep[0];
        this.fotos_repuesto = rep[1];
        this.mostrar_repuesto = true;
        this.loading_modal = false;
      });
    }
    
  }

 
}
