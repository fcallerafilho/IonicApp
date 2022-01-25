import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { MoovieService } from '../moovie.service';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss'],
  providers: [
    MoovieService
  ]
})

export class FeedPage {

  private object_feed = {
    name: "Fernando",
    date: "Yesterday",
    description: "Got my Polo checked yesterday thanks to a CarCare App advice, now ready to hit the gas!!!",
    qty_likes: 12,
    qty_comments: 4,
    time_comment: "11h ago"
  }

  public lista_filmes = new Array<any>();

  constructor(private moovieService: MoovieService, private menu: MenuController, private navController: NavController) { 
    this.ionViewDidLoad()
   }

  ionViewDidLoad() {
    this.moovieService.getLatestMovies().subscribe(
      data =>{

        const response = data as any;
        this.lista_filmes = response.results;

        console.log(data);
      },
      error =>{
        console.log(error);
      }
    )
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  goToConfiguracoesPage(){
    this.navController.navigateForward('configuracoes')
  }

  goToPerfilPage(){
    this.navController.navigateForward('perfil')
  }

  goToSobrePage(){
    this.navController.navigateForward('sobre')
  }
}
