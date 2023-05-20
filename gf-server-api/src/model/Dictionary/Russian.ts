/**
 * Room properties which possible to use on Russian language
 * @swagger
 *   components:
 *     schemas:
 *       Russian:
 *         properties:
 *           title:
 *             type: string
 *             description: title of room.
 *             example: Single room
 *           description:
 *             type: string
 *             description: short description of room.
 *             example: A comfortable room
 *           descriptionLong:
 *             type: string
 *             description: long description of room.
 *             example: Wake up to the breathtaking beauty of the Pindus mountains in a double room
 *         required:
 *           - title
 *           - description
 *           - descriptionLong
 */
export class Russian {

  /**
   * Room's title
   */
  public title: string;

  /**
   * Room's description
   */
  public description: string;

  /**
   * Room's long description
   */
  public descriptionLong: string;

  constructor(roomData: Russian) {
    this.title = roomData.title;
    this.description = roomData.description;
    this.descriptionLong = roomData.descriptionLong;
  }

}