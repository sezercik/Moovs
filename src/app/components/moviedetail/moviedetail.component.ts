import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie/movie.module';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MovieDetailComponent implements OnInit {
  id:number=0;
  movie!: Movie;
  imgSource:string = 'https://image.tmdb.org/t/p/w500';

  constructor(private movieService:MovieService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.getMovieById();
  }

  getMovieById(){
    let id =  +this.route.snapshot.params['id'];
    this.movieService.getMovieById(id).subscribe(response=>{      
      this.movie = response;
    })
  }

}
