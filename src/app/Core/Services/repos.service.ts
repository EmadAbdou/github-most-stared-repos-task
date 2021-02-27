import { ReposResult } from './../Interfaces/repos-result';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ReposService {
  endPointUrl = 'https://api.github.com/search/repositories?q=created:>';

  constructor(private http: HttpClient) { }

  fetchTopStaredRepos(priorMonthDate: String, pageNumber: number){
    return this.http.get<ReposResult>(`${this.endPointUrl}${priorMonthDate}&sort=stars&order=desc&page=${pageNumber}`);
  }
}
