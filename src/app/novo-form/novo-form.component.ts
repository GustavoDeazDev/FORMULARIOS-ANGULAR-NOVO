import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CepServiceService } from '../shared/cep-service.service';




@Component({
  selector: 'app-novo-form',
  templateUrl: './novo-form.component.html',
  styleUrls: ['./novo-form.component.css']
})
export class NovoFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };

  onSubmit(formulario:any) {
    console.log(formulario);



    this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value))
      .subscribe(dados => {
        console.log(dados);
        formulario.form.reset();
      });
  }

  constructor(
    private http: HttpClient,
    private cepService: CepServiceService
  ) { }

  ngOnInit() {
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

  consultaCEP(cep:any, form:any) {
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
      .subscribe(dados => this.populaDadosForm(dados, form));
    }
  }

  populaDadosForm(dados:any, formulario:any) {

    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
          cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });


  }

  resetaDadosForm(formulario:any) {
    formulario.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}


