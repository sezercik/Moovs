import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/list-response-model/list-response-model.module';
import { Movie } from '../models/movie/movie.module';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  apiUrlForSearch = 'https://api.themoviedb.org/3/search/movie?api_key=';
  apiKey = 'f4702acda5b7fc72ffaec2ca2d781a28';
  constructor(private httpClient: HttpClient) {}


  getMovieByName(name: string,page:number): Observable<ListResponseModel<Movie>> {
    let newPath = this.apiUrlForSearch + this.apiKey + '&query=' + name + '&page=' + page;
    return this.httpClient.get<ListResponseModel<Movie>>(newPath);
  }

}
