import { Component,EventEmitter,Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PanchorepuestosService } from 'src/app/services/panchorepuestos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  productId: string = "";
  repuesto: any;
  loading: boolean = true;
  fotos:any[] = [];
  similares:any[] = [];
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  p = 1;

  // Creamos la variable a enviar al padre
  @Output() mensaje: EventEmitter<string>;

  constructor(private route: ActivatedRoute, private prService: PanchorepuestosService, private router: Router) {
    this.mensaje = new EventEmitter();
  }

  


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      // Aquí puedes hacer una llamada a un servicio para obtener los detalles del producto usando this.productId
      this.getRepuesto(this.productId);
    });

  }

  getRepuesto(idRepuesto: any){
    let token = localStorage.getItem('token');
    if(token){
      this.prService.token = token;
      this.prService.idRepuesto = idRepuesto
      this.prService.getRepuesto().subscribe(rep => {
        if(rep.status == 'Token is Expired'){
          alert('DEBE INICIAR SESIÓN');
          this.router.navigate(['/']);
        }else{
          this.loading = false;
        
          this.repuesto = rep[0];
          this.fotos = rep[1];
          this.similares = rep[2];
        }
        
      });
    }else{
      alert('DEBE INICIAR SESIÓN');
      this.router.navigate(['/']);
    }
    
  }

  aumentar(){

  }

  disminuir(){}

  agregar_carrito(){
    console.log(this.repuesto);
    this.mensaje.emit('hola');
  }
  
}
