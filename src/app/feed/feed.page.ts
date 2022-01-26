import { MenuController, NavController } from '@ionic/angular';
import { MoovieService } from '../moovie.service';
import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';


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
  public page = 1;

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

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}

export class InfiniteScrollExample {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() {}

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}

