import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../services/api';

@Pipe({
  name: 'pathResolver'
})
export class PathResolverPipe implements PipeTransform {

  constructor(
    private store: Store
  ) {
  }

  transform(value: string, ...args: any[]): Observable<string> {
    return this.store.downloadPath(value);
  }

}
