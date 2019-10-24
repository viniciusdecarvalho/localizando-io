import { BaseModel } from './base.model';

export interface Business extends BaseModel {
    info: BusinessInfo;
    location: BusinessLocation;
    pictures: BusinessPictures;
    social: BusinessSocial;
    user: [{key: string, val: boolean}];
    categories: [{key: string, val: boolean}];
}

export interface Advertisement extends Business {

}

export interface BusinessInfo {
    name: string;        
    description: string;
    phone: string;
}

export interface BusinessLocation {
    address: string,
    latitude: string,
    longitude: string
}

export interface BusinessPictures {
    main: string,
    ads: [ string ]
}

export interface BusinessSocial {
    facebook: string,
    twitter: string,
    website: string,
    whatsapp: string,
    instagran: string
}