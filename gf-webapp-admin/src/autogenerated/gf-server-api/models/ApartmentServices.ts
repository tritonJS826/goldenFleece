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


/**
 * 
 * @export
 */
export const ApartmentServices = {
    WiFi: 'WiFi',
    Laundry: 'Laundry',
    TeaCoffeeMaker: 'TeaCoffeeMaker',
    Heating: 'Heating',
    AirportShuttle: 'AirportShuttle'
} as const;
export type ApartmentServices = typeof ApartmentServices[keyof typeof ApartmentServices];


export function ApartmentServicesFromJSON(json: any): ApartmentServices {
    return ApartmentServicesFromJSONTyped(json, false);
}

export function ApartmentServicesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApartmentServices {
    return json as ApartmentServices;
}

export function ApartmentServicesToJSON(value?: ApartmentServices | null): any {
    return value as any;
}

