import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { NovocepserviceService } from '../novocepservice.service';

@Component({
  selector: 'app-teste-cep',
  templateUrl: './teste-cep.component.html',
  styleUrls: ['./teste-cep.component.css']
})
export class TesteCepComponent implements OnInit {

  constructor(private novocepservice: NovocepserviceService,
    private http: HttpClient ) { }

  onSubmit(formulario:any) {
    console.log(formulario);



    this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value))
      .subscribe(dados => {
        console.log(dados);
        formulario.form.reset();
      });
  }



  verificaValidTouched(campo : any) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo : any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  consultaNovoCep(valor:any, form:any){
    this.novocepservice.buscar(valor).subscribe((dados)=> this.populaForm(dados,form));


  }
  populaForm(dados:any,form:any){
    form.setValue({
      endereco: {
        rua: dados.logradouro,
          cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }

    })
  }

  ngOnInit(): void {

  }

}
