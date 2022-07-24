import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie/movie.module';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies:Movie[] = [];
  imgSource:string = 'https://image.tmdb.org/t/p/w500';
  dataLoaded = false;
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }
  
  getMovies(){
    this.movieService.getMovies().subscribe(response=>{
      this.movies = response.results;
      this.dataLoaded = true;
      console.log(this.movies);
    })
  }
  sliderConfig = {
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
    infinite: true
  };
}
