import {RoomInfo} from "src/model/Dictionary/RoomInfo";

/**
 * Dictionary with all possible languages on site
 * @swagger
 *   components:
 *     schemas:
 *       Dictionary:
 *         properties:
 *           en:
 *             $ref: '#/components/schemas/RoomInfo'
 *           ru:
 *             $ref: '#/components/schemas/RoomInfo'
 *           ge:
 *             $ref: '#/components/schemas/RoomInfo'
 *         required:
 *           - en
 *           - ru
 *           - ge
 */
export class Dictionary {

  /**
   * English language
   */
  public en: RoomInfo;

  /**
   *  Russian languages
   */
  public ru: RoomInfo;

  /**
   *  Georgian languages
   */
  public ge: RoomInfo;

  constructor(language: Dictionary) {
    this.en = language.en;
    this.ru = language.ru;
    this.ge = language.ge;
  }

}