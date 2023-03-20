import {ResourceRepositoryFS} from "src/repository/resourceRepository/ResourceRepositoryFS";
import {ResourceRepositoryInterface} from "src/repository/resourceRepository/ResourceRepositoryInterface";

/**
 * Resource repository
 */
export const resourceRepository: ResourceRepositoryInterface = new ResourceRepositoryFS();