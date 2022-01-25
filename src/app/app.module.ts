import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroPageModule } from './intro/intro.module';
import { HttpClientModule } from "@angular/common/http"
import { ConfiguracoesPageModule } from './configuracoes/configuracoes.module';
import { SobrePageModule } from './sobre/sobre.module';
import { PerfilPageModule } from './perfil/perfil.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IntroPageModule, 
    HttpClientModule, ConfiguracoesPageModule, SobrePageModule, PerfilPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
