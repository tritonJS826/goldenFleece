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


import * as runtime from '../runtime';

export interface ApiRoomsPostRequest {
    body: object;
}

/**
 * RoomsApi - interface
 * 
 * @export
 * @interface RoomsApiInterface
 */
export interface RoomsApiInterface {
    /**
     * Retrieve a list of all rooms
     * @summary Get list of rooms
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApiInterface
     */
    apiRoomsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<object>>>;

    /**
     * Retrieve a list of all rooms
     * Get list of rooms
     */
    apiRoomsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<object>>;

    /**
     * Add new room
     * @summary Add new room
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApiInterface
     */
    apiRoomsPostRaw(requestParameters: ApiRoomsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     * Add new room
     * Add new room
     */
    apiRoomsPost(requestParameters: ApiRoomsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

}

/**
 * 
 */
export class RoomsApi extends runtime.BaseAPI implements RoomsApiInterface {

    /**
     * Retrieve a list of all rooms
     * Get list of rooms
     */
    async apiRoomsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<object>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rooms`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Retrieve a list of all rooms
     * Get list of rooms
     */
    async apiRoomsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<object>> {
        const response = await this.apiRoomsGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Add new room
     * Add new room
     */
    async apiRoomsPostRaw(requestParameters: ApiRoomsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling apiRoomsPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rooms`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Add new room
     * Add new room
     */
    async apiRoomsPost(requestParameters: ApiRoomsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.apiRoomsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}