import { Component, Input, OnInit } from '@angular/core';
// import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  searchValue:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
