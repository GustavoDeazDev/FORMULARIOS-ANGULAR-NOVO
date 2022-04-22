import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { HttpClientModule } from '@angular/common/http';

import { RestApiService } from './shared/rest-api.service';
import { CepServiceService } from './shared/cep-service.service';
import { NovoFormComponent } from './novo-form/novo-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TesteCepComponent } from './teste-cep/teste-cep.component';
import { NovocepserviceService } from './novocepservice.service';

@NgModule({
  declarations: [
    AppComponent,

    FormDebugComponent,
    CampoControlErroComponent,

    NovoFormComponent,
    ReactiveFormComponent,
    TesteCepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [ RestApiService, CepServiceService , NovocepserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
