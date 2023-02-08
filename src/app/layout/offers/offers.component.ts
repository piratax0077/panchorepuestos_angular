import { Component } from '@angular/core';
import { PanchorepuestosService } from 'src/app/services/panchorepuestos.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {

  loading: boolean = true;
  ofertas: any[] = [];
 
  constructor(private repuestosService: PanchorepuestosService) {}

  ngOnInit(): void {
    this.getOfertas();
  }

  getOfertas(): void {
    //this.repuestos = this.repuestosService.getRepuestos();
    this.repuestosService.getOfertas()
      .subscribe(o => {
        this.ofertas = o;
        this.loading = false;
      })
  }
}
