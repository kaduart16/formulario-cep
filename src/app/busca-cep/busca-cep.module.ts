import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscaCepComponent } from './busca-cep.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BuscaCepComponent
  ],
  exports: [ BuscaCepComponent
  ]
})
export class BuscaCepModule { }
