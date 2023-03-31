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
 *         required: true
 *         example: Single
 */

export enum Apartments {
  Single = "Single",
  Double = "Double",
  Twin = "Twin",
}
