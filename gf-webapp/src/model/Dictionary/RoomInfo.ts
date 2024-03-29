/**
 * Room properties which possible to use on each language
 */
export class RoomInfo {

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

  constructor(roomData: RoomInfo) {
    this.title = roomData.title;
    this.description = roomData.description;
    this.descriptionLong = roomData.descriptionLong;
  }

}