import {SandboxReposotoryInterface} from "./SandboxRepositoryInterface";
import util from "util";
import {readFile} from "fs";
import path from "path";

const readFileAsync = util.promisify(readFile);
const pathToSandboxTemplate = path.join(__dirname, "/static/sandbox.html");

/**
 * Sandbox repository used FS to access files
 */
export class SandboxRepositoryFS implements SandboxReposotoryInterface {

  /**
   * Resource server api port (manipulate files)
   */
  private port: string;

  /**
   * Resource static server (readonly files)
   */
  private staticServerPort: string;

  constructor(sandboxRepositoryFSConstructorParameters: SandboxRepositoryFSConstructorParameters) {
    this.port = sandboxRepositoryFSConstructorParameters.port;
    this.staticServerPort = sandboxRepositoryFSConstructorParameters.staticServerPort;
  }

  /**
   * Get sandbox HTML string
   */
  public getSandboxHTML = async (): Promise<string> => {
    const indexRaw = await readFileAsync(pathToSandboxTemplate, "utf8");
    const index = indexRaw
      .replaceAll("${WRITE_SERVER_PORT}", this.port)
      .replaceAll("${READ_SERVER_PORT}", this.staticServerPort);

    return index;
  };

}


/**
 * SandboxRepositoryFS constructor parameters
 */
export interface SandboxRepositoryFSConstructorParameters {
  /**
   * Port for resource server for create, update, delete files
   */
  port: string;

  /**
   * Port for static resource server for get files
   */
  staticServerPort: string;
}