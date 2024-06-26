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
import type { Pagination } from './Pagination';
import {
    PaginationFromJSON,
    PaginationFromJSONTyped,
    PaginationToJSON,
} from './Pagination';
import type { Step } from './Step';
import {
    StepFromJSON,
    StepFromJSONTyped,
    StepToJSON,
} from './Step';

/**
 * 
 * @export
 * @interface TaskStepsListResponse
 */
export interface TaskStepsListResponse {
    /**
     * 
     * @type {Array<Step>}
     * @memberof TaskStepsListResponse
     */
    steps: Array<Step>;
    /**
     * 
     * @type {Pagination}
     * @memberof TaskStepsListResponse
     */
    pagination: Pagination;
}

/**
 * Check if a given object implements the TaskStepsListResponse interface.
 */
export function instanceOfTaskStepsListResponse(value: object): boolean {
    if (!('steps' in value)) return false;
    if (!('pagination' in value)) return false;
    return true;
}

export function TaskStepsListResponseFromJSON(json: any): TaskStepsListResponse {
    return TaskStepsListResponseFromJSONTyped(json, false);
}

export function TaskStepsListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskStepsListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'steps': ((json['steps'] as Array<any>).map(StepFromJSON)),
        'pagination': PaginationFromJSON(json['pagination']),
    };
}

export function TaskStepsListResponseToJSON(value?: TaskStepsListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'steps': ((value['steps'] as Array<any>).map(StepToJSON)),
        'pagination': PaginationToJSON(value['pagination']),
    };
}

