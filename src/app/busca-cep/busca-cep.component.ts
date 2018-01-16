import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';
import { Cep } from '../cep';

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.css']
})
export class BuscaCepComponent implements OnInit {

  cep = new Cep();
  constructor( private cepService: CepService) { }

  ngOnInit() {
  }

}
