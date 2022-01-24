import { Component } from '@angular/core';
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

  constructor(private moovieService: MoovieService) { 
    this.ionViewDidLoad()
   }

  ionViewDidLoad() {
    this.moovieService.getLatestMovies().subscribe(
      data =>{
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    )
    
  }
}
