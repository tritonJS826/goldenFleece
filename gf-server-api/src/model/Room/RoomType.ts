/**
 * Room type
 * @swagger
 *   components:
 *     schemas:
 *       RoomType:
 *         type: string
 *         enum:
 *           - Single
 *           - Double
 *           - Twin
 *         example: Single
 */
export enum RoomType {
  /**
   * Room for one person
   */
  Single = "Single",
  /**
   * Room for two people
   */
  Double = "Double",
  /**
   * Room for two people with separate beds
   */
  Twin = "Twin",
}
