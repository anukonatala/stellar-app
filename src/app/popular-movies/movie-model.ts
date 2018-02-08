export interface PopularMovie {
  vote_count: number;
  id:number;
  vote_average: number;
  title: string;
  poster_path:string;
  original_language: string;
  original_title: string;
  backdrop_path: string;
  overview: string;
  releaseDate: number;

}


export class Movie implements PopularMovie {
    vote_count: number;
    id:number;
    vote_average: number;
    title: string;
    poster_path:string;
    original_language: string;
    original_title: string;
    backdrop_path: string;
    overview: string;
    releaseDate: number;
}
