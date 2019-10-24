import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FirebaseRepository } from './firebase-repository';
import { FirebaseStore } from './firebase-store';
import { Repository, Store } from '../api';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAIXsJIvduAGC7uLeDnJwfVXNa7bgkzKQA",
      authDomain: "localizandoapp.firebaseapp.com",
      databaseURL: "https://localizandoapp.firebaseio.com",
      projectId: "localizandoapp",
      storageBucket: "localizandoapp.appspot.com",
      messagingSenderId: "615774561111"
    })
  ],
  providers: [
    { provide: Repository, useClass: FirebaseRepository },
    { provide: Store, useClass: FirebaseStore },
  ]
})
export class FirebaseModule { }
