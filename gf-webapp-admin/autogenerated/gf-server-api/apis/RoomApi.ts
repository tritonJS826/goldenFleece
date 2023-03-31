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
import type {
  Room,
} from '../models';
import {
    RoomFromJSON,
    RoomToJSON,
} from '../models';

export interface ApiRoomsRoomIdPutRequest {
    room: Room;
}

/**
 * RoomApi - interface
 * 
 * @export
 * @interface RoomApiInterface
 */
export interface RoomApiInterface {
    /**
     * Delete a room by ID
     * @summary Delete room by ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomApiInterface
     */
    apiRoomsRoomIdDeleteRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete a room by ID
     * Delete room by ID
     */
    apiRoomsRoomIdDelete(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Retrieve a room by ID
     * @summary Get room by ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomApiInterface
     */
    apiRoomsRoomIdGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Room>>;

    /**
     * Retrieve a room by ID
     * Get room by ID
     */
    apiRoomsRoomIdGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Room>;

    /**
     * Update room by ID
     * @summary Update room information by ID
     * @param {Room} room 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomApiInterface
     */
    apiRoomsRoomIdPutRaw(requestParameters: ApiRoomsRoomIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Room>>;

    /**
     * Update room by ID
     * Update room information by ID
     */
    apiRoomsRoomIdPut(requestParameters: ApiRoomsRoomIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Room>;

}

/**
 * 
 */
export class RoomApi extends runtime.BaseAPI implements RoomApiInterface {

    /**
     * Delete a room by ID
     * Delete room by ID
     */
    async apiRoomsRoomIdDeleteRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rooms/:{room_id}`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a room by ID
     * Delete room by ID
     */
    async apiRoomsRoomIdDelete(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiRoomsRoomIdDeleteRaw(initOverrides);
    }

    /**
     * Retrieve a room by ID
     * Get room by ID
     */
    async apiRoomsRoomIdGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Room>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rooms/:{room_id}`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RoomFromJSON(jsonValue));
    }

    /**
     * Retrieve a room by ID
     * Get room by ID
     */
    async apiRoomsRoomIdGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Room> {
        const response = await this.apiRoomsRoomIdGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Update room by ID
     * Update room information by ID
     */
    async apiRoomsRoomIdPutRaw(requestParameters: ApiRoomsRoomIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Room>> {
        if (requestParameters.room === null || requestParameters.room === undefined) {
            throw new runtime.RequiredError('room','Required parameter requestParameters.room was null or undefined when calling apiRoomsRoomIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rooms/:{room_id}`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RoomToJSON(requestParameters.room),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RoomFromJSON(jsonValue));
    }

    /**
     * Update room by ID
     * Update room information by ID
     */
    async apiRoomsRoomIdPut(requestParameters: ApiRoomsRoomIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Room> {
        const response = await this.apiRoomsRoomIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
