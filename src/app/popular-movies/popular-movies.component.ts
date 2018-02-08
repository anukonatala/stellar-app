import {Component} from '@angular/core';
import {MovieService} from './movies.service';
import {PopularMovie} from './movie-model';


@Component({
    moduleId: module.id.toString(),
    templateUrl: 'popular-movies.component.html',
    styleUrls: ['popular-movies.component.scss'],
})

export class PopularMoviesComponent {
  errorMessage: string;
  moviesList: PopularMovie[];
  showButton: boolean = false;
  title: string = 'Movie: ';
  isOpen: boolean;
  constructor(private _movieService: MovieService){
  }

  ngOnInit(): void {
        this._movieService.getPopularMoviesList()
            .subscribe(
            movies => {this.moviesList = movies.results;
            },
            error => this.errorMessage = <any>error);
    }

    onSelectedMovie(index){
      this.title = 'Movie: ' + this.moviesList[index].title;
      this.isOpen = false;
      this.showButton=true
    }

    onClickClear(){
      this.title = "Movie:";
      this.showButton = !this.showButton;
    }
}
