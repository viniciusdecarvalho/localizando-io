import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvertisementPage } from './advertisements.page';

describe('AdvertisementPage', () => {
  let component: AdvertisementPage;
  let fixture: ComponentFixture<AdvertisementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisementPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvertisementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
