import { Collection } from './collection';

export abstract class Repository {
    
    public abstract get<T>(collectionName: string): Collection<T>;
    
}
