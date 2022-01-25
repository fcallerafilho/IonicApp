import { Injectable } from '@angular/core';

let config_key_name = "config";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  private config = {
    showSlide: false,
    name: 'Fernando',
    username: '',
  }

  //recupera dados do localstorage
  getConfigData(): any {
    return localStorage.getItem(config_key_name) || {};
  }

  //grava dados no localstorage
  setConfigData(showSlide?: boolean, name?: string, username?: string) {
    let config = {
      showSlide: false,
      name: 'Fernando',
      username: '',
    };

    if(showSlide){
      config.showSlide = showSlide;
    }

    if(name){
      config.name = name;
    }

    if(username){
      config.username = username;
    }

    localStorage.setItem(config_key_name, JSON.stringify(config));

  }

}
