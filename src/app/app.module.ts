import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BuscaCepModule } from './busca-cep/busca-cep.module';
import { CepService } from './cep.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    [ FormsModule ],
    BuscaCepModule,
    HttpModule
  ],
  providers: [CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
