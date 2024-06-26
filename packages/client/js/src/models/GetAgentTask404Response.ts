/* tslint:disable */
/* eslint-disable */
/**
 * Agent Protocol
 * Specification of the API protocol for communication with an agent.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetAgentTask404Response
 */
export interface GetAgentTask404Response {
    /**
     * Message stating the entity was not found
     * @type {string}
     * @memberof GetAgentTask404Response
     */
    message: string;
}

/**
 * Check if a given object implements the GetAgentTask404Response interface.
 */
export function instanceOfGetAgentTask404Response(value: object): boolean {
    if (!('message' in value)) return false;
    return true;
}

export function GetAgentTask404ResponseFromJSON(json: any): GetAgentTask404Response {
    return GetAgentTask404ResponseFromJSONTyped(json, false);
}

export function GetAgentTask404ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAgentTask404Response {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'],
    };
}

export function GetAgentTask404ResponseToJSON(value?: GetAgentTask404Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': value['message'],
    };
}

