import {RoomInfo} from "src/model/Dictionary/RoomInfo";

/**
 * Dictionary with all possible languages on site
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