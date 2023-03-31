/* tslint:disable */
/* eslint-disable */
/**
 * Golden Fleece API
 * A simple REST API for providing basic CRUD-access to the employees in a Golden Fleece database.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ApartmentServices } from './ApartmentServices';
import {
    ApartmentServicesFromJSON,
    ApartmentServicesFromJSONTyped,
    ApartmentServicesToJSON,
} from './ApartmentServices';
import type { Price } from './Price';
import {
    PriceFromJSON,
    PriceFromJSONTyped,
    PriceToJSON,
} from './Price';

/**
 * 
 * @export
 * @interface Room
 */
export interface Room {
    /**
     * The room's type.
     * @type {string}
     * @memberof Room
     */
    apartmentsType: RoomApartmentsTypeEnum;
    /**
     * 
     * @type {Array<ApartmentServices>}
     * @memberof Room
     */
    services: Array<ApartmentServices>;
    /**
     * The room's ID.
     * @type {string}
     * @memberof Room
     */
    id: string;
    /**
     * Short room's description.
     * @type {string}
     * @memberof Room
     */
    description: string;
    /**
     * The room's description.
     * @type {string}
     * @memberof Room
     */
    descriptionLong: string;
    /**
     * The room's price.
     * @type {Price}
     * @memberof Room
     */
    price: Price;
    /**
     * The room's square.
     * @type {number}
     * @memberof Room
     */
    square: number;
    /**
     * Amount of adults who can stay in the room.
     * @type {number}
     * @memberof Room
     */
    adults: number;
    /**
     * The room's promo image URL.
     * @type {string}
     * @memberof Room
     */
    promoImgUrl: string;
    /**
     * The rooms slider images URL.
     * @type {Array<string>}
     * @memberof Room
     */
    images: Array<string>;
    /**
     * The room's rating.
     * @type {number}
     * @memberof Room
     */
    rating: number;
}


/**
 * @export
 */
export const RoomApartmentsTypeEnum = {
    Single: 'Single',
    Double: 'Double',
    Twin: 'Twin'
} as const;
export type RoomApartmentsTypeEnum = typeof RoomApartmentsTypeEnum[keyof typeof RoomApartmentsTypeEnum];


/**
 * Check if a given object implements the Room interface.
 */
export function instanceOfRoom(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "apartmentsType" in value;
    isInstance = isInstance && "services" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "descriptionLong" in value;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "square" in value;
    isInstance = isInstance && "adults" in value;
    isInstance = isInstance && "promoImgUrl" in value;
    isInstance = isInstance && "images" in value;
    isInstance = isInstance && "rating" in value;

    return isInstance;
}

export function RoomFromJSON(json: any): Room {
    return RoomFromJSONTyped(json, false);
}

export function RoomFromJSONTyped(json: any, ignoreDiscriminator: boolean): Room {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apartmentsType': json['apartmentsType'],
        'services': ((json['services'] as Array<any>).map(ApartmentServicesFromJSON)),
        'id': json['id'],
        'description': json['description'],
        'descriptionLong': json['descriptionLong'],
        'price': PriceFromJSON(json['price']),
        'square': json['square'],
        'adults': json['adults'],
        'promoImgUrl': json['promoImgUrl'],
        'images': json['images'],
        'rating': json['rating'],
    };
}

export function RoomToJSON(value?: Room | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apartmentsType': value.apartmentsType,
        'services': ((value.services as Array<any>).map(ApartmentServicesToJSON)),
        'id': value.id,
        'description': value.description,
        'descriptionLong': value.descriptionLong,
        'price': PriceToJSON(value.price),
        'square': value.square,
        'adults': value.adults,
        'promoImgUrl': value.promoImgUrl,
        'images': value.images,
        'rating': value.rating,
    };
}

