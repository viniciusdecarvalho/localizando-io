import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models';

@Component({
  selector: 'app-categories',
  templateUrl: 'categories.page.html',
  styleUrls: ['categories.page.scss']
})
export class CategoriesPage implements OnInit {
  
  categories: Observable<Category[]>;

  constructor(
    private categoriasService: CategoriesService
  ) { }

  ngOnInit() {
    this.categories = this.categoriasService.getCategories().pipe(tap(console.log));
  }

}
