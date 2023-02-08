import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PanchorepuestosService {
  private ChuckUrl = "https://panchoserver.ddns.net/api/ruta_prueba"; // URL to web api
  private ofertaUrl = "https://panchoserver.ddns.net/api/dameofertas";
  private familiasUrl = "https://panchoserver.ddns.net/api/familias";
  private loginUrl = "https://panchoserver.ddns.net/api/login";
  private repuestosUrl = "https://panchoserver.ddns.net/api/repuestos";
  private userUrl = "https://panchoserver.ddns.net/api/get-user";

  private user$ = new Subject<any>();

  id: number = 0;
  idModelo: number = 0;
  idRepuesto: any;

  email: string = "";
  password: string = "";
  token: string = "";
  user: string = "";
  idMarca: number = 0;

  constructor(private http: HttpClient) {}

  public login(): Observable<any>{
    
    return this.http.post<any>(this.loginUrl,{
      email: this.email, 
      password: this.password
    });
  }

  public getRepuestos():Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(this.repuestosUrl,{headers});
  }

  public getMarcas(): Observable<any> {
    return this.http.get<any>(this.ChuckUrl);
  }

  public getOfertas(): Observable<any>{
    return this.http.get<any>(this.ofertaUrl);
  }

  public getFamilias(): Observable<any>{
    return this.http.get<any>(this.familiasUrl);
  }

  public getModelos(): Observable<any>{
    let url = 'https://panchoserver.ddns.net/api/'+this.id+'/damemodelos';
    return this.http.get<any>(url);
  }

  public getAnios(): Observable<any>{
    let url = "https://panchoserver.ddns.net/api/"+this.idModelo+"/dameaniosvehiculo";
    return this.http.get<any>(url);
  }

  public getUser(): Observable<any>{
    
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
   
    return this.http.post<any>(this.userUrl,{},{headers});
  }

  public setUser(user: string){
    this.user = user;
    this.user$.next(this.user);
    
  }

  public getRepuesto():Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    let repuestoUrl = 'https://panchoserver.ddns.net/api/'+this.idRepuesto+'/repuesto';
    return this.http.get(repuestoUrl,{headers});
  }

  public getModelosMarca():Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    let url = "https://panchoserver.ddns.net/api/damemodelos_por_marca/"+this.idMarca;
    return this.http.get(url,{headers});
  }

}
