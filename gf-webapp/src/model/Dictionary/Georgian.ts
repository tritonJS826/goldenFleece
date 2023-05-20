/**
 * Room properties which possible to use on Georgian language
 */
export class Georgian {

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

  constructor(roomData: Georgian) {
    this.title = roomData.title;
    this.description = roomData.description;
    this.descriptionLong = roomData.descriptionLong;
  }

}