import { BaseModel } from './base.model';

export interface Category extends BaseModel {
    name: string;
    pictures: {
        icon: string;
    };
    ads: [{key: string, val: boolean}];
    numberOfAds(): number;
}