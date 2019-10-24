import { Observable } from 'rxjs';

export abstract class Store {

    public abstract downloadPath(path: string): Observable<string>;

}