import {English} from "src/model/Dictionary/English";
import {Russian} from "src/model/Dictionary/Russian";
import {Georgian} from "src/model/Dictionary/Georgian";

/**
 * Dictionary with all possible languages on site
 * @swagger
 *   components:
 *     schemas:
 *       Dictionary:
 *         properties:
 *           en:
 *             $ref: '#/components/schemas/English'
 *           ru:
 *             $ref: '#/components/schemas/Russian'
 *           ge:
 *             $ref: '#/components/schemas/Georgian'
 *         required:
 *           - en
 *           - ru
 *           - ge
 */
export class Dictionary {

  /**
   * English language
   */
  public en: English;

  /**
   *  Russian languages
   */
  public ru: Russian;

  /**
   *  Georgian languages
   */
  public ge: Georgian;

  constructor(language: Dictionary) {
    this.en = language.en;
    this.ru = language.ru;
    this.ge = language.ge;
  }

}