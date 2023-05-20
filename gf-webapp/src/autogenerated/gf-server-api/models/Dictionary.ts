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
import type { English } from './English';
import {
    EnglishFromJSON,
    EnglishFromJSONTyped,
    EnglishToJSON,
} from './English';
import type { Georgian } from './Georgian';
import {
    GeorgianFromJSON,
    GeorgianFromJSONTyped,
    GeorgianToJSON,
} from './Georgian';
import type { Russian } from './Russian';
import {
    RussianFromJSON,
    RussianFromJSONTyped,
    RussianToJSON,
} from './Russian';

/**
 * 
 * @export
 * @interface Dictionary
 */
export interface Dictionary {
    /**
     * 
     * @type {English}
     * @memberof Dictionary
     */
    en: English;
    /**
     * 
     * @type {Russian}
     * @memberof Dictionary
     */
    ru: Russian;
    /**
     * 
     * @type {Georgian}
     * @memberof Dictionary
     */
    ge: Georgian;
}

/**
 * Check if a given object implements the Dictionary interface.
 */
export function instanceOfDictionary(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "en" in value;
    isInstance = isInstance && "ru" in value;
    isInstance = isInstance && "ge" in value;

    return isInstance;
}

export function DictionaryFromJSON(json: any): Dictionary {
    return DictionaryFromJSONTyped(json, false);
}

export function DictionaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Dictionary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'en': EnglishFromJSON(json['en']),
        'ru': RussianFromJSON(json['ru']),
        'ge': GeorgianFromJSON(json['ge']),
    };
}

export function DictionaryToJSON(value?: Dictionary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'en': EnglishToJSON(value.en),
        'ru': RussianToJSON(value.ru),
        'ge': GeorgianToJSON(value.ge),
    };
}

