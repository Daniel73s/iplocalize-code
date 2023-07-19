import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'  
})
export class IplService {
  private url: string = `https://api.ipdata.co`;
  constructor(private http: HttpClient) { }

  getIP(ip?: string) {
    if(ip){
      return this.http.get(`${this.url}/${ip}?api-key=${environment.API_KEY_IPDATA}`).toPromise();
    }else{
      return this.http.get(`${this.url}?api-key=${environment.API_KEY_IPDATA}`).toPromise();
    }
  }
}
