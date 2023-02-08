import { Component } from '@angular/core';
import { PanchorepuestosService } from 'src/app/services/panchorepuestos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  familias: any[] = [];
  modelos: any[] = [];
  marcas:any[] = [];
  anios:any;
  loading = true;
  constructor(private repuestosService: PanchorepuestosService) { }


  ngOnInit(): void {
    this.getRepuestos();

  }

  getRepuestos(): void {
    //this.repuestos = this.repuestosService.getRepuestos();
    this.repuestosService.getMarcas()
      .subscribe(m => {
        this.marcas = m;
        this.loading = false;
      });
  }

  onChange(event:any) {
    console.log(event.target.value);
    this.repuestosService.id = event.target.value;
    this.repuestosService.getModelos()
      .subscribe(m => {
        console.log(m.modelonombre);
        this.modelos = m;
        this.loading = false;
      });
  }

  onChangeModelo(event:any){
    this.repuestosService.idModelo = event.target.value;
    this.repuestosService.getAnios()
      .subscribe(m => {
        
        this.anios = m.anios_vehiculo;
        this.loading = false;
        console.log(this.anios);
      });
  }
}
