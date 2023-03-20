import {ResourceServiceModel} from "src/service/resourceService/ResourceServiceModel";
import {ResourceServiceInterface} from "src/service/resourceService/ResourceServiceInterface";

/**
 * Resource service provide availability to manipulate with files resources
 */
export const resourceService: ResourceServiceInterface = new ResourceServiceModel();