import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Business, Category } from '../models';
import { Repository, Collection } from './api';
import { FirebaseDatabase } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { Advertisement } from '../models/business.model';

@Injectable({
	providedIn: 'root'
})
export class BusinessService {
	
	business: Collection<Business>;

	constructor(
		private repository: Repository
	) { 
		this.business = this.repository.get<Business>('business');
	}

	getAdvertisements(): Observable<Advertisement[]> {
		return this.repository.get<Advertisement>('advertisements').list();
	}

	getNews(): Observable<Business[]> {
		return this.business.list(ref => ref.orderByChild('createdAt').limitToLast(30));
	}

	getBusiness(key: string): Observable<Business> {
		return this.business.get(key);
	}
}
