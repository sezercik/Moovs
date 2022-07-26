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
  imgSource:string = 'https://image.tmdb.org/t/p/w500';
  searchValue: string = '';
  movies: Movie[] = [];
  totalPages:number = 0;
  currentPage:number=0;


  constructor(
    private route: ActivatedRoute,
    private searhService: SearchService
  ) {}

  ngOnInit(): void {
    let value;
    this.route.queryParamMap.subscribe((params) => {
      value = params.get('search_value');
      if (value == undefined) {
        value = '';
      }
      this.searchValue = value;
      this.searhService.getMovieByName(value).subscribe((data) => {
        this.movies = data.results;
        this.totalPages = data.total_pages;
        this.currentPage = data.page;
        this.movies.forEach(movie => {
          if(movie.poster_path == null){
            movie.poster_path = '../../../assets/images/404.jpg';
          }else{
            movie.poster_path = this.imgSource + movie.poster_path;
          }
        });
        console.log(this.movies);
        console.log(data);

      });
    });
  }

}
