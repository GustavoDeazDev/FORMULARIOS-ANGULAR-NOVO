import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConsultaCepService } from '../consulta-cep.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  usuario: any = {
    nome: null,
    email: null
  };

  onSubmit(formulario : any) {
    console.log(formulario);



    this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value))
      .subscribe(dados => {
        console.log(dados);
        formulario.form.reset();
      });
  }

  constructor(
    private http: HttpClient,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit() {
  }

  verificaValidTouched(campo:any) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo:any) {
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
    /*formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });*/

    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    // console.log(form);
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

