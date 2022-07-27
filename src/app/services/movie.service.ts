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
  apiUrlForSearch = 'https://api.themoviedb.org/3/search/movie?api_key=';
  apiKey = yourApiKey;

  constructor(private httpClient:HttpClient) { }

  getMovies():Observable<ListResponseModel<Movie>>{
    let newPath = this.apiUrl + 'popular?api_key='+this.apiKey;
    return this.httpClient.get<ListResponseModel<Movie>>(newPath);
  }

  getMovieById(id:number):Observable<Movie>{
    let newPath = this.apiUrl + id + '?api_key='+this.apiKey;
    return this.httpClient.get<Movie>(newPath);
  }

 
}
