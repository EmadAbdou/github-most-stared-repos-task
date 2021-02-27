import { ReposService } from './../../../../Core/Services/repos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { Subscription } from 'rxjs';
import { RepoItem } from 'src/app/Core/Interfaces/repo-item';
import { ReposResult } from 'src/app/Core/Interfaces/repos-result';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  priorMonthDate =  new Date(new Date().setDate(new Date().getDate() - 30));
  pageNumber = 1;
  reposData: RepoItem[] = [];
  reposSub: Subscription;
  showError = false;
  constructor(
    private titleService: Title,
    private reposService: ReposService
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Trending Repos');
    this.fetchRepos();
  }

  fetchRepos() {
    const apiFormatDate = this.priorMonthDate.toISOString().replace(/T.*/,'').split('-').join('-');
    this.reposSub = this.reposService.fetchTopStaredRepos(apiFormatDate, this.pageNumber).subscribe((res: ReposResult) => {
      if(res) {
        this.reposData.push(...res['items']);
      } else {
        this.showError = true;
      }
    })
  }

  onScroll() {
    this.pageNumber++;
    this.fetchRepos();
  }

  ngOnDestroy() {
    if(this.reposSub) {
      this.reposSub.unsubscribe();
    }
  }

}
