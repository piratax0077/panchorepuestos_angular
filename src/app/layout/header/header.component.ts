import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PanchorepuestosService } from 'src/app/services/panchorepuestos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  email: string = "";
  password: string = "";
  loggeado: boolean;
  loading: boolean;
  user: any;
  token: string = "";
  constructor(private repuestosService: PanchorepuestosService, private router: Router){
    this.loggeado = false;
    this.loading = true;
    this.getUser();
  }

  ngOnInit(){
    
  }

  getUser(){
    let token = localStorage.getItem('token');
   
    if(token){
      this.token = token;
      this.repuestosService.token = token;
      this.repuestosService.getUser().subscribe(user => {
        if(typeof user.user === 'undefined'){
         console.log(user);
        }else{
          this.loggeado = true;
          this.user = user.user;
        }
        
      });
    }
  }

  login(){
    
    
    this.repuestosService.email = this.email;
    this.repuestosService.password = this.password;
    this.repuestosService.login().subscribe( resp => {
      
      localStorage.setItem('token', resp.token);
      this.user = resp.user;
      this.loggeado = true;    
      
    });
  }

  logout(){
    localStorage.removeItem('token');
    this.user = "";
    this.loggeado = false;
    this.router.navigate(['/']);
  }
}
