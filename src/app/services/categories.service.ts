import { Injectable } from '@angular/core';
import { Repository } from './api';
import { Observable } from 'rxjs';
import { Category } from '../models';
import { map } from 'rxjs/operators';

class DefaultCategory 
implements Category {
  constructor(val) {
    Object.keys(val).forEach(key => {
      this[key] = val[key]
    });
  }
  key: string;
  createdAt: number;
  lastUpdate: number;
  name: string;  pictures: { icon: string; };
  ads: [{ key: string; val: boolean; }];
  numberOfAds(): number {
    return Object.keys(this.ads).length;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private repository: Repository
  ) { 

  }

  getCategories(): Observable<Category[]> {
    return this.repository.get<Category>('categories')
                          .list(ref => ref.orderByChild('name'))
                          .pipe(map(categories => 
                            categories.map(c => new DefaultCategory(c))
                          ));
  }
}
