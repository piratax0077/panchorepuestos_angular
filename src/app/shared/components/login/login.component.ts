import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PanchorepuestosService } from 'src/app/services/panchorepuestos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() setUser = new EventEmitter<string>();

  email: string = "";
  password: string = "";

  loggeado: boolean;

  loading: boolean;

  constructor(private repuestosService: PanchorepuestosService, private router: Router){
    this.loggeado = false;
    this.loading = true;
  }

  ngOnInit(){
    this.revisarEstado();
    console.log('iniciando componente');
  }

  revisarEstado(){
    let token = localStorage.getItem('token');
    if(token){
      this.loggeado = true;
      this.loading = false;
    }
  }
  login(){
    this.repuestosService.email = this.email;
    this.repuestosService.password = this.password;
    this.repuestosService.login().subscribe( resp => {
  
      localStorage.setItem('token', resp.token);
      this.repuestosService.setUser(resp.user.name)
    
      this.setUser.emit();
      this.router.navigate(['/repuestos']);
      
      
     
      
    });
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
