import { AngularFireDatabase, QueryFn, ChildEvent, AngularFireList } from '@angular/fire/database';

import { FirebaseModel } from './firebase-model'
import { Subject, Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Collection } from '../api';

export class FirebaseCollection<T> extends Collection<T> {
	
	constructor(
		public entity: string,
		private db: AngularFireDatabase
	) {
		super();
	}

	get entityName() { return this.entity; }

	private collection(queryFn?: QueryFn): AngularFireList<T> {
		return this.db.list<T>(this.entity, queryFn);
	}

	list(queryFn?: QueryFn): Observable<T[]> {
		return this.collection(queryFn)
			.snapshotChanges()
			.pipe(
				map(actions =>
					actions.map(a => ({ key: a.key, ...a.payload.val() as any })),
					catchError(this.handleError('list'))
				)
			);
	}

	handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			return of(result as T);
		};
	}

	get(key: string): Observable<T> {
		const subject = new Subject<T>();

		this.db.object<T>(`${this.entity}/${key}`)
			.valueChanges()
			.subscribe((model) => {
				model['key'] = key;
				subject.next(model);
				subject.complete();
			});

		return subject.asObservable();
	}

	public async save(model: T): Promise<string> {

		let data = FirebaseModel.toJSON(model);

		if (!data.key) {
			let key = await this.collection().push(data).key;
			return Promise.resolve(key);
		} else {
			await this.collection().update(`${data.key}`, data);
			return Promise.resolve(data.key);
		}
	}

	async delete(key: string): Promise<void> {
		await this.collection().remove(key);
	}

	public update(updates?: { [key: string]: any }): Promise<any> {
		return this.db.database.ref().update(updates);
	}
}
