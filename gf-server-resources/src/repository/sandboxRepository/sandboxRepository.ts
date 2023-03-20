import {SandboxRepositoryFS} from "src/repository/sandboxRepository/SandboxRepositoryFS";
import {SandboxReposotoryInterface} from "src/repository/sandboxRepository/SandboxRepositoryInterface";
import dotenv from "dotenv";

dotenv.config({path: ".env"});

const port: string = process.env.WRITE_SERVER_PORT!;
const staticServerPort: string = process.env.READ_SERVER_PORT!;

const sandboxRepositoryFSConfig = {
  port,
  staticServerPort,
};

/**
 * Sandbox repository
 */
export const sandboxRepository: SandboxReposotoryInterface = new SandboxRepositoryFS(
  sandboxRepositoryFSConfig,
);