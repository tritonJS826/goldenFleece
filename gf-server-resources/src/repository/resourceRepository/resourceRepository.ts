import {ResourceRepositoryFS} from "./ResourceRepositoryFS";
import {ResourceRepositoryInterface} from "./ResourceRepositoryInterface";

/**
 * Resource repository
 */
export const resourceRepository: ResourceRepositoryInterface = new ResourceRepositoryFS();