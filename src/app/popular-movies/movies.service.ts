import { Injectable } from '@angular/core';
import { PopularMovie } from './movie-model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class MovieService {
  private _movieUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=1381ea180d3e2f4067614de6c3588888&language=en-US&page=1';

  constructor(private _http: HttpClient) { }

  getPopularMoviesList(): Observable<any> {
    return this._http.get(this._movieUrl).map((result: Response) => result)
      .catch(this.getError);
  }
  private getError(error: Response): Observable<any> {
    console.log(error);
    return Observable.throw(error.json() || 'Server Issue');
  }



}
