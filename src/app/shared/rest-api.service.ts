import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'http://localhost:3000/form-data';

  constructor(private http: HttpClient) { }


  listar() {
    return this.http.get<Array<any>>(this.apiURL);
  }

  criar(forms: any) {
    return this.http.post(this.apiURL,forms);
  }

  deletaRegistro(forms:any){
    return this.http.delete(this.apiURL,forms
   );

    }






}
