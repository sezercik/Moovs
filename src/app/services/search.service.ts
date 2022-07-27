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
  apiKey = yourApiKey;
  constructor(private httpClient: HttpClient) {}


  getMovieByName(name: string,page:number): Observable<ListResponseModel<Movie>> {
    let newPath = this.apiUrlForSearch + this.apiKey + '&query=' + name + '&page=' + page;
    return this.httpClient.get<ListResponseModel<Movie>>(newPath);
  }

}
