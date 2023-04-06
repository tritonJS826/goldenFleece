/**
 * Apartments type
 * @swagger
 *   components:
 *     schemas:
 *       Apartments:
 *         type: string
 *         enum:
 *           - Single
 *           - Double
 *           - Twin
 *         example: Single
 */
export enum Apartments {
  /**
   * Apartments for one person
   */
  Single = "Single",
  /**
   * Apartments for two people
   */
  Double = "Double",
  /**
   * Apartments for two people with separate beds
   */
  Twin = "Twin",
}
