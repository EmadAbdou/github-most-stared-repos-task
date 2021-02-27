import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { RepoCardComponent } from './Components/repo-card/repo-card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReposService } from 'src/app/Core/Services/repos.service';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [
  HomePageComponent,
  RepoCardComponent
],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    RouterModule.forChild(routes)
  ],
  providers: [ReposService],
  bootstrap: []
})
export class HomeModule { }
