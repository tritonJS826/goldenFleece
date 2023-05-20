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
/**
 * 
 * @export
 * @interface Georgian
 */
export interface Georgian {
    /**
     * title of room.
     * @type {string}
     * @memberof Georgian
     */
    title: string;
    /**
     * short description of room.
     * @type {string}
     * @memberof Georgian
     */
    description: string;
    /**
     * long description of room.
     * @type {string}
     * @memberof Georgian
     */
    descriptionLong: string;
}

/**
 * Check if a given object implements the Georgian interface.
 */
export function instanceOfGeorgian(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "descriptionLong" in value;

    return isInstance;
}

export function GeorgianFromJSON(json: any): Georgian {
    return GeorgianFromJSONTyped(json, false);
}

export function GeorgianFromJSONTyped(json: any, ignoreDiscriminator: boolean): Georgian {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'description': json['description'],
        'descriptionLong': json['descriptionLong'],
    };
}

export function GeorgianToJSON(value?: Georgian | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'description': value.description,
        'descriptionLong': value.descriptionLong,
    };
}

