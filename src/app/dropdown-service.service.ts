import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadoBr } from './shared/models/estado-br';




@Injectable({
  providedIn: 'root'
})
export class DropdownServiceService {

  constructor(private http: HttpClient) { }

  getEstadosBr() {
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');
  }

}
