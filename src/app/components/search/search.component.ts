import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie/movie.module';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  //movie
  imgSource: string = 'https://image.tmdb.org/t/p/w500';
  searchValue: string = '';
  movies: Movie[] = [];
  i = 0;

  //pagination
  count: number = 0;
  maxCount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private searhService: SearchService,
  ) {}

  ngOnInit(): void {
    this.getSearchedMovies();
  }

  getSearchedMovies() {
    let value;
    let count;
    this.route.queryParamMap.subscribe((params) => {
      console.log(params);
      value = params.get('search_value');
      // @ts-ignore: Object is possibly 'null'.
      count = +params.get('page');
      if (value == undefined) {
        value = '';
      }
      this.searchValue = value;
      this.count = count;
      this.searhService.getMovieByName(value, count).subscribe((data) => {
        this.movies = data.results;
        this.maxCount = data.total_pages;
        this.movies.forEach((movie) => {
          if (movie.poster_path == null) {
            movie.poster_path = '../../../assets/images/404.jpg';
          } else {
            movie.poster_path = this.imgSource + movie.poster_path;
          }
        });

      });
    });
    this.i += 1;
  }

  onNewMovies(event: any) {
    window.history.replaceState({}, '',`/search?search_value=${this.searchValue}&page=${event}`);
    this.i += 1;
    this.searhService
      .getMovieByName(this.searchValue, event)
      .subscribe((data) => {
        this.count = event;
        this.movies = data.results;
        this.movies.forEach((movie) => {
          if (movie.poster_path == null) {
            movie.poster_path = '../../../assets/images/404.jpg';
          } else {
            movie.poster_path = this.imgSource + movie.poster_path;
          }
        });
      });
  }
}
