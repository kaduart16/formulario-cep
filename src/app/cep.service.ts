import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import 'rxjs/add/operator/toPromise';
import { Cep } from './cep';


@Injectable()
export class CepService {

  constructor( private http: Http) { }

  private cep: CepService [];
  buscar( cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
        .toPromise()
        .then(response => this.converterRespostaParaCep(response.json()));
      }
      private converterRespostaParaCep(cepNaResposta): Cep {
       const cep = new Cep();
        cep.cep = cepNaResposta.cep;
        cep.logradouro = cepNaResposta.logradouro;
        cep.complemento = cepNaResposta.complemento;
        cep.bairro = cepNaResposta.bairro;
        cep.cidade = cepNaResposta.localidade;
        cep.estado = cepNaResposta.uf;
        return cep;
      }

}
