import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';
import { Observable } from 'rxjs';
import { Business } from 'src/app/models';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  styleUrls: ['news.page.scss']
})
export class NewsPage implements OnInit {
  
  news: Observable<Business[]>;

  constructor(
    private businessService: BusinessService
  ) {}

  ngOnInit() {
    this.news = this.businessService.getNews().pipe(tap(console.log));
  }

}
