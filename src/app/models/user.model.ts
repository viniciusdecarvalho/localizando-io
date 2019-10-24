import { BaseModel } from './base.model'

export interface User extends BaseModel {
    name: string;
    login: string;
    facebookid: string;
    pass: string;
    ads: [{key: string, val: boolean}];
}