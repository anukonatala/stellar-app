import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movies.service';

describe('MovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });
  });


  it('should ...', async(inject([MovieService],  (httpClient: HttpTestingController, MovieService: MovieService) =>  {
    expect(MovieService).toBeTruthy();
  })));
});
