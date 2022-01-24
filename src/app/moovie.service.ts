import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class MoovieService {
  HttpClient: any;

  private baseApiPath = "https://api.themoviedb.org/3/movie/latest?api_key=df20b4345f4f137678ae57b8a6fb55b7";

  constructor(private http: HttpClient) { }

  getLatestMovies() {
    return this.http.get(this.baseApiPath);
  }
}
