/**
 * Room properties which possible to use on Russian language
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