import { Observable } from 'rxjs';
import { QueryFn } from '@angular/fire/database';

export abstract class Collection<T> {

    public abstract get entityName(): string;

    public abstract list(queryFn?: QueryFn): Observable<T[]>;

    public abstract get(key: string): Observable<T>;

    public abstract delete(key: string): Promise<void>;

    public abstract save(model: T): Promise<string>;

    public abstract update(updates?: { [key: string]: any }): Promise<any>;
}