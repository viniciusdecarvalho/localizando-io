import { Component, OnInit, Input } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';
import { Advertisement } from 'src/app/models/business.model';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Store } from 'src/app/services/api';

@Component({
  selector: 'app-advertisements',
  templateUrl: 'advertisements.page.html',
  styleUrls: ['advertisements.page.scss']
})
export class AdvertisementPage implements OnInit {

  ads: Observable<Advertisement[]>;

  constructor(
    private businessService: BusinessService,
    private store: Store
  ) {}

  ngOnInit() {
    this.ads = this.businessService.getAdvertisements().pipe(
      map(business => {
        business.forEach(b => this.store.downloadPath(b.pictures.main).subscribe(r => b.pictures.main = r))
        return business;
      }
      )
    );
  }

  openAd(ad: any) {
    console.log(`open ad: ${ad}`);
  }
}
