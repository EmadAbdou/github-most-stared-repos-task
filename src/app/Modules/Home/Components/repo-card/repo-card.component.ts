import { Component, Input, OnInit } from '@angular/core';
import { RepoItem } from 'src/app/Core/Interfaces/repo-item';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent implements OnInit {
  @Input() repoData: RepoItem;
  repoInterval: number;
  todayDate = new Date();
  repoDate: Date ;
  constructor() { }

  ngOnInit(): void {
    this.repoDate = new Date (this.repoData.created_at);
    this.calculateRepoInterval();
  }

  calculateRepoInterval() {
    let time_difference = this.todayDate.getTime() - this.repoDate.getTime();
    this.repoInterval = Math.ceil(time_difference / (1000 * 60 * 60 * 24));
  }

}
