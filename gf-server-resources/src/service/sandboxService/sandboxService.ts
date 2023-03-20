import {SandboxServiceInterface} from "src/service/sandboxService/SandboxServerInterface";
import {SandboxService} from "src/service/sandboxService/SandboxServiceClass";

/**
 * Sandbox service (temporal)
 */
export const sandboxService: SandboxServiceInterface = new SandboxService();