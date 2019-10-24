import { AngularFireDatabase, QueryFn, ChildEvent } from '@angular/fire/database';

import { Injectable, Type, Inject } from '@angular/core';
import { Repository, Collection } from '../api';
import { FirebaseCollection } from './firebase-collection';

@Injectable({
	providedIn: 'root'
})
export class FirebaseRepository extends Repository {

    private services: Collection<{}>[] = [];

    constructor(
        private database: AngularFireDatabase
    ) {
        super();
    }

    public get<T>(collectionName: string): Collection<T> {
        let service = this.services.find(s => s.entityName == collectionName);

        if (!service) {
            service = new FirebaseCollection<T>(collectionName, this.database);
            this.services.push(service);
        }
            
        return service as Collection<T>;
    }
}
