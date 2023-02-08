import { Component } from '@angular/core';
import { PanchorepuestosService } from 'src/app/services/panchorepuestos.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent {

  marcas: any[] = [];
  loading: boolean = true;

  constructor(private prService: PanchorepuestosService){

  }

  ngOnInit(){
    this.getMarcas();
  }

  getMarcas(){
    this.prService.getMarcas().subscribe(marcas => {
      this.marcas = marcas;
      this.loading = false;
    });
  }
}
