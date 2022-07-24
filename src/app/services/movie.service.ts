import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/list-response-model/list-response-model.module';
import { Movie } from '../models/movie/movie.module';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl = 'https://api.themoviedb.org/3/movie/'
  apiKey = 'f4702acda5b7fc72ffaec2ca2d781a28'

  constructor(private httpClient:HttpClient) { }

  getMovies():Observable<ListResponseModel<Movie>>{
    let newPath = this.apiUrl + 'popular?api_key='+this.apiKey;
    return this.httpClient.get<ListResponseModel<Movie>>(newPath);
  }

}
