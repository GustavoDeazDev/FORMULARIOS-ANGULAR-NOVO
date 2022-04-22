import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../shared/rest-api.service';

import {  FormGroup, FormBuilder, Validators } from "@angular/forms";



@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  contatos!: Array<any>;

  formdata: any;
  email:any;
  nome:any;
  cep:any;


  constructor(private service: RestApiService,
     private formBuilder: FormBuilder,
    private http: HttpClient ) { }

  ngOnInit(): void {

   this.configurarFormulario();


   this.service.listar()
   .subscribe(resposta => this.contatos = resposta);
 }



 onSubmit(formdata:any) {

  this.http.post('https://httpbin.org/post', JSON.stringify(formdata.value))
    .subscribe(dados => {
      console.log(dados);
      formdata.form.reset();
    });
}


 verificaValidTouched(campo:any){
  return !this.formdata.get(campo).valid && this.formdata.get(campo).touched
  }






 configurarFormulario(){
  this.formdata = this.formBuilder.group({
    nome: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    cep: [null, Validators.required]
  });
}


    criar() {
      this.service.criar(this.formdata.value).subscribe(resposta => {
        this.contatos.push(resposta);

        this.formdata.reset();
      });
    }
  }













