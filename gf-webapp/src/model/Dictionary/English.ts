/**
 * Room properties which possible to use on English language
 */
export class English {

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

  constructor(roomData: English) {
    this.title = roomData.title;
    this.description = roomData.description;
    this.descriptionLong = roomData.descriptionLong;
  }

}