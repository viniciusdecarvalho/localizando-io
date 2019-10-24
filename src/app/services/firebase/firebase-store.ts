import { AngularFireStorage } from '@angular/fire/storage';

import { Injectable } from '@angular/core';
import { Store } from '../api';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FirebaseStore implements Store {

    constructor(
        private store: AngularFireStorage
    ) {
    }

    downloadPath(path: string): Observable<string> {
        return this.store.ref(path).getDownloadURL();
    }
}
