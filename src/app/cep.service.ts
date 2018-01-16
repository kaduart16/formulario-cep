import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import 'rxjs/add/operator/toPromise';
import { Cep } from './cep';
import { error } from 'util';

@Injectable()
export class CepService {

  constructor( private http: Http) { }

  private cep: CepService [];
  buscar( cep: string) {
     this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
        .toPromise()
        .then(response => {
          console.log(response);
        });
      }

}
