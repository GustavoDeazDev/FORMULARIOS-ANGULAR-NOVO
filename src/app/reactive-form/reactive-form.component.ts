import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../shared/rest-api.service';

import { FormBuilder, Validators } from "@angular/forms";
import { DropdownServiceService } from '../dropdown-service.service';
import { EstadoBr } from '../shared/models/estado-br';



@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  contatos!: Array<any>;

  formdata: any;


  estados!: EstadoBr[];


  constructor(private service: RestApiService,
     private formBuilder: FormBuilder,
     private dropdownService: DropdownServiceService,

    private http: HttpClient ) { }

  ngOnInit(): void {

    this.dropdownService.getEstadosBr()
    .subscribe(dados => this.estados = dados);

   this.configurarFormulario();


   this.service.listar()
   .subscribe(resposta => this.contatos = resposta);
 }






 verificaValidTouched(campo:any){
  return !this.formdata.get(campo).valid && this.formdata.get(campo).touched
  }






 configurarFormulario(){
  this.formdata = this.formBuilder.group({
    nome: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    cep: [null, Validators.required],

    numero: [null, Validators.required],

    logradouro: [null, Validators.required],
    bairro: [null, Validators.required],
    cidade: [null, Validators.required],
    estado: [null, Validators.required]

  });
}


    criar() {
      this.service.criar(this.formdata.value).subscribe(resposta => {
        this.contatos.push(resposta);

        this.formdata.reset();
      });
    }
  //   deletaRegistro() {

  //       if (window.confirm('Are you sure, you want to delete?')){
  //     this.service.deletaRegistro(this.formdata.value).subscribe(resposta => {
  //       this.service.listar();



  //     })
  //   }
  // }
  }













