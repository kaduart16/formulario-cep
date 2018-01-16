import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscaCepComponent } from './busca-cep.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BuscaCepComponent
  ],
  exports: [ BuscaCepComponent
  ]
})
export class BuscaCepModule { }
