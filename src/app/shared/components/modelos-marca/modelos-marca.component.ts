import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PanchorepuestosService } from 'src/app/services/panchorepuestos.service';

@Component({
  selector: 'app-modelos-marca',
  templateUrl: './modelos-marca.component.html',
  styleUrls: ['./modelos-marca.component.css']
})
export class ModelosMarcaComponent {
  marcaId: any;
  modelos:any[] = [];
  loading: boolean = true;
  constructor(private route: ActivatedRoute, private router: Router, private prService: PanchorepuestosService){

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.marcaId = params['id'];
      // Aquí puedes hacer una llamada a un servicio para obtener los detalles del producto usando this.productId
      this.getModelos(this.marcaId);
    });

  }

  getModelos(marcaId: any){
    let token = localStorage.getItem('token');
    if(token){
      this.prService.token = token;
      this.prService.idMarca = marcaId;
      this.prService.getModelosMarca().subscribe(modelos  => {
        console.log(modelos);
        this.modelos = modelos[0];
        this.loading = false;
      })
    }else{
      alert('DEBE INICIAR SESIÓN');
      this.router.navigate(['/']);
    }
    
  }
}
