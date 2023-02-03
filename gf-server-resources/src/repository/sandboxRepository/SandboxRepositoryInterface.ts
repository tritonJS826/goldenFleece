/**
 * Sandbox repository interface
 */
export interface SandboxReposotoryInterface {
  /**
   * Returun sandbox html as string
   */
  getSandboxHTML(): Promise<string>
}